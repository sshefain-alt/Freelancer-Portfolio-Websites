/**
 * Generates sitemap-index.xml + sitemap.xml from the finished build output.
 *
 * Runs automatically after `astro build`. URLs are derived from the emitted
 * HTML files so the sitemap can never drift from what actually shipped.
 *
 * Set SITE_URL to your real domain:
 *   $env:SITE_URL="https://yourdomain.com"; npm run build
 */
import { readdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');
const base = (process.env.SITE_URL ?? 'https://example.com').replace(/\/+$/, '');

const exclude = /(^|\/)(404|500)\.html$/;

/** @param {string} dir @param {string[]} out */
async function walk(dir, out = []) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else if (entry.name.endsWith('.html') && !exclude.test(full)) out.push(full);
  }
  return out;
}

const files = await walk(dist);

const urls = files
  .map((f) => {
    let rel = path.relative(dist, f).replace(/\\/g, '/');
    if (rel === 'index.html') return '/';
    rel = rel.replace(/index\.html$/, '');
    return `/${rel}`;
  })
  .filter((u) => u !== '/')
  .sort();

// Hub first, then each site's home page, then the rest.
const rank = (u) => {
  const segs = u.split('/').filter(Boolean).length;
  return segs === 0 ? 0 : segs;
};
urls.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
urls.unshift('/');

const today = new Date().toISOString().slice(0, 10);

const body = urls
  .map(
    (u) => `  <url>
    <loc>${base}${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.split('/').filter(Boolean).length <= 1 ? 'weekly' : 'monthly'}</changefreq>
    <priority>${u === '/' ? '1.0' : u.split('/').filter(Boolean).length === 1 ? '0.9' : '0.7'}</priority>
  </url>`,
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${base}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`;

await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(path.join(dist, 'sitemap-index.xml'), index, 'utf8');

// Keep robots.txt pointing at the configured domain.
try {
  const robots = path.join(dist, 'robots.txt');
  const { readFile } = await import('node:fs/promises');
  const txt = await readFile(robots, 'utf8');
  await writeFile(robots, txt.replace(/https?:\/\/[^\s]+\/sitemap-index\.xml/, `${base}/sitemap-index.xml`), 'utf8');
} catch {
  /* robots.txt is optional */
}

try {
  await stat(path.join(dist, 'sitemap.xml'));
  console.log(`sitemap: ${urls.length} URLs → ${base}/sitemap.xml`);
} catch {
  console.warn('sitemap: no pages found');
}

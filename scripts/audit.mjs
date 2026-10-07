/**
 * Post-build quality audit. Run after `npm run build`.
 *
 * Checks every generated page for the things that matter:
 *   - exactly one H1, sane heading order
 *   - page-specific <title> and meta description
 *   - canonical + OpenGraph + Twitter tags
 *   - at least one schema.org JSON-LD block
 *   - alt text on every image
 *   - every internal link resolves to a real file
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');

const issues = [];
const pages = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.name.endsWith('.html')) pages.push(full);
  }
}

await walk(dist);

const titles = new Map();
const descriptions = new Map();

for (const file of pages) {
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  const html = await readFile(file, 'utf8');
  const url = rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;
  const fail = (msg) => issues.push(`${url}\n    → ${msg}`);

  const h1s = html.match(/<h1[\s>]/gi) ?? [];
  if (h1s.length !== 1) fail(`expected 1 <h1>, found ${h1s.length}`);

  // Heading order: never skip a level going down.
  const levels = [...html.matchAll(/<h([1-6])[\s>]/gi)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > 1) {
      fail(`heading level jumps from h${levels[i - 1]} to h${levels[i]}`);
      break;
    }
  }

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
  // Measure what a human actually sees — "&amp;" is one character.
  const decoded = (s) =>
    s
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

  if (!title) fail('missing <title>');
  else if (decoded(title).length > 65)
    fail(`<title> too long (${decoded(title).length} chars): ${decoded(title)}`);
  else if (titles.has(title)) fail(`duplicate <title> shared with ${titles.get(title)}`);
  else titles.set(title, url);

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim();
  if (!desc) fail('missing meta description');
  else if (desc.length < 70 || desc.length > 170)
    fail(`meta description length ${desc.length} (aim 70–170)`);
  else if (descriptions.has(desc)) fail(`duplicate description shared with ${descriptions.get(desc)}`);
  else descriptions.set(desc, url);

  if (!/<link rel="canonical" href="https?:\/\/[^"]+"/.test(html)) fail('missing canonical');
  if (!/property="og:title"/.test(html)) fail('missing og:title');
  if (!/property="og:description"/.test(html)) fail('missing og:description');
  if (!/property="og:url"/.test(html)) fail('missing og:url');
  if (!/property="og:image"/.test(html)) fail('missing og:image');
  if (!/name="twitter:card"/.test(html)) fail('missing twitter:card');

  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!ld.length) fail('no JSON-LD structured data');
  for (const [, json] of ld) {
    try {
      JSON.parse(json);
    } catch (e) {
      fail(`invalid JSON-LD: ${e.message}`);
    }
  }

  // Images: alt required.
  for (const [, tag] of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(tag)) fail(`img without alt: ${tag.slice(0, 90)}`);
  }
  for (const [, tag] of html.matchAll(/<svg\b[^>]*role="img"[^>]*>/g)) {
    if (!/aria-label=/.test(tag) && !/<title>/.test(html)) fail(`svg[role=img] without label`);
  }

  // Form controls must be labelled.
  for (const [, tag] of html.matchAll(/<(input|select|textarea)\b[^>]*>/g)) {
    if (/type="hidden"|tabindex="-1"/.test(tag)) continue;
    const idMatch = tag.match(/\bid="([^"]+)"/);
    if (!idMatch) continue;
    const id = idMatch[1];
    const labelled =
      new RegExp(`<label[^>]*for="${id}"`).test(html) || /aria-label=/.test(tag);
    if (!labelled) fail(`form control #${id} has no <label for>`);
  }

  // Internal links must resolve. Query strings are stripped — they are sent
  // to the server, not used for file lookup (e.g. /contact/?type=…).
  const hrefs = [...html.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]);
  for (const hrefRaw of new Set(hrefs)) {
    const href = hrefRaw.split('?')[0];
    if (!href) continue;
    if (href.startsWith('/sitemap') || href.startsWith('/favicon')) continue;
    const target = href.endsWith('/')
      ? path.join(dist, href, 'index.html')
      : path.join(dist, href);
    try {
      await stat(target);
    } catch {
      if (path.extname(href)) {
        try {
          await stat(path.join(dist, href));
          continue;
        } catch {
          /* fall through */
        }
      }
      fail(`broken internal link: ${hrefRaw}`);
    }
  }
}

// ---- report ----
const sites = ['web-designer', 'photographer', 'videographer', 'architect'];
const bySection = (u) => {
  const seg = u.split('/').filter(Boolean);
  if (seg.length === 0) return 'hub';
  return sites.includes(seg[0]) ? seg[0] : 'other';
};

console.log(`\nAudited ${pages.length} pages\n`);

if (!issues.length) {
  console.log('✔ No issues found.\n');
} else {
  const grouped = {};
  for (const i of issues) {
    const url = i.split('\n')[0];
    const k = bySection(url);
    (grouped[k] ??= []).push(i);
  }
  for (const [k, list] of Object.entries(grouped)) {
    console.log(`── ${k} (${list.length}) ──`);
    for (const i of list.slice(0, 40)) console.log('  ' + i.replace('\n', '\n  '));
    if (list.length > 40) console.log(`  … and ${list.length - 40} more`);
    console.log('');
  }
  console.log(`TOTAL ISSUES: ${issues.length}\n`);
}

process.exitCode = issues.length ? 1 : 0;

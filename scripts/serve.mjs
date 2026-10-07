/**
 * Zero-dependency static file server for previewing the built site.
 *   npm run build && npm run serve
 * Optional port:  node scripts/serve.mjs 4321
 */
import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), 'dist');
const port = Number(process.argv[2] ?? process.env.PORT ?? 4321);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
};

const resolve = async (urlPath) => {
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  const safe = path.normalize(clean).replace(/^(\.\.[/\\])+/, '');
  const candidates = [
    path.join(root, safe),
    path.join(root, safe, 'index.html'),
    path.join(root, `${safe}.html`),
  ];
  for (const c of candidates) {
    if (!c.startsWith(root)) continue;
    try {
      const s = await stat(c);
      if (s.isFile()) return { path: c, size: s.size };
    } catch {
      /* try next */
    }
  }
  return null;
};

createServer(async (req, res) => {
  const hit = await resolve(req.url ?? '/');

  if (!hit) {
    const notFound = await resolve('/404.html');
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    if (notFound) return createReadStream(notFound.path).pipe(res);
    return res.end('<h1>404 — Not found</h1>');
  }

  const ext = path.extname(hit.path).toLowerCase();
  res.writeHead(200, {
    'Content-Type': TYPES[ext] ?? 'application/octet-stream',
    'Content-Length': hit.size,
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600',
  });
  createReadStream(hit.path).pipe(res);
}).listen(port, () => {
  console.log(`\n  Previewing dist/ → http://localhost:${port}\n`);
  console.log(`  Hub:      http://localhost:${port}/`);
  console.log(`  Web:      http://localhost:${port}/web-designer/`);
  console.log(`  Photo:    http://localhost:${port}/photographer/`);
  console.log(`  Video:    http://localhost:${port}/videographer/`);
  console.log(`  Architect:http://localhost:${port}/architect/\n`);
});

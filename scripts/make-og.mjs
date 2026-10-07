/**
 * Generates public/og-default.png (1200×630) — the social share image
 * referenced by the OpenGraph tags. Rendered from SVG via sharp.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0e1015"/>
      <stop offset="55%" stop-color="#171a21"/>
      <stop offset="100%" stop-color="#0b0d12"/>
    </linearGradient>
    <radialGradient id="g1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.75"/>
      <stop offset="60%" stop-color="#6366f1" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0H0V60" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <circle cx="1010" cy="110" r="380" fill="url(#g1)"/>
  <circle cx="120" cy="560" r="300" fill="url(#g1)" opacity="0.6"/>

  <!-- Four device cards representing the four templates -->
  <g opacity="0.95">
    <rect x="742" y="150" width="180" height="126" rx="12" fill="#0b0d13" stroke="#6366f1" stroke-opacity="0.5" stroke-width="2"/>
    <rect x="758" y="166" width="96" height="12" rx="6" fill="#ffffff" fill-opacity="0.75"/>
    <rect x="758" y="186" width="148" height="8" rx="4" fill="#ffffff" fill-opacity="0.22"/>
    <rect x="758" y="202" width="120" height="8" rx="4" fill="#ffffff" fill-opacity="0.22"/>
    <rect x="758" y="230" width="72" height="26" rx="13" fill="#6366f1"/>

    <rect x="944" y="150" width="180" height="126" rx="12" fill="#0b0d13" stroke="#ffffff" stroke-opacity="0.16" stroke-width="2"/>
    <circle cx="1034" cy="204" r="34" fill="none" stroke="#f43f5e" stroke-width="7" stroke-opacity="0.85"/>
    <circle cx="1034" cy="204" r="14" fill="#f43f5e" fill-opacity="0.5"/>

    <rect x="742" y="300" width="180" height="126" rx="12" fill="#0b0d13" stroke="#ffffff" stroke-opacity="0.16" stroke-width="2"/>
    <rect x="758" y="316" width="148" height="70" rx="8" fill="#0ea5e9" fill-opacity="0.22"/>
    <path d="M818 336 l26 16 -26 16 z" fill="#ffffff" fill-opacity="0.85"/>
    <rect x="758" y="396" width="148" height="6" rx="3" fill="#ffffff" fill-opacity="0.3"/>
    <rect x="758" y="408" width="100" height="6" rx="3" fill="#0ea5e9"/>

    <rect x="944" y="300" width="180" height="126" rx="12" fill="#0b0d13" stroke="#ffffff" stroke-opacity="0.16" stroke-width="2"/>
    <g stroke="#14b8a6" stroke-width="3" fill="none" stroke-opacity="0.85">
      <path d="M960 372 h72 v54"/>
      <path d="M1032 316 v56 h72"/>
      <rect x="968" y="342" width="40" height="30"/>
    </g>
    <g stroke="#ffffff" stroke-opacity="0.12" stroke-width="1.5">
      <path d="M960 330 v96 M1000 330 v96 M1040 330 v96 M1080 330 v96 M1108 330 v96"/>
      <path d="M944 336 h180 M944 364 h180 M944 392 h180"/>
    </g>
    <rect x="944" y="300" width="180" height="126" rx="12" fill="none" stroke="#14b8a6" stroke-width="3"/>
  </g>

  <!-- Type -->
  <rect x="72" y="176" width="58" height="4" rx="2" fill="#a5b4fc"/>
  <text x="72" y="150" fill="#a5b4fc" font-family="Helvetica, Arial, sans-serif"
        font-size="19" font-weight="bold" letter-spacing="4.5">PORTFOLIO TEMPLATES</text>

  <text x="72" y="250" fill="#ffffff" font-family="Helvetica, Arial, sans-serif"
        font-size="76" font-weight="bold">Freelancer</text>
  <text x="72" y="330" fill="#ffffff" font-family="Helvetica, Arial, sans-serif"
        font-size="76" font-weight="bold">Portfolio Websites</text>

  <text x="72" y="392" fill="#c7cbd4" font-family="Helvetica, Arial, sans-serif" font-size="27">
    Web Designer &#183; Photographer &#183; Videographer &#183; Architect
  </text>

  <g font-family="Helvetica, Arial, sans-serif" font-size="19" fill="#8b909c">
    <text x="72" y="452">Case studies &#183; Project gallery &#183; Lead-gen contact forms</text>
    <text x="72" y="486">Static HTML &#183; SEO + schema.org &#183; Mobile-first &#183; Accessible</text>
  </g>

  <g>
    <rect x="72" y="522" width="176" height="46" rx="23" fill="#6366f1"/>
    <text x="160" y="551" fill="#ffffff" font-family="Helvetica, Arial, sans-serif"
          font-size="19" font-weight="bold" text-anchor="middle">4 complete sites</text>
    <rect x="262" y="522" width="200" height="46" rx="23" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="2"/>
    <text x="362" y="551" fill="#c7cbd4" font-family="Helvetica, Arial, sans-serif"
          font-size="19" text-anchor="middle">65 pages built</text>
  </g>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile(path.join(root, 'public', 'og-default.png'), png);

const meta = await sharp(png).metadata();
console.log(`public/og-default.png  ${meta.width}x${meta.height}  ${png.length} bytes`);

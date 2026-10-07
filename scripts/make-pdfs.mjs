/**
 * Generates a small, genuinely-valid one-page PDF portfolio placeholder for
 * each site that advertises a downloadable PDF.
 *
 * Replace the output in `public/` with your real exported portfolio — the
 * links throughout the site already point at these exact file names.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, 'public');

/** @param {string} s */
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

/**
 * @param {{ file: string, title: string, subtitle: string, lines: string[] }} doc
 */
function buildPdf({ title, subtitle, lines }) {
  const W = 595.28;
  const H = 841.89;

  const ops = [];
  ops.push('BT', '/F2 26 Tf', '1 0 0 1 62 762 Tm', `(${esc(title)}) Tj`, 'ET');
  ops.push('BT', '/F1 11 Tf', '1 0 0 1 62 738 Tm', `(${esc(subtitle)}) Tj`, 'ET');
  ops.push('0.3 0.3 0.36 rg', '62 726 471 1.5 re', 'f');

  let y = 696;
  ops.push('BT', '/F1 11 Tf');
  for (const line of lines) {
    ops.push(`1 0 0 1 62 ${y} Tm`, `(${esc(line)}) Tj`);
    y -= 22;
  }
  ops.push('ET');

  ops.push('0 0 0 rg', 'BT', '/F1 9 Tf', '1 0 0 1 62 54 Tm',
    '(Placeholder portfolio PDF - replace public/ with your real export.) Tj', 'ET');

  const content = ops.join('\n');

  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] ` +
      '/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>',
    `<< /Length ${Buffer.byteLength(content, 'latin1')} >>\nstream\n${content}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [0];

  objects.forEach((body, i) => {
    offsets.push(Buffer.byteLength(pdf, 'latin1'));
    pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
  });

  const xrefStart = Buffer.byteLength(pdf, 'latin1');
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefStart}\n%%EOF\n`;

  return Buffer.from(pdf, 'latin1');
}

const docs = [
  {
    file: 'maya-ellison-portfolio.pdf',
    title: 'Maya Ellison Studio',
    subtitle: 'Freelance Web Designer - Austin, Texas',
    lines: [
      'Selected work 2023 - 2025',
      '',
      'Terrawatt Energy Platform .............. Web Design',
      'Bluecurrent Impact Report .............. Branding',
      'Lumen Grid Design System ....... Design System',
      'Northbound Research ............. Web Design',
      'Fieldnote Marketing Site ................... UX',
      'Vantage Onboarding Flow ................ UX',
      '',
      'Full case studies and results online.',
      'hello@mayaellison.studio',
    ],
  },
  {
    file: 'elena-moreau-portfolio.pdf',
    title: 'Elena Moreau Photography',
    subtitle: 'Freelance Photographer - Lisbon, Portugal',
    lines: [
      'Selected commissions 2023 - 2025',
      '',
      'Casa Verde Restaurant ......... Hospitality',
      'Linho Studio Lookbook ............ Editorial',
      'Hotel Miramar Library ...... Hospitality',
      'Atelier Ceramics ................. Still Life',
      'Mercado Food Editorial ............... Food',
      'Norte Furniture Catalogue ....... Product',
      '',
      'Full galleries and packages online.',
      'studio@elenamoreau.photo',
    ],
  },
  {
    file: 'hart-grain-portfolio.pdf',
    title: 'Hart & Grain',
    subtitle: 'Freelance Videographer & Editor - Manchester, UK',
    lines: [
      'Selected films 2023 - 2025',
      '',
      'Kettlewell Launch Film ........ Brand Film',
      'NorthSummit 2025 ................. Event Video',
      'Field & Co Brand Story ...... Documentary',
      'Harbourline Social Cuts ............. Reels',
      'Lumenworks Recruitment ....... Brand Film',
      'Copper Cookery Series .......... Editing',
      '',
      'Full case studies and results online.',
      'book@hartandgrain.co.uk',
    ],
  },
  {
    file: 'lindqvist-portfolio.pdf',
    title: 'Lindqvist Arkitektur',
    subtitle: 'Freelance Architect - Copenhagen, Denmark',
    lines: [
      'Selected projects 2023 - 2025',
      '',
      'Villa Nor ................... Residential Design',
      'Harbour Extension ................. Extension',
      'Nordhavn Infill Three ..... Small Developer',
      'Skagen Summerhouse ...... Residential Design',
      'Ostergade Housing ................. Housing',
      'Malmo Townhouse ......... Residential Design',
      '',
      'Full case studies and floor plans online.',
      'studio@lindqvist-arkitektur.dk',
    ],
  },
];

await mkdir(outDir, { recursive: true });

for (const doc of docs) {
  const buf = buildPdf(doc);
  await writeFile(path.join(outDir, doc.file), buf);
  console.log(`  public/${doc.file}  ${buf.length} bytes`);
}

console.log(`\nGenerated ${docs.length} portfolio PDFs.\n`);

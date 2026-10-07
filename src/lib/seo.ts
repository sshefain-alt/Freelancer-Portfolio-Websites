/**
 * Small helpers that keep every page's metadata inside the lengths search
 * engines actually display (~65 chars for titles, 70–170 for descriptions).
 */

const clean = (s: string) => s.replace(/\s+/g, ' ').trim();

/** Truncate on a word boundary and append an ellipsis. */
export const truncate = (text: string, max: number): string => {
  const t = clean(text);
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  // Only break on a word boundary when one exists reasonably far in.
  const safe = lastSpace > Math.floor(max * 0.55) ? cut.slice(0, lastSpace) : cut;
  return safe.replace(/[,;:.\s|–—-]+$/, '') + '…';
};

/**
 * Build a title from segments (most → least important), joined with " | ".
 * If it runs long, lower-priority middle segments are dropped before the
 * primary segment is ever truncated — so keywords survive.
 *
 *   seoTitle([caseStudyTitle, `${role} Case Study`, brand])
 *   // "Villa Nør: … | Architect Case Study | Lindqvist Arkitektur"
 *   //  ↳ falls back to "Villa Nør: … | Lindqvist Arkitektur" when too long
 */
export const seoTitle = (segments: string[], max = 65): string => {
  const segs = segments.map(clean).filter(Boolean);
  if (!segs.length) return '';

  let current = [...segs];
  let out = current.join(' | ');

  while (out.length > max && current.length > 2) {
    current.splice(1, 1);
    out = current.join(' | ');
  }
  if (out.length <= max) return out;

  const tail = current[current.length - 1];
  const budget = max - tail.length - 3;
  if (budget >= 14) return `${truncate(current[0], budget)} | ${tail}`;

  return truncate(out, max);
};

/** Compose a description from sentences, guaranteeing a sane length. */
export const seoDescription = (...parts: string[]): string =>
  truncate(parts.map(clean).filter(Boolean).join(' '), 165);

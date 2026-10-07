/**
 * Single source of truth for every site in this build.
 *
 * ─── How to personalise ───────────────────────────────────────────────
 * 1. Edit (or add) a profile in `src/data/sites/`.
 * 2. Register it in the array below — the routes, nav, filters, schema and
 *    metadata all follow automatically.
 * 3. Drop real photography into `src/assets/` using the file names already
 *    referenced by each project's `cover` / `gallery` fields. Until then the
 *    site renders generated SVG placeholders, so nothing is ever broken.
 */
import type { Site } from './types';
import { web } from './sites/web';
import { photo } from './sites/photo';
import { video } from './sites/video';
import { architecture } from './sites/architecture';

export const sites: Site[] = [web, photo, video, architecture];

export const getSite = (prefix: string) => sites.find((s) => s.prefix === prefix);

/** Projects flagged `featured` — falls back to the first six. */
export const featuredProjects = (site: Site, count = 6) => {
  const flagged = site.projects.filter((p) => p.featured);
  return (flagged.length ? flagged : site.projects).slice(0, count);
};

export const featuredCaseStudies = (site: Site, count = 3) => {
  const flagged = site.caseStudies.filter((c) => c.featured);
  return (flagged.length ? flagged : site.caseStudies).slice(0, count);
};

/** Unique filter buckets for a site's gallery, in data order. */
export const projectCategories = (site: Site) =>
  [...new Set(site.projects.map((p) => p.category))];

export * from './types';

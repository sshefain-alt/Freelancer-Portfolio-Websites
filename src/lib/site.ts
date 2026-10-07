import type { Site } from '../data/types';

/** Placeholder motif that matches each freelancer's discipline. */
export const motifFor = (site: Site): 'web' | 'photo' | 'video' | 'architecture' =>
  site.kind === 'web'
    ? 'web'
    : site.kind === 'photo'
      ? 'photo'
      : site.kind === 'video'
        ? 'video'
        : 'architecture';

/** Normalises a path for canonical/active-link comparison. */
export const clean = (p: string) => (p === '/' ? '/' : p.replace(/\/+$/, ''));

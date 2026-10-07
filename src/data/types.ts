/**
 * Shared content model for every freelancer site.
 *
 * Everything the marketing copy depends on lives here, so the whole site
 * re-themes itself from a single object — see `src/data/index.ts`.
 */

export type SiteKind = 'web' | 'photo' | 'video' | 'architecture';

export interface SocialLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  summary: string;
  /** Bullet points / deliverables */
  points: string[];
}

export interface PackageTier {
  name: string;
  price: string;
  cadence?: string;
  summary: string;
  features: string[];
  highlighted?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** 1–2 letters shown in the avatar bubble */
  initials: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Short pill shown on cards, e.g. "Branding" or "Residential Design" */
  tag: string;
  /** Filter bucket within this freelancer's discipline */
  category: string;
  client?: string;
  year: string;
  /** File name inside src/assets (falls back to a generated placeholder) */
  cover: string;
  gallery?: string[];
  excerpt: string;
  overview: string[];
  tools: string[];
  outcomes: string[];
  metrics?: Metric[];
  featured?: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tag: string;
  category: string;
  client?: string;
  year: string;
  cover: string;
  gallery?: string[];
  challenge: string;
  goal: string;
  approach: string[];
  services: string[];
  timeline: string;
  tools: string[];
  results: string;
  metrics?: Metric[];
  featured?: boolean;
}

export interface Site {
  /** URL segment: /{prefix}/… */
  prefix: string;
  /** Short label used in the hub + filter chips */
  label: string;
  kind: SiteKind;

  name: string;
  brand: string;
  /** e.g. "Web Designer" — used in the H1 and meta copy */
  role: string;
  /** Plural service phrase used in the headline: "Web Design for …" */
  servicePhrase: string;
  /** Who the freelancer works for — completes "for [clients]" */
  clientsPhrase: string;
  city: string;
  region: string;
  positioning: string;
  bio: string[];
  yearsExperience: number;

  email: string;
  phone?: string;
  phoneDisplay?: string;
  availability: string;
  socials: SocialLink[];

  seo: { title: string; description: string };

  stats: Metric[];
  services: ServiceItem[];
  packages: PackageTier[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  faqs: Faq[];
  skills: string[];
  tools: string[];
  values: { title: string; body: string }[];
  timeline: { year: string; title: string; body: string }[];

  projects: Project[];
  caseStudies: CaseStudy[];

  /** Theme tokens */
  accent: string;
  accentDark: string;
  tint: string;
  /** Display typeface mood — serif reads editorial (photo/arch), sans reads modern (web/video) */
  display: 'serif' | 'sans';

  /** Lead-gen extras */
  portfolioPdf?: string;
}

# Freelancer Portfolio Websites

Four complete, production-ready portfolio websites built from one template system — one per
freelance discipline.

| Site | Discipline | URL | Location |
|---|---|---|---|
| Maya Ellison Studio | Web Designer | `/web-designer/` | Austin, TX |
| Elena Moreau Photography | Photographer | `/photographer/` | Lisbon, PT |
| Hart & Grain | Videographer | `/videographer/` | Manchester, UK |
| Lindqvist Arkitektur | Architect | `/architect/` | Copenhagen, DK |

Plus a showcase hub at `/` linking all four.

**65 pages. Static HTML. ~32 KB of CSS and under 4 KB of JavaScript per page.**

---

## Quick start

```bash
npm install
npm run build     # generates assets, builds, writes sitemap, runs quality audit
npm run serve     # preview dist/ at http://localhost:4321
```

For live editing during development:

```bash
npm run dev       # Astro dev server with hot reload
```

---

## What's included

### Pages (per site)

| Route | Page | Notes |
|---|---|---|
| `/{site}/` | Home | Hero, highlights, services, pricing, process, case studies, testimonials, FAQ, contact form |
| `/{site}/projects/` | Project gallery | Category filter, `aria-live` result count, deep-linkable `#Category` |
| `/{site}/project/{slug}/` | Project detail | Hero banner, metrics, overview, tools, outcomes, gallery, related |
| `/{site}/case-studies/` | Case studies list | Challenge → Results structure previewed |
| `/{site}/case-study/{slug}/` | Case study detail | Challenge, goal, approach, timeline, tools, results, gallery, form |
| `/{site}/about/` | About | Bio, skills, tools, values, career timeline, stats, socials |
| `/{site}/contact/` | Contact | Lead-gen form, direct-contact panel, FAQ, backup CTA |

### Built-in quality gate

`npm run build` ends with `scripts/audit.mjs`, which checks **every generated page** for:

- exactly one `<h1>` and no skipped heading levels
- unique `<title>` ≤ 65 chars and unique meta description 70–170 chars
- canonical URL, `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card`
- valid JSON-LD on every page
- `alt` on every image, `aria-label`/`<title>` on every decorative SVG
- `<label for>` on every form control
- no broken internal links

The build fails if any check fails.

---

## Make it yours

### 1. Edit a profile

All content lives in **`src/data/sites/`** — one file per freelancer. Each file defines name,
city, positioning, bio, services, packages, process, testimonials, FAQ, skills, tools, values,
timeline, projects, case studies, and the colour/typography theme.

Register new sites in **`src/data/index.ts`**. Routes, navigation, filters, breadcrumbs, schema
and metadata are all derived from the data — nothing else needs changing.

```ts
// src/data/index.ts
export const sites: Site[] = [web, photo, video, architecture];
```

The type definitions are in `src/data/types.ts` (edit one file and TypeScript will point at
every field you need to fill in).

### 2. Swap in real images

Place image files in **`src/assets/`** using the exact file names already referenced by each
project's `cover` and `gallery` fields (e.g. `terrawatt.jpg`, `casaverde-1.jpg`).

`src/components/Ph.astro` picks them up automatically via `import.meta.glob` and renders them
through Astro's `<Image>` pipeline — responsive `srcset` with AVIF/WebP, correct dimensions for
zero layout shift, and lazy loading.

**Until you add a file, an on-brand SVG placeholder renders instead** — so nothing is ever
broken or empty. Portraits use `motif="portrait"`; the motif per site matches its discipline
(browser frames for web, aperture for photo, timeline for video, floor plan for architecture).

### 3. Point the contact form somewhere

The form validates client-side and shows the success state without a backend, so the demo works
standalone. To actually receive submissions, set `method` and `action` in
`src/components/ContactForm.astro` and remove the `e.preventDefault()` call:

```html
<form method="POST" action="https://formspree.io/f/your-id">
```

Works as-is with **Formspree**, **Netlify Forms** (`data-netlify="true"`), **Basin**, or your own
endpoint. The honeypot field is already in place for spam filtering.

### 4. Set your real domain

Search and replace `example.com` in:

- `astro.config.mjs` → `site`
- `public/robots.txt`
- `src/pages/index.astro` → canonical + OG tags
- `scripts/sitemap.mjs` (or set `$env:SITE_URL="https://yourdomain.com"` when building)

Then regenerate assets if you want a different social image: `node scripts/make-og.mjs`.

---

## Personalization rules

Each profile re-themes the entire system from one file:

| | Web Designer | Photographer | Videographer | Architect |
|---|---|---|---|---|
| **Emphasis** | Responsive UI, branding, UX, performance | Shoots, style, packages, before/after | Editing, event & documentary, reels, process | Concept, floor plans, design approach, scope |
| **Services** | Marketing site, Webflow build, brand, UX audit | Brand/editorial, hospitality, product, retouching | Brand film, event coverage, editing, reels | Feasibility, planning, detailed design, site |
| **Packages** | Launch / Full site / Retainer | Half day / Full day / Retainer | Edit only / Brand film / Monthly | Feasibility / Full design / Hourly |
| **Process** | Discovery → Design → Delivery + Revisions | Discovery → Production → Delivery + Revisions | Discovery → Production → Delivery + Revisions | Discovery → Design → Delivery + Revisions |
| **Gallery filter** | SaaS, Brand, Marketing, UX… | Hospitality, Editorial, Product… | Brand, Event, Social, Editing… | New Build, Extension, Housing… |
| **Display type** | Sans (modern) | Serif (editorial) | Sans (modern) | Serif (editorial) |
| **Accent** | Indigo | Rose | Sky | Teal |

Adding a fifth discipline (e.g. Copywriter) is one new data file plus one array entry.

---

## SEO

Every page ships with:

- **Title** — unique, ≤ 65 chars, keyword-first, auto-fitted by `src/lib/seo.ts`
- **Meta description** — unique, 70–170 chars
- **Canonical URL** — derived from `site` + page path
- **OpenGraph + Twitter cards** — with a generated 1200×630 `og-default.png`
- **JSON-LD structured data** — always at least `Person` + `BreadcrumbList`, plus:
  - `ProfessionalService` + `FAQPage` on home
  - `CreativeWork` on project detail
  - `Article` + `CreativeWork` on case study detail
  - `CollectionPage` on gallery / case study lists
  - `AboutPage` / `ContactPage` where relevant
- **`sitemap.xml` + `sitemap-index.xml`** — generated from the actual build output
- **`robots.txt`** — pointing at the sitemap
- **Clean slug URLs** — `/project/terrawatt-energy-platform/`

Heading structure is semantic and verified: one `<h1>` per page, no skipped levels.

---

## Accessibility

- Skip-to-content link on every page
- Semantic `<header>` / `<nav>` / `<main>` / `<footer>` landmarks
- Visible focus rings everywhere (`:focus-visible`, never removed)
- `aria-current="page"` on the active nav item
- `aria-expanded` / `aria-controls` on the mobile menu, dismissable with `Escape`
- Every form control has a `<label for>`; errors are tied via `aria-describedby` and
  `aria-invalid`
- Success panel is `role="status"` + `aria-live="polite"` and receives focus
- Filter results announced via `aria-live`
- All images carry descriptive `alt`; decorative SVGs carry `role="img"` + `aria-label`
- `prefers-reduced-motion` respected — animations and smooth scrolling disabled
- Minimum 44–46px tap targets on mobile
- Mobile-first, single-column below 640px; two-column to 900px; full layout above

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Generate PDFs + OG image → build → sitemap → audit |
| `npm run serve` | Serve `dist/` on port 4321 |
| `npm run audit` | Re-run the quality gate against `dist/` |
| `npm run placeholders` | Not needed — placeholders are rendered inline |
| `node scripts/make-pdfs.mjs` | Regenerate the four placeholder portfolio PDFs |
| `node scripts/make-og.mjs` | Regenerate `public/og-default.png` |
| `node scripts/sitemap.mjs` | Regenerate the sitemap from `dist/` |
| `node scripts/audit.mjs` | SEO / a11y / link quality gate |

---

## Project structure

```
├── astro.config.mjs
├── public/
│   ├── favicon.svg
│   ├── og-default.png          ← generated (1200×630 social image)
│   ├── robots.txt
│   └── *-portfolio.pdf         ← generated placeholder PDFs
├── scripts/
│   ├── audit.mjs               ← build-time quality gate
│   ├── make-og.mjs             ← social image generator (sharp)
│   ├── make-pdfs.mjs           ← portfolio PDF generator
│   ├── serve.mjs               ← zero-dependency static preview server
│   └── sitemap.mjs             ← sitemap generator
└── src/
    ├── components/
    │   ├── CaseStudyCard.astro
    │   ├── ContactForm.astro   ← validation + success state + honeypot
    │   ├── Footer.astro
    │   ├── Nav.astro
    │   ├── Ph.astro            ← image pipeline / SVG placeholder
    │   ├── ProjectCard.astro
    │   └── StickyCta.astro
    ├── data/
    │   ├── types.ts            ← content model
    │   ├── index.ts            ← site registry
    │   └── sites/              ← one profile per discipline
    ├── layouts/Base.astro      ← head, OG, JSON-LD, nav, footer
    ├── lib/
    │   ├── seo.ts              ← title/description fitting
    │   └── site.ts
    ├── pages/
    │   ├── index.astro         ← showcase hub
    │   └── [site]/             ← all pages, one template per route
    └── styles/global.css       ← design tokens + all components
```

---

## Notes

- **No framework JavaScript ships.** The only scripts are the mobile menu, gallery filter,
  and form validation — each under 1 KB and each progressive enhancement (the content and the
  form's native `required` attributes work without them).
- **Everything is static.** Host it on Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3, or
  any plain web server — no runtime required.
- The four placeholder PDFs are one-page indexes. Replace `public/*.pdf` with your real exports;
  the file names and links already match.

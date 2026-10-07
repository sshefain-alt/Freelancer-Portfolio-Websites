import type { Site } from '../types';

export const web: Site = {
  prefix: 'web-designer',
  label: 'Web Designer',
  kind: 'web',

  accent: '#4f46e5',
  accentDark: '#4338ca',
  tint: 'rgba(79, 70, 229, 0.09)',
  display: 'sans',

  name: 'Maya Ellison',
  brand: 'Maya Ellison Studio',
  role: 'Web Designer',
  servicePhrase: 'Web Design',
  clientsPhrase: 'Climate-tech & B2B SaaS',
  city: 'Austin',
  region: 'Texas',
  positioning: 'Conversion-focused websites for teams that need to look as credible as their product.',
  bio: [
    'I am a freelance web designer in Austin, Texas with nine years of experience turning dense B2B and climate-tech positioning into websites that people actually understand. My work sits at the intersection of brand, interface design and front-end performance — I design it, I build it, and I hand over something your team can maintain without calling an agency.',
    'Most of my clients are Series A–C software companies, research spin-outs and climate organisations who have outgrown their first site. They usually arrive with a messaging problem disguised as a design problem: the product is strong, but the site buries it. My job is to find the one sentence that matters and build the page around it.',
    'I work solo and deliberately. You get one senior designer from discovery to launch, direct access on Slack, and a Figma file you actually own at the end. No account managers, no handoff gaps.',
  ],
  yearsExperience: 9,

  email: 'hello@mayaellison.studio',
  phone: '+15125550147',
  phoneDisplay: '+1 (512) 555-0147',
  availability: 'Booking Q1 projects — 2 slots left',
  socials: [
    { label: 'Dribbble', href: 'https://dribbble.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Read.cv', href: 'https://read.cv/' },
  ],

  seo: {
    title: 'Freelance Web Designer in Austin, TX | Maya Ellison Studio',
    description:
      'Freelance web designer in Austin, Texas building conversion-focused websites for climate-tech and B2B SaaS teams. View case studies, project gallery and request a quote.',
  },

  stats: [
    { value: '9 yrs', label: 'Designing & shipping websites' },
    { value: '64', label: 'Sites launched end-to-end' },
    { value: '+38%', label: 'Median lift in demo requests' },
    { value: '4.9/5', label: 'Client rating across 41 reviews' },
  ],

  services: [
    {
      title: 'Marketing Site Design',
      summary: 'Positioning, wireframes and a high-fidelity Figma build for your core conversion pages.',
      points: ['Messaging & page hierarchy', 'Responsive UI in Figma', 'Design system starter', 'Developer handoff docs'],
    },
    {
      title: 'Webflow & Front-End Build',
      summary: 'Pixel-accurate, CMS-driven implementation with performance and accessibility baked in.',
      points: ['Webflow or Astro build', 'Core Web Vitals pass', 'WCAG 2.2 AA review', 'CMS training session'],
    },
    {
      title: 'Brand & Visual Identity',
      summary: 'Logo refinement, type scale, colour and the rules that keep everything consistent.',
      points: ['Logo & wordmark', 'Type + colour system', 'Usage guidelines', 'Social templates'],
    },
    {
      title: 'UX Audit & CRO',
      summary: 'A forensic review of an existing site, ranked by impact, with fixes you can ship this month.',
      points: ['Heuristic audit', 'Analytics review', 'Prioritised fix list', 'Two revision rounds'],
    },
  ],

  packages: [
    {
      name: 'Launch Page',
      price: '$2,400',
      cadence: 'per project',
      summary: 'One high-converting landing page, designed and built in two weeks.',
      features: ['1 landing page', 'Copy structure workshop', 'Responsive build', 'Analytics + events', '14-day support'],
    },
    {
      name: 'Full Site',
      price: '$7,800',
      cadence: 'per project',
      summary: 'The complete 6–10 page marketing site, from positioning to launch.',
      features: ['Up to 10 pages', 'Design system', 'CMS setup + training', 'Performance budget', '2 revision rounds', '30-day support'],
      highlighted: true,
    },
    {
      name: 'Retainer',
      price: '$3,200',
      cadence: 'per month',
      summary: 'Ongoing design and iteration for teams shipping every sprint.',
      features: ['40 hours / month', 'Same-week turnaround', 'Slack channel', 'Monthly reporting', 'Rollover hours'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Discovery',
      description: 'A 60-minute workshop on positioning, audience and the one action the site must drive. I audit analytics and competitors, then agree a sitemap and success metric before any pixels move.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Low-fidelity structure first, then a full high-fidelity pass in Figma. You review in two structured rounds with written rationale — not vague mockups you have to guess at.',
    },
    {
      step: '03',
      title: 'Delivery + Revisions',
      description: 'Build, accessibility and Core Web Vitals checks, then launch. Two revision rounds are included, plus a recorded walkthrough so your team can update the CMS confidently.',
    },
  ],

  testimonials: [
    {
      quote: 'Maya rebuilt our site in five weeks and demo requests went up 41% in the first quarter. She pushed back on our copy in exactly the right places.',
      name: 'Priya Raman',
      role: 'VP Marketing, Terrawatt',
      initials: 'PR',
    },
    {
      quote: 'The clearest design process I have been through. Every screen came with a reason, and the handoff file was so clean our devs shipped without questions.',
      name: 'Daniel Okafor',
      role: 'Co-founder, Lumen Grid',
      initials: 'DO',
    },
    {
      quote: 'We had spent eight months and two agencies on positioning. Maya got there in one workshop and made the website match.',
      name: 'Hannah Vogt',
      role: 'CEO, Bluecurrent',
      initials: 'HV',
    },
  ],

  faqs: [
    {
      question: 'How do revisions work?',
      answer: 'Every fixed-scope project includes two structured revision rounds. You leave timestamped comments directly in Figma, I respond within one business day, and we agree in writing when the round is closed. Scope changes — extra pages, new flows — are quoted separately before I start, so there are never surprise invoices.',
    },
    {
      question: 'Do you write the copy too?',
      answer: 'I structure it. Page hierarchy, headlines and CTA placement are always mine. Full copywriting can be added for $1,200 per page or handled by your writer using my content template.',
    },
    {
      question: 'What do you need from me to start?',
      answer: 'A clear decision-maker, existing brand assets if you have them, and access to analytics. If those are missing we spend week one on discovery instead — that is priced into the timeline.',
    },
    {
      question: 'Can you work with our developers?',
      answer: 'Yes. Roughly half my projects are design-only. You get a documented Figma file with tokens, states, spacing and breakpoints, plus a handoff call.',
    },
    {
      question: 'Which tools do you build in?',
      answer: 'Figma for design, Webflow for marketing sites, and Astro or Next.js when a project needs custom components and stricter performance budgets.',
    },
  ],

  skills: ['Information architecture', 'Conversion copy structure', 'Responsive UI design', 'Design systems', 'Design tokenisation', 'Accessibility (WCAG 2.2 AA)', 'Core Web Vitals', 'User testing', 'Prototyping', 'Stakeholder workshops'],
  tools: ['Figma', 'Webflow', 'Astro', 'React / Next.js', 'Tailwind CSS', 'Framer', 'GA4 / Plausible', 'Hotjar', 'Lighthouse', 'Linear', 'Notion'],
  values: [
    { title: 'Clarity beats cleverness', body: 'If a visitor has to think about what you do, the design has failed. I write the sentence first and design the page around it.' },
    { title: 'Performance is a design decision', body: 'Every font, image and animation has a cost paid by someone on a phone. Budgets are agreed in discovery, not patched at launch.' },
    { title: 'Own the outcome', body: 'I measure against the metric we agreed, not against how the mockups look. If a design change does not move it, it does not ship.' },
  ],
  timeline: [
    { year: '2016', title: 'First freelance clients', body: 'Left an agency role in Chicago and took on three small business sites while learning to build.' },
    { year: '2019', title: 'Moved into SaaS', body: 'Started working with early-stage software teams where design decisions could be measured directly.' },
    { year: '2022', title: 'Austin studio', body: 'Relocated to Austin and formalised a solo practice focused on climate-tech and B2B.' },
    { year: '2025', title: 'Design + build', body: 'Added front-end delivery so clients get one accountable person from strategy to launch.' },
  ],

  portfolioPdf: 'maya-ellison-portfolio.pdf',

  projects: [
    {
      slug: 'terrawatt-energy-platform',
      title: 'Terrawatt Energy Platform',
      tag: 'Web Design',
      category: 'SaaS',
      client: 'Terrawatt',
      year: '2025',
      cover: 'terrawatt.jpg',
      gallery: ['terrawatt-1.jpg', 'terrawatt-2.jpg', 'terrawatt-3.jpg'],
      excerpt: 'Repositioning a grid-software company around the one number their buyers care about.',
      overview: [
        'Terrawatt sells forecasting software to utility operators, but their site opened with a paragraph about "reimagining the energy transition". Procurement teams bounced in eleven seconds. We rebuilt the narrative around a single proof point — forecast accuracy — and designed every page to surface it above the fold.',
        'The design system uses a restrained two-colour palette and a data-forward component library so the product team can publish new charts without touching a designer. Marketing now ships landing pages in a day instead of a sprint.',
      ],
      tools: ['Figma', 'Webflow', 'GA4', 'Hotjar'],
      outcomes: [
        'Demo request form completions up 41% in the first quarter post-launch',
        'Average time on homepage nearly doubled, from 22s to 43s',
        'Marketing ships new pages without engineering involvement',
      ],
      metrics: [
        { value: '+41%', label: 'Demo requests' },
        { value: '5 wks', label: 'Concept to launch' },
        { value: '98', label: 'Lighthouse score' },
      ],
      featured: true,
    },
    {
      slug: 'bluecurrent-climate-report',
      title: 'Bluecurrent Impact Report',
      tag: 'Branding',
      category: 'Brand',
      client: 'Bluecurrent',
      year: '2025',
      cover: 'bluecurrent.jpg',
      gallery: ['bluecurrent-1.jpg', 'bluecurrent-2.jpg', 'bluecurrent-3.jpg'],
      excerpt: 'An interactive annual report that replaced a 60-page PDF nobody opened.',
      overview: [
        'Bluecurrent published its climate impact report as a PDF each year and watched download rates fall for three consecutive cycles. We turned it into a scannable web experience: one metric per screen, a persistent progress rail, and a print stylesheet for the auditors who still want paper.',
        'The identity work gave them a wordmark and type scale that survive being set at 12px in a footnote or 120px on a hero.',
      ],
      tools: ['Figma', 'Astro', 'Sanity CMS'],
      outcomes: [
        'Report completion rate up from 12% to 54%',
        'Used directly in two investor conversations',
        'Team updates the report themselves each quarter',
      ],
      metrics: [
        { value: '54%', label: 'Report completion' },
        { value: '-70%', label: 'Print costs' },
      ],
      featured: true,
    },
    {
      slug: 'lumen-grid-design-system',
      title: 'Lumen Grid Design System',
      tag: 'Design System',
      category: 'SaaS',
      client: 'Lumen Grid',
      year: '2024',
      cover: 'lumengrid.jpg',
      gallery: ['lumengrid-1.jpg', 'lumengrid-2.jpg', 'lumengrid-3.jpg'],
      excerpt: '48 components, tokenised and documented, so four squads stop redesigning buttons.',
      overview: [
        'Four product squads had each invented their own button, modal and table. We audited every screen, consolidated 112 variants down to 48 components, and tokenised colour, spacing and type so a rebrand becomes a config change rather than a rewrite.',
        'The documentation lives next to the code with live examples, usage rules and accessibility notes for each component.',
      ],
      tools: ['Figma', 'Tokens Studio', 'Storybook', 'React'],
      outcomes: [
        'UI build time reduced by roughly 30% across squads',
        'Accessibility defects found in QA dropped by two thirds',
        'Onboarding a new designer takes days, not weeks',
      ],
      metrics: [
        { value: '112 → 48', label: 'Component variants' },
        { value: '-66%', label: 'A11y defects' },
      ],
      featured: true,
    },
    {
      slug: 'northbound-research-site',
      title: 'Northbound Research',
      tag: 'Web Design',
      category: 'Marketing',
      client: 'Northbound Institute',
      year: '2024',
      cover: 'northbound.jpg',
      gallery: ['northbound-1.jpg', 'northbound-2.jpg'],
      excerpt: 'A publishing-first site for a policy institute that ships two reports a month.',
      overview: [
        'Northbound needed a site their researchers would actually publish to. We designed a template system around three content types — briefs, reports and commentary — each with its own reading experience, plus a citation block that renders correctly when copied into a paper.',
        'Typography does the heavy lifting: a generous measure, real footnotes, and a dark reading mode for long sessions.',
      ],
      tools: ['Astro', 'Markdown', 'Figma'],
      outcomes: [
        'Publishing frequency tripled without adding staff',
        'Average session length up 68%',
        'Cited in four academic papers within six months',
      ],
      metrics: [{ value: '3×', label: 'Publishing rate' }],
    },
    {
      slug: 'fieldnote-mobile-app',
      title: 'Fieldnote App Marketing Site',
      tag: 'UX',
      category: 'Product',
      client: 'Fieldnote',
      year: '2024',
      cover: 'fieldnote.jpg',
      gallery: ['fieldnote-1.jpg', 'fieldnote-2.jpg', 'fieldnote-3.jpg'],
      excerpt: 'Six interactive product demos replacing a wall of static screenshots.',
      overview: [
        'Fieldnote documented its app with screenshots that showed nothing about how it felt to use. We built scroll-linked interactive demos that let visitors click through the real flows — offline capture, sync, export — without installing anything.',
        'Each demo is under 90KB and degrades to a static image for anyone on a slow connection.',
      ],
      tools: ['Figma', 'Astro', 'Svelte', 'Vercel'],
      outcomes: [
        'Trial signups up 27% against the screenshot version',
        'Product-qualified leads up 34%',
        'Support tickets about "how does it work" halved',
      ],
      metrics: [
        { value: '+27%', label: 'Trial signups' },
        { value: '90KB', label: 'Per demo' },
      ],
      featured: true,
    },
    {
      slug: 'arbor-coffee-ecommerce',
      title: 'Arbor Coffee Roasters',
      tag: 'E-commerce',
      category: 'E-commerce',
      client: 'Arbor Coffee',
      year: '2023',
      cover: 'arbor.jpg',
      gallery: ['arbor-1.jpg', 'arbor-2.jpg'],
      excerpt: 'A subscription-first store built around roast dates instead of discounts.',
      overview: [
        'Arbor was competing on price in a category where freshness is the real differentiator. We rebuilt the store around roast dates, origin stories and a subscription flow that takes under ninety seconds to complete.',
        'Product pages lead with the harvest window and tasting notes, because that is what specialty buyers actually compare.',
      ],
      tools: ['Shopify', 'Liquid', 'Figma'],
      outcomes: [
        'Subscription revenue grew 52% in six months',
        'Cart abandonment down 19%',
        'Repeat purchase rate up from 31% to 44%',
      ],
      metrics: [
        { value: '+52%', label: 'Subscription revenue' },
        { value: '-19%', label: 'Cart abandonment' },
      ],
    },
    {
      slug: 'vantage-fintech-onboarding',
      title: 'Vantage Onboarding Flow',
      tag: 'UX',
      category: 'Product',
      client: 'Vantage',
      year: '2023',
      cover: 'vantage.jpg',
      gallery: ['vantage-1.jpg', 'vantage-2.jpg'],
      excerpt: 'Cutting a 14-step compliance signup down to five screens people finish.',
      overview: [
        'Vantage lost 46% of applicants inside a fourteen-step onboarding form. We mapped the regulatory constraints, then redesigned the sequence around progressive disclosure — asking for documents only when the decision needed them.',
        'Error states got real attention: inline validation in plain language, and a resume-anywhere link so nobody restarts from zero.',
      ],
      tools: ['Figma', 'Maze', 'React'],
      outcomes: [
        'Completion rate up from 54% to 81%',
        'Median signup time cut from 11 minutes to 4',
        'Compliance sign-off retained on every field',
      ],
      metrics: [
        { value: '81%', label: 'Completion rate' },
        { value: '-64%', label: 'Time to sign up' },
      ],
      featured: true,
    },
    {
      slug: 'solstice-portfolio-redesign',
      title: 'Solstice Studio Redesign',
      tag: 'Branding',
      category: 'Brand',
      client: 'Solstice Architects',
      year: '2023',
      cover: 'solstice.jpg',
      gallery: ['solstice-1.jpg', 'solstice-2.jpg'],
      excerpt: 'An architecture studio site that gets out of the way of the photography.',
      overview: [
        'Solstice had beautiful project photography trapped inside a template with sidebars and drop shadows. We stripped the chrome, gave images the full viewport width, and built a case study layout that balances drawings, materials and narrative.',
        'A restrained identity — one weight, one accent, generous whitespace — lets the buildings stay the loudest thing on the page.',
      ],
      tools: ['Astro', 'Cloudinary', 'Figma'],
      outcomes: [
        'Inbound project enquiries up 2.3×',
        'Featured in two design publications',
        'Page load time cut from 4.1s to 0.9s',
      ],
      metrics: [
        { value: '2.3×', label: 'Enquiries' },
        { value: '0.9s', label: 'LCP' },
      ],
    },
  ],

  caseStudies: [
    {
      slug: 'terrawatt-conversion-rebuild',
      title: 'How Terrawatt turned a rewrite into 41% more demos',
      tag: 'Conversion Redesign',
      category: 'SaaS',
      client: 'Terrawatt',
      year: '2025',
      cover: 'cs-terrawatt.jpg',
      gallery: ['cs-terrawatt-1.jpg', 'cs-terrawatt-2.jpg'],
      challenge:
        'Terrawatt had strong utility customers and a site that failed them. Sales cycles stretched because buyers could not tell what the product did in the first screen, and 62% of homepage visitors left without a single click. The team had already tried a copywriting agency and a template redesign with no measurable change.',
      goal:
        'Move demo requests up at least 25% within one quarter of launch, without increasing paid acquisition spend, and give marketing the ability to publish landing pages independently.',
      approach: [
        'Interviewed six sales reps and replayed twenty recorded calls to find the language buyers actually use.',
        'Replaced the abstract hero with a single quantified claim — forecast accuracy — plus a live product visual.',
        'Rebuilt the information architecture around the three questions procurement asks, in order.',
        'Designed a component library so marketing could assemble new pages without design involvement.',
        'Instrumented every section with events so we could see exactly where attention dropped.',
      ],
      services: ['Positioning workshop', 'Information architecture', 'UI design in Figma', 'Webflow build', 'Analytics instrumentation'],
      timeline: '5 weeks — 1 week discovery, 3 weeks design, 1 week build and launch',
      tools: ['Figma', 'Webflow', 'GA4', 'Hotjar', 'Lighthouse'],
      results:
        'Demo request completions rose 41% in the first quarter against a 25% target, with no change to ad spend. Homepage time-on-page moved from 22 to 43 seconds, and the bounce rate fell from 62% to 38%. Marketing now ships campaign landing pages in a day rather than a two-week engineering cycle.',
      metrics: [
        { value: '+41%', label: 'Demo requests' },
        { value: '-38%', label: 'Bounce rate' },
        { value: '1 day', label: 'Landing page turnaround' },
      ],
      featured: true,
    },
    {
      slug: 'vantage-onboarding-completion',
      title: 'Vantage: from 54% to 81% onboarding completion',
      tag: 'UX / Product',
      category: 'Product',
      client: 'Vantage',
      year: '2023',
      cover: 'cs-vantage.jpg',
      gallery: ['cs-vantage-1.jpg', 'cs-vantage-2.jpg'],
      challenge:
        'A regulated fintech was losing 46% of applicants inside a fourteen-step signup. Every compliance requirement was non-negotiable, so the obvious fix — delete fields — was off the table. Support was fielding hundreds of "where did my application go" tickets a month because there was no way to resume.',
      goal:
        'Raise completion above 75% while keeping every compliance-required field and its audit trail intact, and cut the volume of resumption support tickets.',
      approach: [
        'Mapped all fourteen steps against the regulatory requirement behind each one, separating "required" from "habitual".',
        'Re-sequenced the flow with progressive disclosure so identity documents are requested only at the verification decision.',
        'Designed inline validation in plain language with field-level error recovery.',
        'Added a secure resume-anywhere link with an expiry window, plus progress state that survives a session timeout.',
        'Ran two rounds of unmoderated usability testing on the prototype with twelve participants.',
      ],
      services: ['Journey mapping', 'UX research', 'Interaction design', 'Design system components', 'Usability testing'],
      timeline: '7 weeks — 2 weeks research, 3 weeks design, 2 weeks testing and handoff',
      tools: ['Figma', 'Maze', 'React', 'Segment'],
      results:
        'Completion rose from 54% to 81% against a 75% target. Median signup time fell from eleven minutes to four. Resumption support tickets dropped by 73%, and compliance signed off on the flow without a single field being removed.',
      metrics: [
        { value: '54% → 81%', label: 'Completion rate' },
        { value: '-64%', label: 'Median signup time' },
        { value: '-73%', label: 'Support tickets' },
      ],
      featured: true,
    },
    {
      slug: 'lumen-grid-system-consolidation',
      title: 'Lumen Grid: consolidating four squads onto one design system',
      tag: 'Design System',
      category: 'SaaS',
      client: 'Lumen Grid',
      year: '2024',
      cover: 'cs-lumen.jpg',
      gallery: ['cs-lumen-1.jpg', 'cs-lumen-2.jpg'],
      challenge:
        'Four product squads were shipping in parallel with no shared UI. A button audit found eleven different primary buttons, tables that behaved inconsistently, and accessibility defects being reintroduced every sprint. Designers spent more time rebuilding primitives than solving product problems.',
      goal:
        'Cut UI build time by a quarter, reduce accessibility regressions reaching QA, and make a future rebrand achievable without a rewrite.',
      approach: [
        'Audited every screen across four products and catalogued 112 UI variants with screenshots.',
        'Consolidated to 48 components, each with a written usage rule and an explicit anti-pattern.',
        'Tokenised colour, spacing, radius and type into a single source consumed by both Figma and code.',
        'Wrote automated accessibility tests wired into CI so regressions block a merge.',
        'Ran three adoption workshops and paired with each squad during their first two tickets.',
      ],
      services: ['UI audit', 'Design token architecture', 'Component library', 'Documentation', 'Team enablement'],
      timeline: '10 weeks — 2 weeks audit, 5 weeks build, 3 weeks adoption',
      tools: ['Figma', 'Tokens Studio', 'Storybook', 'React', 'Chromatic', 'GitHub Actions'],
      results:
        '112 variants consolidated into 48 components. Accessibility defects reaching QA fell 66%, and squads reported UI build time down roughly 30%. Because colour and type are tokens, the brand refresh that followed took two days rather than a quarter.',
      metrics: [
        { value: '-66%', label: 'A11y defects' },
        { value: '-30%', label: 'UI build time' },
        { value: '2 days', label: 'Rebrand rollout' },
      ],
      featured: true,
    },
  ],
};

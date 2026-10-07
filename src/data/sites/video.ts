import type { Site } from '../types';

export const video: Site = {
  prefix: 'videographer',
  label: 'Videographer',
  kind: 'video',

  accent: '#0284c7',
  accentDark: '#0369a1',
  tint: 'rgba(2, 132, 199, 0.09)',
  display: 'sans',

  name: 'Devin Hart',
  brand: 'Hart & Grain',
  role: 'Videographer',
  servicePhrase: 'Video Production & Editing',
  clientsPhrase: 'Agencies, events & growing brands',
  city: 'Manchester',
  region: 'United Kingdom',
  positioning: 'One-person crews that shoot fast, edit carefully and deliver on a deadline you can plan around.',
  bio: [
    'I am a freelance videographer and editor based in Manchester, working across the UK for brands, agencies and event teams. Ten years on set — four of them as an editor before I picked up a camera full time — means I cut for the story first and shoot with the timeline already in my head.',
    'That editing background changes how I work on a shoot day. I know which angles a sequence will actually need, so we capture coverage that cuts together instead of a pile of beautiful shots that do not join up. It is the difference between a two-day edit and a two-week one.',
    'I run a compact, self-sufficient kit: camera, sound, lighting and a mobile edit station, so a small production does not need a van full of crew. For bigger jobs I bring in the same trusted team I have worked with for years.',
  ],
  yearsExperience: 10,

  email: 'book@hartandgrain.co.uk',
  phone: '+441615550192',
  phoneDisplay: '+44 161 555 0192',
  availability: 'Available for Q4 shoots — UK & EU travel',
  socials: [
    { label: 'Vimeo', href: 'https://vimeo.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],

  seo: {
    title: 'Freelance Videographer & Editor in Manchester | Hart & Grain',
    description:
      'Freelance videographer in Manchester creating brand films, event coverage and social edits. See the project gallery, case studies with results, and request a quote.',
  },

  stats: [
    { value: '10 yrs', label: 'Shooting & editing' },
    { value: '210+', label: 'Films delivered' },
    { value: '48 hrs', label: 'Rough-cut turnaround' },
    { value: '92%', label: 'Clients who rebook' },
  ],

  services: [
    {
      title: 'Brand & Product Films',
      summary: '30–90 second films that explain what you make and why it is worth caring about.',
      points: ['Concept + storyboard', 'Single-day production', 'Colour grade', 'Sound design', '16:9, 9:16 and 1:1 exports'],
    },
    {
      title: 'Event & Conference Coverage',
      summary: 'Multi-camera capture with same-week turnarounds while the momentum is still live.',
      points: ['Multi-cam sync', 'Speaker interviews', 'Highlight film in 72 hours', 'Full session edits'],
    },
    {
      title: 'Editing & Post',
      summary: 'Send me the footage. I build the story, grade it, mix the sound and cut it for every platform.',
      points: ['Rough cut in 48 hours', 'Motion graphics', 'Colour grading', 'Licensed music', 'Captioned exports'],
    },
    {
      title: 'Social Reels & Shorts',
      summary: 'Vertical-first content built from shoots or your existing footage archive.',
      points: ['Hook-first structure', 'Burned-in captions', 'Platform-specific crops', 'Monthly content batches'],
    },
  ],

  packages: [
    {
      name: 'Edit Only',
      price: '£650',
      cadence: 'per film',
      summary: 'You shoot it, I cut it. Footage in, finished film out.',
      features: ['Up to 200GB of footage', 'Rough cut in 48 hours', '2 revision rounds', 'Colour + sound mix', 'All aspect ratios'],
    },
    {
      name: 'Brand Film',
      price: '£3,400',
      cadence: 'per film',
      summary: 'Concept to delivery: one production day, one finished hero film.',
      features: ['Pre-pro + storyboard', '1 shoot day', 'Crew of 1–2', '60–90s hero film', '3 cutdowns', 'Captions + subs', '2 revision rounds'],
      highlighted: true,
    },
    {
      name: 'Monthly Content',
      price: '£4,800',
      cadence: 'per month',
      summary: 'A standing day of shooting each month feeding a steady stream of edits.',
      features: ['1 shoot day / month', '12 social edits', '1 quarterly hero film', 'Priority turnaround', 'Shared asset drive'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Discovery',
      description: 'We define who the film is for, where it runs and what they should do next. I write the brief, shot list and schedule, confirm locations and permits, and agree the exact deliverables before anyone travels.',
    },
    {
      step: '02',
      title: 'Production',
      description: 'Shoot day, run lean. Coverage is captured with the edit in mind — interviews, B-roll, cutaways and handles — so the sequence assembles instead of fighting the footage.',
    },
    {
      step: '03',
      title: 'Delivery + Revisions',
      description: 'Rough cut within 48 hours, then two structured revision rounds covering edit, grade, sound mix and captions. Final masters arrive in 16:9, 9:16 and 1:1 with captions burned in.',
    },
  ],

  testimonials: [
    {
      quote: 'Rough cut landed two days after the shoot and it was already close. Devin edits like someone who has read the brief twice.',
      name: 'Aisha Kapoor',
      role: 'Creative Director, Field & Co.',
      initials: 'AK',
    },
    {
      quote: 'We needed a 90-second highlight from a two-day conference, live on the Monday morning. It went up Sunday night, on time, with captions.',
      name: 'Mark Ellery',
      role: 'Events Lead, NorthSummit',
      initials: 'ME',
    },
    {
      quote: 'The social cutdowns outperformed everything else we ran that quarter. Same footage, better structure.',
      name: 'Lucy Trần',
      role: 'Head of Brand, Kettlewell',
      initials: 'LT',
    },
  ],

  faqs: [
    {
      question: 'How do revisions work?',
      answer: 'Two rounds are included on every project. You leave timecoded notes in a shared review link, I turn them around within one business day, and we agree in writing when the round is closed. Changing the brief after the rough cut — new structure, extra film, reshoots — is quoted before I touch it.',
    },
    {
      question: 'What is the typical turnaround?',
      answer: 'Rough cut within 48 hours of the final shoot day is standard for brand films. Event highlights go out within 72 hours. Full delivery with grade, sound mix and all aspect ratios usually lands five to seven working days after the rough cut is approved.',
    },
    {
      question: 'Do you travel for shoots?',
      answer: 'Yes — the whole UK is covered, and I regularly work in Ireland and the EU. Travel and accommodation are quoted transparently as a line item, never buried in the production fee.',
    },
    {
      question: 'Who owns the footage?',
      answer: 'You do. Every package includes the graded master files and a copy of the full rushes on a shared drive. Camera originals are archived for 90 days after delivery in case something needs revisiting.',
    },
    {
      question: 'Can you work with our existing footage?',
      answer: 'Often the best-value project there is. Send a sample of the archive, I will tell you honestly whether it can carry the story, and we proceed on an edit-only basis if it can.',
    },
  ],

  skills: ['Cinematography', 'Documentary interviewing', 'Multi-camera editing', 'Colour grading', 'Sound design & mixing', 'Motion graphics', 'Storyboarding', 'Social-first structuring', 'Drone (A2 CofC)', 'Live event production'],
  tools: ['Sony FX6', 'DJI RS4', 'DJI Mini 4 Pro', 'Rode Wireless Pro', 'Aputure 600d', 'DaVinci Resolve', 'Adobe Premiere', 'After Effects', 'Frame.io', 'Epidemic Sound'],
  values: [
    { title: 'The edit decides everything', body: 'Shooting is only half the job. I storyboard the sequence before the day so we capture what the cut will need.' },
    { title: 'Deadlines are part of the craft', body: 'A film that lands after the campaign has moved on is worthless. Rough cuts go out within 48 hours, every time.' },
    { title: 'Honest about scope', body: 'If the budget cannot deliver the idea, I say so before we start rather than quietly cutting corners later.' },
  ],
  timeline: [
    { year: '2015', title: 'Started as an editor', body: 'Cut corporate and music content in a Manchester post house for four years before taking on camera work.' },
    { year: '2019', title: 'Went freelance', body: 'Moved into a combined shooter-editor role, which immediately shortened every project timeline.' },
    { year: '2022', title: 'First retainers', body: 'Signed the first monthly content clients, moving from one-off films to ongoing production.' },
    { year: '2025', title: 'Hart & Grain', body: 'Formed a small collective of trusted crew for larger productions while staying the single point of contact.' },
  ],

  portfolioPdf: 'hart-grain-portfolio.pdf',

  projects: [
    {
      slug: 'kettlewell-launch-film',
      title: 'Kettlewell Launch Film',
      tag: 'Brand Film',
      category: 'Brand',
      client: 'Kettlewell',
      year: '2025',
      cover: 'kettlewell.jpg',
      gallery: ['kettlewell-1.jpg', 'kettlewell-2.jpg', 'kettlewell-3.jpg'],
      excerpt: 'A 75-second product film built around the sound of the thing being used.',
      overview: [
        'Kettlewell make cast-iron cookware and wanted a launch film that felt like a kitchen rather than a studio. We shot in a working bakery pre-service, using practical light and recording the natural sound of pans, flame and steel as the backbone of the edit.',
        'Sound design carries this film more than dialogue does — the grade is deliberately warm and slightly underexposed so the audio leads.',
      ],
      tools: ['Sony FX6', 'DaVinci Resolve', 'Aputure 600d'],
      outcomes: [
        'Film hit 480k views across organic social in three weeks',
        'Launch-week sales up 29% against the previous release',
        'Cutdowns became the highest-performing paid assets of the quarter',
      ],
      metrics: [
        { value: '480k', label: 'Organic views' },
        { value: '+29%', label: 'Launch-week sales' },
      ],
      featured: true,
    },
    {
      slug: 'northsummit-conference',
      title: 'NorthSummit 2025',
      tag: 'Event Video',
      category: 'Event',
      client: 'NorthSummit',
      year: '2025',
      cover: 'northsummit.jpg',
      gallery: ['northsummit-1.jpg', 'northsummit-2.jpg'],
      excerpt: 'Two days, four cameras, 38 sessions — with a highlight film live before the venue cleared.',
      overview: [
        'A two-day conference with 38 sessions across four stages. We ran a three-person crew capturing every talk plus roaming interviews, with a mobile edit bay cutting the highlight reel on site between sessions.',
        'Deliverables were tiered: session edits for the archive, a 90-second highlight for social, and vertical clips handed to speakers the same evening so they could share while they were still trending.',
      ],
      tools: ['Sony FX6 ×3', 'DaVinci Resolve', 'Frame.io'],
      outcomes: [
        'Highlight film published within 14 hours of close',
        '38 session edits delivered in six working days',
        'Speaker shares drove a 41% increase in early-bird signups',
      ],
      metrics: [
        { value: '14 hrs', label: 'Highlight turnaround' },
        { value: '38', label: 'Sessions delivered' },
      ],
      featured: true,
    },
    {
      slug: 'field-co-brand-story',
      title: 'Field & Co. Brand Story',
      tag: 'Documentary',
      category: 'Brand',
      client: 'Field & Co.',
      year: '2025',
      cover: 'fieldco.jpg',
      gallery: ['fieldco-1.jpg', 'fieldco-2.jpg', 'fieldco-3.jpg'],
      excerpt: 'A three-minute documentary on a family workshop, told through hands and process.',
      overview: [
        'The founders did not want to be talking heads. We structured the film around process instead — cutting, joining, finishing — with a voiceover recorded separately so the camera could stay on the work.',
        'Three days of shooting produced enough material for the hero film, a recruitment cut and six vertical process clips.',
      ],
      tools: ['Sony FX6', 'Rode Wireless Pro', 'DaVinci Resolve'],
      outcomes: [
        'Hero film used as the homepage background with a 61% play-through rate',
        'Recruitment cut generated 3x previous application volume',
        'Featured in a trade publication video spotlight',
      ],
      metrics: [
        { value: '61%', label: 'Play-through rate' },
        { value: '3×', label: 'Job applications' },
      ],
      featured: true,
    },
    {
      slug: 'harbourline-social-cores',
      title: 'Harbourline Social Cutdowns',
      tag: 'Reels',
      category: 'Social',
      client: 'Harbourline',
      year: '2024',
      cover: 'harbourline.jpg',
      gallery: ['harbourline-1.jpg', 'harbourline-2.jpg'],
      excerpt: 'Eleven vertical edits built from one shoot day and an old footage archive.',
      overview: [
        'Harbourline had two years of unused B-roll and no budget for a new shoot. We combined the archive with a single fresh day to build eleven hook-first verticals, each structured around a different opening beat.',
        'Every clip opens with movement or a question inside the first second — no logos, no slow fades.',
      ],
      tools: ['DaVinci Resolve', 'Premiere Pro', 'CapCut'],
      outcomes: [
        'Average view duration up 2.4× against prior content',
        'One clip drove 12k follower growth in a week',
        'Content calendar filled for a full quarter',
      ],
      metrics: [
        { value: '2.4×', label: 'View duration' },
        { value: '11', label: 'Verticals delivered' },
      ],
    },
    {
      slug: 'lumenworks-recruitment',
      title: 'Lumenworks Recruitment Film',
      tag: 'Brand Film',
      category: 'Brand',
      client: 'Lumenworks',
      year: '2024',
      cover: 'lumenworks.jpg',
      gallery: ['lumenworks-1.jpg', 'lumenworks-2.jpg'],
      excerpt: 'A recruitment film shot on shift, with the people actually doing the job.',
      overview: [
        'Lumenworks could not fill engineering roles and had been using stock footage that looked nothing like the plant. We spent a night shift on site with three camera positions, letting the team speak for themselves rather than reading a script.',
        'The honesty is the point — candidates who watched it arrived already knowing what the work involved.',
      ],
      tools: ['Sony FX6', 'Aputure 600d', 'Frame.io', 'DaVinci Resolve'],
      outcomes: [
        'Qualified applications up 3× in two months',
        'Cost per hire down 34%',
        'Film reused for onboarding and internal comms',
      ],
      metrics: [
        { value: '3×', label: 'Qualified applications' },
        { value: '-34%', label: 'Cost per hire' },
      ],
    },
    {
      slug: 'arden-estate-walkthrough',
      title: 'Arden Estate Walkthrough',
      tag: 'Property Video',
      category: 'Property',
      client: 'Arden Estate',
      year: '2024',
      cover: 'arden.jpg',
      gallery: ['arden-1.jpg', 'arden-2.jpg'],
      excerpt: 'A stabilised walkthrough that sold a renovated property off-plan.',
      overview: [
        'Arden were marketing a renovation before completion. We combined actual site footage with carefully graded architectural stills into a single continuous-feeling walkthrough, using motion to carry the viewer between rooms that did not yet connect.',
        'A licensed score and a tight 60-second runtime kept it suitable for both the listing portal and paid social.',
      ],
      tools: ['DJI RS4', 'Sony FX6', 'DaVinci Resolve'],
      outcomes: [
        'Property sold three weeks ahead of target',
        'Viewing requests doubled against comparable listings',
        'Format reused across the agency portfolio',
      ],
      metrics: [
        { value: '+100%', label: 'Viewing requests' },
        { value: '3 wks', label: 'Ahead of target' },
      ],
    },
    {
      slug: 'copper-cookery-series',
      title: 'Copper Cookery Series',
      tag: 'Editing',
      category: 'Editing',
      client: 'Copper Channel',
      year: '2023',
      cover: 'copper.jpg',
      gallery: ['copper-1.jpg', 'copper-2.jpg'],
      excerpt: 'Twenty-four recipe episodes edited from a client-shot archive.',
      overview: [
        'The client shot everything; nothing was usable as delivered. We restructured twenty-four episodes around a repeatable template — hook, process, payoff — and rebuilt the graphics package so future edits could be assembled quickly.',
        'The template now lets their in-house team produce an episode in a day.',
      ],
      tools: ['Premiere Pro', 'After Effects', 'Frame.io'],
      outcomes: [
        'Episode completion rate up 37%',
        'In-house production time cut from 4 days to 1',
        'Series renewed for a second season',
      ],
      metrics: [
        { value: '+37%', label: 'Completion rate' },
        { value: '4 days → 1', label: 'Production time' },
      ],
    },
    {
      slug: 'ridgeline-drone-series',
      title: 'Ridgeline Aerial Series',
      tag: 'Documentary',
      category: 'Documentary',
      client: 'Ridgeline Collective',
      year: '2023',
      cover: 'ridgeline.jpg',
      gallery: ['ridgeline-1.jpg', 'ridgeline-2.jpg'],
      excerpt: 'Six short films on upland farming, shot across a full season.',
      overview: [
        'A self-directed commission following six hill farmers through a working year. Shot over four seasons with a deliberately minimal kit so the subjects stayed comfortable with a camera present.',
        'The series was picked up by a regional broadcaster for a compilation slot.',
      ],
      tools: ['Sony FX6', 'DJI Mini 4 Pro', 'DaVinci Resolve'],
      outcomes: [
        'Selected for two short film festivals',
        'Picked up for a regional broadcast compilation',
        'Licensed for use by a land conservation charity',
      ],
      metrics: [{ value: '2', label: 'Festival selections' }],
    },
  ],

  caseStudies: [
    {
      slug: 'northsummit-14-hour-turnaround',
      title: 'NorthSummit: a highlight film live 14 hours after the close',
      tag: 'Event Production',
      category: 'Event',
      client: 'NorthSummit',
      year: '2025',
      cover: 'cs-northsummit.jpg',
      gallery: ['cs-northsummit-1.jpg', 'cs-northsummit-2.jpg'],
      challenge:
        'A 1,400-attendee conference with 38 sessions across four stages. The organisers had been delivering their highlight film three weeks after the event, by which point ticket sales momentum for the following year had already passed. Previous years used a single roving camera, which meant sessions were inconsistently covered and speakers refused to share unusable footage.',
      goal:
        'Publish a shareable highlight film within 24 hours of the event closing, deliver every session edit within a week, and give speakers assets they would actually post.',
      approach: [
        'Designed a tiered delivery plan in pre-production so nobody waited for the same asset.',
        'Ran three fixed cameras plus roaming coverage with a mobile edit bay on site.',
        'Synced and multicam-cut each session overnight while the event was still running.',
        'Cut the highlight reel on site between sessions so only the final morning remained.',
        'Pre-built the graphics package and title templates a week ahead to remove decisions from show day.',
      ],
      services: ['Multi-camera production', 'On-site editing', 'Highlight film', 'Session edits', 'Social cutdowns', 'Speaker asset pack'],
      timeline: 'Pre-pro 3 weeks · Production 2 days · Highlight in 14 hours · Full delivery 6 days',
      tools: ['Sony FX6 ×3', 'Rode Wireless Pro', 'DaVinci Resolve', 'Frame.io'],
      results:
        'The highlight film went live 14 hours after the closing keynote. All 38 session edits were delivered in six working days. Speaker shares of the vertical clips drove a 41% increase in early-bird registrations for the following year — the fastest signal the organisers had ever measured from video.',
      metrics: [
        { value: '14 hrs', label: 'Highlight turnaround' },
        { value: '38', label: 'Session edits' },
        { value: '+41%', label: 'Early-bird signups' },
      ],
      featured: true,
    },
    {
      slug: 'kettlewell-launch-performance',
      title: 'Kettlewell: 480k organic views from one shoot day',
      tag: 'Brand Film',
      category: 'Brand',
      client: 'Kettlewell',
      year: '2025',
      cover: 'cs-kettlewell.jpg',
      gallery: ['cs-kettlewell-1.jpg', 'cs-kettlewell-2.jpg'],
      challenge:
        'A cast-iron cookware brand was launching a flagship pan against competitors spending ten times its budget. Their previous launch film was a clean studio product rotation that tested badly — viewers scrolled past it because it looked like an advertisement rather than something worth watching.',
      goal:
        'Produce a launch film that earns organic reach rather than being purely paid, and drive a measurable sales lift during launch week.',
      approach: [
        'Rejected the studio approach and shot in a working bakery pre-service for genuine atmosphere.',
        'Built the film around natural sound — flame, steel, pan — with almost no dialogue.',
        'Deliberately graded warm and slightly underexposed so the audio leads the experience.',
        'Cut a 75-second hero version plus six platform-specific cutdowns with different opening beats.',
        'Released cutdowns on staggered days to extend the launch window rather than spending it all at once.',
      ],
      services: ['Concept development', 'Single-day production', 'Sound design', 'Colour grade', 'Multi-format cutdowns'],
      timeline: '1 week pre-pro · 1 shoot day · 6 days post',
      tools: ['Sony FX6', 'Aputure 600d', 'Rode Wireless Pro', 'DaVinci Resolve', 'Epidemic Sound'],
      results:
        'The film accumulated 480,000 organic views in three weeks with no paid amplification behind the hero cut. Launch-week sales rose 29% against the previous release, and the cutdowns became the best-performing paid assets of the quarter.',
      metrics: [
        { value: '480k', label: 'Organic views' },
        { value: '+29%', label: 'Launch-week sales' },
        { value: '6', label: 'Platform cutdowns' },
      ],
      featured: true,
    },
    {
      slug: 'lumenworks-recruitment-roi',
      title: 'Lumenworks: tripling qualified applications with one night shift',
      tag: 'Recruitment Film',
      category: 'Brand',
      client: 'Lumenworks',
      year: '2024',
      cover: 'cs-lumenworks.jpg',
      gallery: ['cs-lumenworks-1.jpg', 'cs-lumenworks-2.jpg'],
      challenge:
        'An engineering firm had unfilled shift roles for nine months. Their recruitment page used stock footage that bore no resemblance to the actual plant, so candidates arrived with wrong expectations and dropped out at interview. Agencies were charging a premium per hire with no end in sight.',
      goal:
        'Lift qualified applications enough to fill roles internally, and reduce cost per hire below the agency rate.',
      approach: [
        'Spent a full night shift on site so the footage showed the real working environment.',
        'Used three camera positions with minimal lighting intervention to keep the team relaxed.',
        'Let employees speak unscripted rather than reading corporate copy.',
        'Cut three versions: a 90-second careers hero, a 30-second social edit and a 15-second job-board teaser.',
        'Placed the hero film on the vacancies page and the teasers into paid social targeting.',
      ],
      services: ['Night-shift production', 'Unscripted interviews', 'Multi-version edit', 'Paid social cutdowns'],
      timeline: '1 week pre-pro · 1 night shoot · 5 days post',
      tools: ['Sony FX6', 'Aputure 600d', 'Rode Wireless Pro', 'DaVinci Resolve', 'Frame.io'],
      results:
        'Qualified applications tripled within two months and cost per hire fell 34%, dropping comfortably below the agency rate. The firm now reuses the same footage for onboarding and internal communications, which spreads the production cost across three uses.',
      metrics: [
        { value: '3×', label: 'Qualified applications' },
        { value: '-34%', label: 'Cost per hire' },
        { value: '3', label: 'Uses of the footage' },
      ],
      featured: true,
    },
  ],
};

import type { Site } from '../types';

export const architecture: Site = {
  prefix: 'architect',
  label: 'Architect',
  kind: 'architecture',

  accent: '#0f766e',
  accentDark: '#115e59',
  tint: 'rgba(15, 118, 110, 0.09)',
  display: 'serif',

  name: 'Tomas Lindqvist',
  brand: 'Lindqvist Arkitektur',
  role: 'Architect',
  servicePhrase: 'Residential Architecture',
  clientsPhrase: 'Private clients & small developers',
  city: 'Copenhagen',
  region: 'Denmark',
  positioning: 'Measured, daylight-led homes — from first sketch through planning permission and site.',
  bio: [
    'I am a freelance architect in Copenhagen working on houses, extensions and small residential developments across Denmark and southern Sweden. Fourteen years in practice, the last eight independent, split between private clients who want one considered home and small developers who need three hundred sensible ones.',
    'My work is rooted in Scandinavian modernism but not nostalgic about it: deep window reveals, honest materials, plans that let daylight reach the back wall, and details drawn at 1:5 so the builder does not have to improvise. I design the whole thing, not just the pretty elevation.',
    'I stay involved on site. Drawings are a description of an intention, and buildings drift from intention without someone walking the formwork. Every project includes site visits through each key stage, and I answer the phone when the contractor calls.',
  ],
  yearsExperience: 14,

  email: 'studio@lindqvist-arkitektur.dk',
  phone: '+4531550124',
  phoneDisplay: '+45 31 55 01 24',
  availability: 'Taking on new projects for spring start',
  socials: [
    { label: 'Archdaily', href: 'https://www.archdaily.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],

  seo: {
    title: 'Freelance Architect in Copenhagen | Lindqvist Arkitektur',
    description:
      'Freelance architect in Copenhagen designing daylight-led homes, extensions and small residential projects. See case studies, floor plans, project scope and request a quote.',
  },

  stats: [
    { value: '14 yrs', label: 'In architectural practice' },
    { value: '62', label: 'Projects completed' },
    { value: '100%', label: 'Planning applications approved' },
    { value: '9', label: 'Awards & nominations' },
  ],

  services: [
    {
      title: 'Feasibility & Site Study',
      summary: 'Before you buy or commit: what the plot allows, what it costs, and where the value is.',
      points: ['Planning constraint review', 'Massing studies', 'Indicative budget', 'Go / no-go recommendation'],
    },
    {
      title: 'Concept & Planning',
      summary: 'Schematic design through to a submitted planning application, drawn to persuade.',
      points: ['Site analysis', 'Concept sketches', 'Scaled drawings', 'Authority liaison', 'Application package'],
    },
    {
      title: 'Detailed Design',
      summary: 'Technical drawings at 1:5 for the parts that decide how the building actually performs.',
      points: ['Construction details', 'Material & window schedules', 'Energy calculations', 'Tender documentation'],
    },
    {
      title: 'Site Supervision',
      summary: 'Regular visits through construction so the building stays faithful to the drawings.',
      points: ['Bi-weekly site visits', 'RFI responses', 'Variation reviews', 'Practical completion sign-off'],
    },
  ],

  packages: [
    {
      name: 'Feasibility',
      price: 'DKK 18,000',
      cadence: 'fixed fee',
      summary: 'A clear answer on what is possible before you commit to a plot or a budget.',
      features: ['Constraint review', 'Two massing options', 'Indicative cost range', 'Written recommendation', '1 week turnaround'],
    },
    {
      name: 'Full Design',
      price: '9–12%',
      cadence: 'of construction cost',
      summary: 'Concept through planning and technical design, on site to completion.',
      features: ['Site analysis', 'Concept design', 'Planning application', 'Detailed design', 'Tender documents', 'Site supervision', 'As-built drawings'],
      highlighted: true,
    },
    {
      name: 'Hourly Consultation',
      price: 'DKK 1,450',
      cadence: 'per hour',
      summary: 'Second opinions, review of another designer’s drawings, or expert input.',
      features: ['Drawing review', 'Written notes', 'Contractor discussions', 'Minimum 2 hours', 'No ongoing commitment'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Discovery',
      description: 'We walk the site, define the brief and set a realistic budget envelope. I review planning constraints, sun paths and neighbours, then test two or three massing options before committing to one.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Concept sketches become scaled plans, sections and elevations. We iterate on paper and in model until the daylight, circulation and structure all resolve — then package it for the planning authority.',
    },
    {
      step: '03',
      title: 'Delivery + Revisions',
      description: 'Technical design at 1:5, tender documentation and contractor selection. I visit site through each stage, respond to RFIs within two working days, and sign off at practical completion.',
    },
  ],

  testimonials: [
    {
      quote: 'Tomas found 14 square metres we did not know we had, simply by turning the stair. He designed the house and then defended it on site for nine months.',
      name: 'Ingrid Bakke',
      role: 'Private client, Hellerup',
      initials: 'IB',
    },
    {
      quote: 'Three infill plots, three very different houses, one planning approval each. His detail drawings cut our variation orders to almost nothing.',
      name: 'Rasmus Holm',
      role: 'Director, Nordhavn Bolig',
      initials: 'RH',
    },
    {
      quote: 'The daylight study alone changed how we lived in the house. Every room has sun at some point in the day — that was never in our original brief.',
      name: 'Karin Vogt',
      role: 'Private client, Malmö',
      initials: 'KV',
    },
  ],

  faqs: [
    {
      question: 'How do revisions work?',
      answer: 'Concept design includes two full revision rounds, and technical design includes one. Revisions are a normal part of the process — we use them to test options rather than to correct mistakes. If your brief changes materially after planning submission, I re-scope and quote the difference in writing before any additional work begins.',
    },
    {
      question: 'What does a project typically cost?',
      answer: 'My design fee is 9–12% of construction cost for a full-service project, which is standard for residential work in Denmark. You should budget the fee separately from construction: on a DKK 3 million build, expect roughly DKK 300–360k in fees including VAT and reimbursables.',
    },
    {
      question: 'How long does planning permission take?',
      answer: 'In Copenhagen municipality, expect eight to fourteen weeks from submission to decision for a straightforward residential application. I prepare the package so it clears the first completeness check — incomplete applications are where most of the delay lives.',
    },
    {
      question: 'Do you work outside Copenhagen?',
      answer: 'Yes. I work across Denmark and in southern Sweden, and have taken projects as far as Aarhus. Travel for site visits is scheduled in blocks so it stays efficient, and it is itemised transparently in the fee.',
    },
    {
      question: 'Can you work with our contractor?',
      answer: 'Gladly. I can prepare tender documents so several contractors bid on identical information, or work with a contractor you already have. Either way I review the programme and hold site meetings through construction.',
    },
  ],

  skills: ['Spatial planning', 'Daylight & sun-path analysis', 'Detail drawing (1:5)', 'Planning applications', 'Building regulations', 'Energy performance (BR18)', 'Tender documentation', 'Site supervision', 'Physical model making', 'Heritage constraints'],
  tools: ['Archicad', 'AutoCAD', 'Rhino', 'V-Ray', 'Revit', 'Q-insight', 'Adobe InDesign', 'Enscape', 'SketchUp', 'Twinmotion'],
  values: [
    { title: 'Daylight is the brief', body: 'A plan that is efficient but dark has failed the people living in it. Sun path is the first drawing I make, not the last.' },
    { title: 'Draw it at 1:5', body: 'Details decided on site by whoever is standing there become expensive compromises. I draw the junctions properly before tender.' },
    { title: 'Stay until the end', body: 'Buildings drift from drawings without supervision. Site visits through every stage are part of the service, not an extra.' },
  ],
  timeline: [
    { year: '2011', title: 'Qualified architect', body: 'MArch from KTH Stockholm, then five years in Copenhagen practices working on housing and schools.' },
    { year: '2016', title: 'Project architect', body: 'Led residential and mixed-use projects through planning and construction for a mid-size studio.' },
    { year: '2018', title: 'Went independent', body: 'Started Lindqvist Arkitektur with a single private client and no marketing budget.' },
    { year: '2023', title: 'Award nominated', body: 'Villa Nør shortlisted for the Danish Architecture Award; practice established across DK and Sweden.' },
  ],

  portfolioPdf: 'lindqvist-portfolio.pdf',

  projects: [
    {
      slug: 'villa-nor',
      title: 'Villa Nør',
      tag: 'Residential Design',
      category: 'New Build',
      client: 'Private client',
      year: '2025',
      cover: 'villanor.jpg',
      gallery: ['villanor-1.jpg', 'villanor-2.jpg', 'villanor-3.jpg'],
      excerpt: 'A long, low house on a north-facing slope, planned around a single continuous roof light.',
      overview: [
        'The plot fell away sharply and pointed north — two constraints that usually produce a dark, awkward house. Instead we ran the building as a single storey along the contour and cut a 22-metre roof light along the spine, pulling southern light deep into the plan.',
        'Materials are deliberately narrow: brick, oiled oak and blackened steel. Restraint on materials buys budget for the junctions, which is where a house of this size either holds together or falls apart.',
      ],
      tools: ['Archicad', 'Rhino', 'V-Ray', 'Q-insight'],
      outcomes: [
        'Planning approved at first submission in 9 weeks',
        'Shortlisted for the Danish Architecture Award',
        'Daylight autonomy above 80% in every habitable room',
      ],
      metrics: [
        { value: '9 wks', label: 'To approval' },
        { value: '214 m²', label: 'Floor area' },
        { value: '>80%', label: 'Daylight autonomy' },
      ],
      featured: true,
    },
    {
      slug: 'harbour-extension',
      title: 'Harbour Extension',
      tag: 'Extension',
      category: 'Extension',
      client: 'Private client',
      year: '2025',
      cover: 'harbour.jpg',
      gallery: ['harbour-1.jpg', 'harbour-2.jpg'],
      excerpt: 'A glass link joining a 1930s villa to its garden without touching the original brick.',
      overview: [
        'The clients wanted more kitchen and a better connection to a garden they barely used. Rather than altering the listed 1930s rear elevation, we set a new timber volume eleven metres away and joined them with a fully glazed link.',
        'The link does the work: you cross a threshold of light between old and new, and the original brick wall becomes an interior surface rather than something you lose.',
      ],
      tools: ['Archicad', 'Enscape', 'AutoCAD'],
      outcomes: [
        'Heritage consent granted without a single drawing revision',
        'Kitchen and dining area more than doubled',
        'Completed 4% under the agreed construction budget',
      ],
      metrics: [
        { value: '+38 m²', label: 'Added floor area' },
        { value: '-4%', label: 'vs. budget' },
      ],
      featured: true,
    },
    {
      slug: 'nordhavn-infill-three',
      title: 'Nordhavn Infill Three',
      tag: 'Small Developer',
      category: 'Housing',
      client: 'Nordhavn Bolig',
      year: '2024',
      cover: 'nordhavn.jpg',
      gallery: ['nordhavn-1.jpg', 'nordhavn-2.jpg', 'nordhavn-3.jpg'],
      excerpt: 'Three houses on tight infill plots, each different, all built from one detail set.',
      overview: [
        'Three adjacent plots with awkward rights of light between them. Each house responds to its own constraints — different ridge heights, different party wall conditions — while sharing one set of construction details.',
        'Standardising the junctions meant contractors could price all three from identical information, which removed the variation-order spiral that usually kills infill projects.',
      ],
      tools: ['Archicad', 'Revit', 'Q-insight', 'Twinmotion'],
      outcomes: [
        'All three planning applications approved first time',
        'Variation orders totalled under 1% of contract value',
        'Built and sold within eleven months',
      ],
      metrics: [
        { value: '3 / 3', label: 'Approvals first time' },
        { value: '<1%', label: 'Variation orders' },
      ],
      featured: true,
    },
    {
      slug: 'skagen-summerhouse',
      title: 'Skagen Summerhouse',
      tag: 'Residential Design',
      category: 'New Build',
      client: 'Private client',
      year: '2024',
      cover: 'skagen.jpg',
      gallery: ['skagen-1.jpg', 'skagen-2.jpg'],
      excerpt: 'A timber retreat shaped by wind, shifting sand and the need to disappear in winter.',
      overview: [
        'Exposed coastal plots demand a building that survives winter without heating an empty shell. We designed a compact, highly insulated core with a sheltered courtyard, and a cedar envelope that will silver off to match the dune grass.',
        'Every window frames a specific view rather than a general amount of light — a decision made by standing on the plot in four seasons before drawing anything.',
      ],
      tools: ['Archicad', 'Rhino', 'V-Ray'],
      outcomes: [
        'Energy label A achieved on a 96 m² timber build',
        'Construction completed in 16 weeks',
        'Featured in a Danish architecture annual',
      ],
      metrics: [
        { value: 'A', label: 'Energy rating' },
        { value: '16 wks', label: 'On site' },
      ],
    },
    {
      slug: 'ostergade-housing',
      title: 'Østergade Courtyard Housing',
      tag: 'Housing',
      category: 'Housing',
      client: 'Municipal housing association',
      year: '2024',
      cover: 'ostergade.jpg',
      gallery: ['ostergade-1.jpg', 'ostergade-2.jpg'],
      excerpt: 'Twenty-four apartments organised around a shared courtyard that gets winter sun.',
      overview: [
        'A tight urban infill with a brief for 24 affordable apartments. The plan wraps the block so every unit has dual aspect, with the courtyard angled to catch low winter sun rather than losing it to the northern wing.',
        'Circulation is external wherever the climate allows, which cut the communal area by a fifth and paid for better windows.',
      ],
      tools: ['Revit', 'Archicad', 'Q-insight', 'Enscape'],
      outcomes: [
        'All 24 units dual-aspect on a constrained site',
        'Communal circulation area cut 21%',
        'Planning approved with no affordable housing conditions',
      ],
      metrics: [
        { value: '24', label: 'Dual-aspect homes' },
        { value: '-21%', label: 'Circulation area' },
      ],
    },
    {
      slug: 'malmo-townhouse',
      title: 'Malmö Townhouse',
      tag: 'Residential Design',
      category: 'New Build',
      client: 'Private client',
      year: '2023',
      cover: 'malmo.jpg',
      gallery: ['malmo-1.jpg', 'malmo-2.jpg'],
      excerpt: 'A narrow 5.4m plot resolved with a split section and a stair that is also a room.',
      overview: [
        'At 5.4 metres wide, a conventional plan produces a dark corridor. We split the section instead: living spaces step down towards the garden while bedrooms sit on a mezzanine above, and the stair widens into a usable landing at each level.',
        'The stair is the largest single element in the house and the reason the footprint works — a room you pass through rather than a hole in the floor.',
      ],
      tools: ['Archicad', 'Rhino', 'Enscape'],
      outcomes: [
        'Full building permit granted in Sweden within 10 weeks',
        'Usable area increased 22% over the initial test fit',
        'Completed on a fixed-price contract',
      ],
      metrics: [
        { value: '+22%', label: 'Usable area' },
        { value: '10 wks', label: 'To permit' },
      ],
    },
    {
      slug: 'vesterbro-cafe-fitout',
      title: 'Vesterbro Café Fit-out',
      tag: 'Interior',
      category: 'Interior',
      client: 'Grain & Co.',
      year: '2023',
      cover: 'vesterbro.jpg',
      gallery: ['vesterbro-1.jpg', 'vesterbro-2.jpg'],
      excerpt: 'A 42-seat café carved from a former repair shop with no natural light in the back half.',
      overview: [
        'The front of the unit had generous glazing; the back was effectively a cave. We lifted a section of the roof to bring a light well down through to the counter, turning the darkest part of the plan into the busiest.',
        'Everything else is reused material from the strip-out — the original brick, the steel rollers, and most of the timber.',
      ],
      tools: ['Archicad', 'Twinmotion', 'AutoCAD'],
      outcomes: [
        'Opened to a full house on day one and remained booked at weekends',
        'Light well added usable covers in the rear third',
        '85% of strip-out material reused on site',
      ],
      metrics: [
        { value: '42', label: 'Covers' },
        { value: '85%', label: 'Material reused' },
      ],
    },
    {
      slug: 'villaro-playhouse',
      title: 'Villa Rø — Garden Playhouse',
      tag: 'Small Build',
      category: 'New Build',
      client: 'Private client',
      year: '2023',
      cover: 'villaro.jpg',
      gallery: ['villaro-1.jpg'],
      excerpt: 'A 14 m² commission proving detail thinking scales down without scaling cost up.',
      overview: [
        'A small brief that the client wanted treated seriously: a garden building usable year-round for less than the cost of a kitchen extension. Flat roof, exposed stud structure, one good window.',
        'The pleasure here is in restraint — one material, one junction detail, and a window positioned exactly on the eye line from the bench inside.',
      ],
      tools: ['Archicad', 'SketchUp'],
      outcomes: [
        'Built in five days by a two-person crew',
        'Delivered 12% under budget',
        'Client has since commissioned the main extension',
      ],
      metrics: [
        { value: '14 m²', label: 'Floor area' },
        { value: '-12%', label: 'vs. budget' },
      ],
    },
  ],

  caseStudies: [
    {
      slug: 'villa-nor-daylight-strategy',
      title: 'Villa Nør: turning a north-facing slope into a daylight win',
      tag: 'Concept & Planning',
      category: 'New Build',
      client: 'Private client',
      year: '2025',
      cover: 'cs-villanor.jpg',
      gallery: ['cs-villanor-1.jpg', 'cs-villanor-2.jpg'],
      challenge:
        'A private client bought a sloping, north-facing plot at auction before taking advice. Conventional wisdom on that orientation is to accept a dark southern half of the plan, or to split the house across levels and lose accessibility. The clients — a couple in their sixties — needed single-storey living, a realistic budget, and a house that did not feel like it was apologising for its plot.',
      goal:
        'Achieve an approved single-storey home of roughly 210 m² with daylight autonomy above 75% in every habitable room, on a fixed construction budget.',
      approach: [
        'Ran a full sun-path and overshadowing study across the equinoxes before sketching anything.',
        'Laid the house along the contour as one long bar so no room is more than 6 metres from a façade.',
        'Cut a 22-metre roof light along the circulation spine to bring southern light into the plan centre.',
        'Pushed service spaces to the north edge as thermal buffer against the slope.',
        'Tested three massing options in physical model and Rhino, then submitted the one that cleared daylight and cost together.',
      ],
      services: ['Feasibility study', 'Concept design', 'Planning application', 'Detailed design', 'Site supervision'],
      timeline: 'Concept 6 weeks · Planning 9 weeks · Technical design 10 weeks · Construction 11 months',
      tools: ['Archicad', 'Rhino', 'V-Ray', 'Q-insight', 'Enscape'],
      results:
        'Planning was approved at first submission in nine weeks with no conditions requiring redesign. Every habitable room exceeded 80% daylight autonomy, comfortably clearing the 75% target. The house was shortlisted for the Danish Architecture Award, and the client occupied it in month eleven.',
      metrics: [
        { value: '9 wks', label: 'Planning approval' },
        { value: '>80%', label: 'Daylight autonomy' },
        { value: '214 m²', label: 'Floor area' },
      ],
      featured: true,
    },
    {
      slug: 'nordhavn-standardised-details',
      title: 'Nordhavn Infill: three houses, one detail set, under 1% variations',
      tag: 'Small Developer',
      category: 'Housing',
      client: 'Nordhavn Bolig',
      year: '2024',
      cover: 'cs-nordhavn.jpg',
      gallery: ['cs-nordhavn-1.jpg', 'cs-nordhavn-2.jpg'],
      challenge:
        'A small developer held three awkward infill plots with restrictive rights-of-light conditions between them. On the previous project, three different architects had produced three different detail sets, the contractor priced them inconsistently, and variation orders consumed most of the margin.',
      goal:
        'Secure planning for all three plots and deliver them on a single contract without the variation-order spiral that had damaged the developer’s previous scheme.',
      approach: [
        'Audited the failed previous project to identify exactly where the variation costs originated.',
        'Designed each house to its own constraints while extracting one shared library of construction details.',
        'Produced a single tender package with identical information for all three plots.',
        'Ran a pre-tender workshop with the preferred contractor to test buildability before pricing.',
        'Held site meetings on a fixed weekly slot so decisions never waited for the next visit.',
      ],
      services: ['Concept design', 'Planning applications', 'Standardised detail library', 'Tender documentation', 'Site supervision'],
      timeline: 'Design 14 weeks · Planning 11 weeks · Construction 11 months',
      tools: ['Archicad', 'Revit', 'Q-insight', 'Twinmotion'],
      results:
        'All three applications were approved at first submission. The shared detail library meant one contractor could price the entire scheme from a single document set, and total variation orders across all three houses came in under 1% of contract value — against 6–8% on the developer’s prior project. All three sold within eleven months.',
      metrics: [
        { value: '3 / 3', label: 'Approvals first time' },
        { value: '<1%', label: 'Variation orders' },
        { value: '-75%', label: 'Vs. prior project' },
      ],
      featured: true,
    },
    {
      slug: 'harbour-heritage-consent',
      title: 'Harbour Extension: adding 38 m² to a heritage villa with zero revisions',
      tag: 'Heritage / Extension',
      category: 'Extension',
      client: 'Private client',
      year: '2025',
      cover: 'cs-harbour.jpg',
      gallery: ['cs-harbour-1.jpg', 'cs-harbour-2.jpg'],
      challenge:
        'A protected 1930s villa with a rear garden the family barely used. Heritage rules forbade altering the listed rear elevation, which ruled out the obvious extension. Two architects had already proposed touching the original brick and been refused at pre-application.',
      goal:
        'Gain heritage and planning consent for meaningful additional living space, without modifying the protected fabric of the original building.',
      approach: [
        'Walked the site and identified that the constraint was also the opportunity: the untouched brick could become an interior surface.',
        'Set the new volume eleven metres from the original, connected by a fully glazed link, so no protected fabric was touched.',
        'Specified the link in blackened steel and glass to read clearly as a later addition — the approach conservation officers prefer.',
        'Ran pre-application meetings early with drawings that explained the heritage reasoning, not just the design.',
        'Detailed the threshold at 1:5 so the junction between old brick and new structure was resolved before tender.',
      ],
      services: ['Feasibility', 'Heritage pre-application', 'Concept design', 'Detailed design', 'Site supervision'],
      timeline: 'Pre-application 4 weeks · Full application 10 weeks · Construction 7 months',
      tools: ['Archicad', 'AutoCAD', 'Enscape', 'Rhino'],
      results:
        'Consent was granted with no drawing revisions requested — the pre-application conversation had already answered the officer’s concerns. The completed extension added 38 m² of kitchen and dining space and finished 4% under the agreed construction budget. The original brick elevation now reads as a feature wall from inside the new link.',
      metrics: [
        { value: '0', label: 'Drawing revisions' },
        { value: '+38 m²', label: 'Floor area' },
        { value: '-4%', label: 'vs. budget' },
      ],
      featured: true,
    },
  ],
};

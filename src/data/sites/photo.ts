import type { Site } from '../types';

export const photo: Site = {
  prefix: 'photographer',
  label: 'Photographer',
  kind: 'photo',

  accent: '#e11d48',
  accentDark: '#be123c',
  tint: 'rgba(225, 29, 72, 0.08)',
  display: 'serif',

  name: 'Elena Moreau',
  brand: 'Elena Moreau Photography',
  role: 'Photographer',
  servicePhrase: 'Editorial & Brand Photography',
  clientsPhrase: 'Independent hospitality & design brands',
  city: 'Lisbon',
  region: 'Portugal',
  positioning: 'Natural-light photography for brands that want to look like the real place, not a stock library.',
  bio: [
    'I am a freelance photographer based in Lisbon, working across Portugal and travelling for the right project. For eleven years I have photographed hotels, restaurants, makers and independent brands — the kind of clients whose value lives in texture, light and the people behind the work.',
    'My style is documentary at heart: available light, minimal direction, and enough patience to wait for the moment that actually happened rather than staging one that did not. That approach is why I get rebooked — brands hire me once for a launch and then call again every season.',
    'I handle the full production myself, from shot lists and location scouting to colour grading and delivery. You receive a curated, edited gallery within five working days, licensed clearly and ready for web, print and press.',
  ],
  yearsExperience: 11,

  email: 'studio@elenamoreau.photo',
  phone: '+351912345678',
  phoneDisplay: '+351 912 345 678',
  availability: 'Autumn editorial slots open — Lisbon & Porto',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Behance', href: 'https://www.behance.net/' },
    { label: 'Format', href: 'https://format.com/' },
  ],

  seo: {
    title: 'Freelance Photographer in Lisbon, Portugal | Elena Moreau',
    description:
      'Freelance photographer in Lisbon shooting natural-light editorial, hospitality and brand photography across Portugal. View portfolio, packages, case studies and book a shoot.',
  },

  stats: [
    { value: '11 yrs', label: 'Shooting professionally' },
    { value: '320+', label: 'Brand & editorial commissions' },
    { value: '5 days', label: 'Average gallery delivery' },
    { value: '68%', label: 'Clients who rebook within a year' },
  ],

  services: [
    {
      title: 'Brand & Editorial Shoot',
      summary: 'A half or full-day session covering your team, space and product in available light.',
      points: ['Shot list + mood board', 'Location scouting', '4–8 hours on site', '60–120 finished images'],
    },
    {
      title: 'Hospitality & Interiors',
      summary: 'Rooms, restaurant floors and details shot to sell the atmosphere, not just the square metres.',
      points: ['Available-light interiors', 'Food & beverage styling support', 'Twilight exterior pass', 'Press-ready crops'],
    },
    {
      title: 'Product & Still Life',
      summary: 'Studio or on-location still life for lookbooks, e-commerce and campaign use.',
      points: ['Set building', 'Styling & propping', 'Clipping paths on request', 'Web + print resolutions'],
    },
    {
      title: 'Retouching & Colour',
      summary: 'Careful, natural retouching and a consistent grade across an entire library.',
      points: ['Colour consistency pass', 'Skin & surface retouching', 'Batch delivery', 'Archive management'],
    },
  ],

  packages: [
    {
      name: 'Half Day',
      price: '€1,150',
      cadence: '4 hours',
      summary: 'One location, one look. Ideal for a menu refresh or a product drop.',
      features: ['4 hours shooting', '1 location', '40 finished images', '5-day delivery', 'Web licence'],
    },
    {
      name: 'Full Day',
      price: '€2,100',
      cadence: '8 hours',
      summary: 'The standard brand commission — space, team and details in one day.',
      features: ['8 hours shooting', 'Up to 2 locations', '100 finished images', 'Mood board + shot list', 'Retouching included', '3-year licence'],
      highlighted: true,
    },
    {
      name: 'Seasonal Retainer',
      price: '€3,600',
      cadence: 'per month',
      summary: 'Ongoing content for brands publishing every week.',
      features: ['2 shoot days / month', 'Priority scheduling', 'Same-week edits', 'Social crops included', 'Shared asset library'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Discovery',
      description: 'We talk through the brief, the audience and where the images will run. I build a mood board and shot list, scout the location, confirm permits, and agree the delivery format before the day.',
    },
    {
      step: '02',
      title: 'Production',
      description: 'Shoot day. I work with available light and light direction rather than heavy staging, covering the shot list while leaving room for the unplanned frames that usually end up the favourites.',
    },
    {
      step: '03',
      title: 'Delivery + Revisions',
      description: 'A proof gallery within 48 hours, your selects back within five working days — colour-graded, retouched and delivered in web, print and social crops with a clear licence.',
    },
  ],

  testimonials: [
    {
      quote: 'Elena spent the first hour just watching the light in our dining room before shooting a frame. The gallery looked like the restaurant on its best night.',
      name: 'Tomás Ferreira',
      role: 'Owner, Casa Verde',
      initials: 'TF',
    },
    {
      quote: 'We used her images for a full season of campaigns and press. Two publications picked them up without us pitching.',
      name: 'Sofia Almeida',
      role: 'Brand Director, Linho Studio',
      initials: 'SA',
    },
    {
      quote: 'Third shoot with Elena. She is the only photographer we have who delivers on time, on brief, and gets our team relaxed in front of a camera.',
      name: 'Jonas Weber',
      role: 'Marketing Lead, Hotel Miramar',
      initials: 'JW',
    },
  ],

  faqs: [
    {
      question: 'How do revisions work?',
      answer: 'You get a proof gallery within 48 hours and mark your selects with simple numbered comments. One round of additional edits — crops, exposure tweaks, extra retouching — is included on every package. Deeper changes like a re-grade of the whole set or reshoots are quoted separately.',
    },
    {
      question: 'What is included in the licence?',
      answer: 'Standard packages include a three-year, worldwide licence for your website, social channels, email and print collateral up to 10,000 copies. Advertising, billboards and third-party syndication are available as an add-on — I will always put the licence in writing before we shoot.',
    },
    {
      question: 'Do you travel outside Lisbon?',
      answer: 'Yes. Portugal-wide travel is included in full-day packages beyond a 60km radius at a flat rate. International commissions are quoted per project including flights and accommodation.',
    },
    {
      question: 'How many images will we receive?',
      answer: 'Half day returns around 40 finished images, full day around 100. I shoot generously but curate hard — you receive the frames that work, not every frame that was taken.',
    },
    {
      question: 'What if the weather turns?',
      answer: 'For exteriors and rooftops, we reschedule at no cost if the forecast is unusable. I hold a buffer day in every monthly calendar precisely for this.',
    },
  ],

  skills: ['Natural-light photography', 'Editorial direction', 'Location scouting', 'Food & interiors', 'Colour grading', 'Studio lighting', 'Image licensing', 'Art direction collaboration', 'Tethered shooting', 'Darkroom-free post'],
  tools: ['Sony A7R V', 'Leica Q3', 'Profoto B10', 'Capture One', 'Lightroom Classic', 'Photoshop', 'Sequel', 'Format', 'Dropbox'],
  values: [
    { title: 'Wait for the real moment', body: 'Staged warmth reads as fake within a second. I would rather work slowly and photograph what was actually there.' },
    { title: 'Light before gear', body: 'The best frame comes from finding the right window at the right hour. Equipment is the last decision, not the first.' },
    { title: 'Deliver when promised', body: 'A gallery that arrives on the day it was promised is worth more than a perfect gallery that arrives late.' },
  ],
  timeline: [
    { year: '2014', title: 'Assistanted in Porto', body: 'Two years assisting editorial and wedding photographers while building a personal body of work.' },
    { year: '2017', title: 'First hospitality clients', body: 'Landed a boutique hotel commission that became a three-year seasonal retainer.' },
    { year: '2021', title: 'Moved to Lisbon', body: 'Opened a daylight studio and expanded into brand and product work.' },
    { year: '2024', title: 'Published series', body: 'Personal project on Portuguese tilemakers exhibited in Lisbon and licensed for two books.' },
  ],

  portfolioPdf: 'elena-moreau-portfolio.pdf',

  projects: [
    {
      slug: 'casa-verde-restaurant',
      title: 'Casa Verde Restaurant',
      tag: 'Hospitality',
      category: 'Hospitality',
      client: 'Casa Verde',
      year: '2025',
      cover: 'casaverde.jpg',
      gallery: ['casaverde-1.jpg', 'casaverde-2.jpg', 'casaverde-3.jpg'],
      excerpt: 'A full-day shoot capturing the room, the kitchen and the twelve minutes of golden light on the terrace.',
      overview: [
        'Casa Verde had a menu refresh coming and photography that dated from three years and two renovations ago. We shot the room empty at opening, the pass during service, and the terrace in the last hour of daylight — three distinct moods from one day.',
        'Everything was shot on available light with a single bounce, which is what keeps the images feeling like the restaurant rather than a studio set. The kitchen crew barely noticed the camera.',
      ],
      tools: ['Sony A7R V', 'Capture One', 'Profoto B10'],
      outcomes: [
        'Reservations from the website up 34% in the two months after launch',
        'Images picked up by two food publications unsolicited',
        'Menu photography reused across three seasonal campaigns',
      ],
      metrics: [
        { value: '+34%', label: 'Direct reservations' },
        { value: '96', label: 'Finished images' },
      ],
      featured: true,
    },
    {
      slug: 'linho-studio-lookbook',
      title: 'Linho Studio Lookbook',
      tag: 'Editorial',
      category: 'Fashion',
      client: 'Linho Studio',
      year: '2025',
      cover: 'linho.jpg',
      gallery: ['linho-1.jpg', 'linho-2.jpg', 'linho-3.jpg'],
      excerpt: 'Natural linen, natural light: a spring lookbook shot across two Lisbon apartments.',
      overview: [
        'Linho makes undyed linen clothing and wanted photography that showed the fabric moving rather than flat-lay product shots. We worked across two apartments with large north windows, keeping the styling minimal and the poses unposed.',
        'The grade stays deliberately warm-neutral so the linen colour reads true — a practical requirement for a brand where customers order online.',
      ],
      tools: ['Leica Q3', 'Lightroom Classic', 'Format'],
      outcomes: [
        'Lookbook became the core of the spring campaign',
        'Return rate on featured pieces dropped 8%',
        'Used for wholesale line sheets and press kits',
      ],
      metrics: [{ value: '-8%', label: 'Return rate' }],
      featured: true,
    },
    {
      slug: 'hotel-miramar-seasonal',
      title: 'Hotel Miramar — Seasonal Library',
      tag: 'Hospitality',
      category: 'Hospitality',
      client: 'Hotel Miramar',
      year: '2024',
      cover: 'miramar.jpg',
      gallery: ['miramar-1.jpg', 'miramar-2.jpg'],
      excerpt: 'An 18-month rolling image library covering every room category and season.',
      overview: [
        'Rather than one shoot a year, Hotel Miramar booked a rolling retainer: two days each quarter so the image library always matches what is actually on offer. Off-season frames are shot in daylight hours that would otherwise be wasted.',
        'The result is a library of over 900 images, organised by room, season and usage so their marketing team can find a usable frame in seconds.',
      ],
      tools: ['Sony A7R V', 'Capture One', 'Dropbox'],
      outcomes: [
        'Booking engine conversion up 22% year on year',
        'Direct bookings overtook OTAs for the first time',
        'No image has gone stale across four rate seasons',
      ],
      metrics: [
        { value: '+22%', label: 'Booking conversion' },
        { value: '900+', label: 'Image library' },
      ],
      featured: true,
    },
    {
      slug: 'ataelier-ceramics',
      title: 'Atelier Ceramics',
      tag: 'Still Life',
      category: 'Product',
      client: 'Atelier Ceramics',
      year: '2024',
      cover: 'atelier.jpg',
      gallery: ['atelier-1.jpg', 'atelier-2.jpg'],
      excerpt: 'Handmade tableware photographed to show glaze variation, not to hide it.',
      overview: [
        'Each piece in this range is slightly different, and the client wanted that to be the selling point rather than a defect to retouch away. We built a simple daylight set with neutral surfaces and photographed thirty-two pieces in six hours.',
        'Shallow depth of field on the detail frames makes the glaze pooling visible — the thing customers comment on when they unbox.',
      ],
      tools: ['Sony A7R V', 'Capture One', 'Photoshop'],
      outcomes: [
        'Collection sold through its first production run in eleven days',
        'Wholesale enquiries doubled after the catalogue shipped',
        'Images reused for the brand’s first exhibition',
      ],
      metrics: [{ value: '11 days', label: 'First run sold out' }],
    },
    {
      slug: 'mercado-food-editorial',
      title: 'Mercado — Food Editorial',
      tag: 'Food',
      category: 'Food',
      client: 'Mercado Magazine',
      year: '2024',
      cover: 'mercado.jpg',
      gallery: ['mercado-1.jpg', 'mercado-2.jpg'],
      excerpt: 'A twelve-page feature on Lisbon’s tinned fish traditions, shot on location.',
      overview: [
        'The commission was a long-form feature on the last family canneries outside Lisbon. We shot in working kitchens at 6am, using whatever light the buildings offered, and treated the environment as part of the story rather than clutter to remove.',
        'The photo editor ran eleven of the frames across twelve pages — an unusually high selection rate for a location feature.',
      ],
      tools: ['Sony A7R V', 'Capture One', 'Lightroom Classic'],
      outcomes: [
        'Eleven frames published across a twelve-page spread',
        'Shortlisted for a national food media award',
        'Client rebooked for two further features',
      ],
      metrics: [{ value: '11 / 12', label: 'Frames published' }],
    },
    {
      slug: 'norte-furniture-catalogue',
      title: 'Norte Furniture Catalogue',
      tag: 'Product',
      category: 'Product',
      client: 'Norte',
      year: '2023',
      cover: 'norte.jpg',
      gallery: ['norte-1.jpg', 'norte-2.jpg'],
      excerpt: 'Forty products in a working showroom, shot to a strict catalogue specification.',
      overview: [
        'Norte needed a full catalogue in two days with a fixed crop ratio for print and a matching square crop for web. We set up a repeatable lighting position and worked down a numbered list, which kept every product consistent across forty pages.',
        'Consistency was the point: when the images sit side by side in print, any drift in exposure or angle is immediately obvious.',
      ],
      tools: ['Sony A7R V', 'Capture One', 'InDesign'],
      outcomes: [
        'Catalogue delivered to print on schedule',
        'Zero re-shoots required before sign-off',
        'Same frames now power the e-commerce listings',
      ],
      metrics: [{ value: '40', label: 'Products in 2 days' }],
    },
    {
      slug: 'atelier-rocha-portraits',
      title: 'Atelier Rocha — Maker Portraits',
      tag: 'Portrait',
      category: 'Portrait',
      client: 'Atelier Rocha',
      year: '2023',
      cover: 'rocha.jpg',
      gallery: ['rocha-1.jpg', 'rocha-2.jpg'],
      excerpt: 'Environmental portraits of a furniture workshop, shot around the work in progress.',
      overview: [
        'The brief was team portraits, but standing everyone against a wall would have told the client nothing. We photographed each maker at their bench, mid-task, with the light they actually work in.',
        'The frames now sit on the About page and in press submissions, and they do the job a headshot never could — showing how the studio operates.',
      ],
      tools: ['Leica Q3', 'Profoto B10', 'Lightroom Classic'],
      outcomes: [
        'Used across the website, press kit and recruitment ads',
        'Applications to the apprentice programme up 45%',
        'Featured in a design trade publication profile',
      ],
      metrics: [{ value: '+45%', label: 'Apprentice applications' }],
    },
    {
      slug: 'faro-coast-travel-series',
      title: 'Faro Coast Travel Series',
      tag: 'Editorial',
      category: 'Travel',
      client: 'Personal project',
      year: '2023',
      cover: 'faro.jpg',
      gallery: ['faro-1.jpg', 'faro-2.jpg'],
      excerpt: 'A self-initiated series on the quiet edges of the Algarve, licensed to two publishers.',
      overview: [
        'Shot across six weekends outside peak season, this series deliberately avoids the postcard versions of the Algarve — working harbours, empty winter beaches, and the architecture of tourism out of season.',
        'Self-initiated work keeps the eye sharp, and this one generated two licensing deals and a commission for a related brand project.',
      ],
      tools: ['Leica Q3', 'Lightroom Classic'],
      outcomes: [
        'Licensed to two publishers for print features',
        'Led directly to a hospitality commission',
        'Selected for a group exhibition in Faro',
      ],
      metrics: [{ value: '2', label: 'Publishing licences' }],
    },
  ],

  caseStudies: [
    {
      slug: 'hotel-miramar-booking-lift',
      title: 'Hotel Miramar: a seasonal library that moved direct bookings',
      tag: 'Hospitality Photography',
      category: 'Hospitality',
      client: 'Hotel Miramar',
      year: '2024',
      cover: 'cs-miramar.jpg',
      gallery: ['cs-miramar-1.jpg', 'cs-miramar-2.jpg'],
      challenge:
        'The hotel was dependent on OTAs for 68% of bookings. Their photography was four years old, shot entirely in summer, and showed rooms that no longer matched the current rate plan. Guests were arriving to a different hotel than the one in the pictures, which was driving a steady trickle of complaints and mediocre review scores.',
      goal:
        'Increase direct bookings over OTA channels and give the marketing team an always-current image library, without committing to one large annual shoot that would go stale by autumn.',
      approach: [
        'Audited every image in use and marked what was outdated, misleading or simply unused.',
        'Split the shoot into four quarterly sessions so each season is represented honestly.',
        'Established one fixed lighting and crop position per room category for consistency across the year.',
        'Built a tagged, searchable library organised by room, season and usage rights.',
        'Trained the marketing team to pull and crop their own images for social.',
      ],
      services: ['Image audit', 'Quarterly retainer shoots', 'Colour consistency', 'Asset library setup', 'Team training'],
      timeline: '18-month rolling engagement — 2 shoot days per quarter',
      tools: ['Sony A7R V', 'Capture One', 'Dropbox', 'Canva'],
      results:
        'Booking engine conversion rose 22% year on year, and the hotel recorded its first quarter where direct bookings exceeded OTA bookings. Image-related guest complaints fell to near zero. Because the library refreshes every quarter, no marketing asset has gone out of date across four rate seasons.',
      metrics: [
        { value: '+22%', label: 'Booking conversion' },
        { value: '68% → 41%', label: 'OTA share' },
        { value: '900+', label: 'Library images' },
      ],
      featured: true,
    },
    {
      slug: 'linho-lookbook-returns',
      title: 'Linho Studio: honest fabric photography cut returns by 8%',
      tag: 'Brand Photography',
      category: 'Fashion',
      client: 'Linho Studio',
      year: '2025',
      cover: 'cs-linho.jpg',
      gallery: ['cs-linho-1.jpg', 'cs-linho-2.jpg'],
      challenge:
        'Linho sells undyed linen direct to consumers, and 21% of orders were coming back — mostly with the note that the colour did not match the website. Flat-lay product shots under studio strobes were pushing the fabric warm, so the online colour simply was not true to what arrived in the box.',
      goal:
        'Reduce colour-related returns while producing imagery good enough to carry a full seasonal campaign.',
      approach: [
        'Shot fabric swatches under controlled daylight against a calibrated grey card to establish true colour.',
        'Rebuilt the grade so linen renders neutrally across the entire library rather than per-image.',
        'Photographed garments in motion on real bodies in two Lisbon apartments instead of flat-lay.',
        'Delivered a web crop and a print crop of every frame so colour stays matched across channels.',
        'Delivered a colour reference chart the client can reuse for future in-house shoots.',
      ],
      services: ['Colour calibration', 'Lookbook shoot', 'Motion direction', 'Retouching', 'Cross-channel crops'],
      timeline: '2 shoot days + 5 days post-production',
      tools: ['Leica Q3', 'Capture One', 'Lightroom Classic'],
      results:
        'Returns on featured pieces fell from 21% to 13% in the following quarter, with colour-related reasons dropping fastest. The lookbook carried the whole spring campaign, and the client now runs its own supplementary shoots using the colour reference I left them.',
      metrics: [
        { value: '-8%', label: 'Return rate' },
        { value: '-41%', label: 'Colour complaints' },
        { value: '1 season', label: 'Campaign usage' },
      ],
      featured: true,
    },
    {
      slug: 'casa-verde-relaunch',
      title: 'Casa Verde: one shoot day, a 34% reservation lift',
      tag: 'Hospitality Photography',
      category: 'Food',
      client: 'Casa Verde',
      year: '2025',
      cover: 'cs-casaverde.jpg',
      gallery: ['cs-casaverde-1.jpg', 'cs-casaverde-2.jpg'],
      challenge:
        'A renovated neighbourhood restaurant was still using photographs of its previous incarnation on the website and every third-party listing. The food looked fine; the room looked wrong. Direct reservations through the site were flat while delivery orders climbed.',
      goal:
        'Replace every outdated image with a coherent set that shows the space at the hour people actually book for, and drive a measurable lift in direct reservations.',
      approach: [
        'Visited three times before shooting to map how light moves across the dining room through the day.',
        'Shot the empty room at opening, the pass during service, and the terrace in the final hour of daylight.',
        'Kept direction minimal so staff and diners appear natural rather than staged.',
        'Delivered crops sized for the website, reservation platform, press submissions and social.',
        'Tracked direct reservations against the previous two months as the primary metric.',
      ],
      services: ['Location scout', 'Full-day shoot', 'Food & interiors', 'Retouching', 'Multi-channel crops'],
      timeline: '3 visits + 1 shoot day + 5 days delivery',
      tools: ['Sony A7R V', 'Capture One', 'Profoto B10'],
      results:
        'Direct reservations through the website rose 34% over the following two months with no change in marketing spend. Two food publications ran the images unsolicited, and the same library is now serving the seasonal menu campaign.',
      metrics: [
        { value: '+34%', label: 'Direct reservations' },
        { value: '2', label: 'Unsolicited press features' },
        { value: '96', label: 'Finished images' },
      ],
      featured: true,
    },
  ],
};

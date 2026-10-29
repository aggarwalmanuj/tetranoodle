/* ────────────────────────────────────────────────────────────────
   Case Studies: single source of truth for the /case-studies index
   cards and the long-form /case-studies/[slug] pages.
   Long-form copy follows the template: header + stats → situation →
   the human side / the AI (or data) side → how they worked together →
   results → what TetraNoodle did (budget, timeline) → quotes.
   None of these were AI Merge engagements; each page says so.
   ──────────────────────────────────────────────────────────────── */

export type Stat = { value: string; label: string };
export type Block = { title: string; body: string };
export type Quote = { quote: string; name: string; role: string };

export type CaseStudyDetail = {
  /** Header stats. Descriptors stand in where no numbers exist. */
  stats: Stat[];
  /** Header summary under the title. */
  summary: string;
  situation: string[];
  human: string[];
  /** "The AI side", or "The data side" where AI was not the core. */
  tech: { heading: string; body: string[] };
  together: string[];
  results: Block[];
  did: string[];
  budget: string;
  timeline: string;
  quotes: Quote[];
  /** The engagement label shown at the foot of the page. */
  note: string;
};

export type CaseStudy = {
  client: string;
  /** Present only for studies with a long-form page. */
  slug?: string;
  logo?: { src: string; alt: string };
  /** Short engagement type shown as a tag. */
  kind?: string;
  title: string;
  outcome: string;
  detail?: CaseStudyDetail;
};

const TECH_NOTE =
  "Technology project. Delivered by TetraNoodle. This was a technology engagement, not an AI Merge engagement.";

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Titan",
    slug: "titan",
    kind: "Technology project",
    title: "Titan Environment: reports in 9 minutes, not 3 to 4 hours",
    outcome:
      "Software robots and AI took over the repeated report work. Its people made the calls.",
    detail: {
      summary:
        "Titan is North America’s fastest-growing end-to-end geosynthetics supplier, fabricator and installer. Software robots and AI took over the repeated report work. Its people made the calls.",
      stats: [
        { value: "400-500%", label: "ROI on Phase 1" },
        { value: "9 min", label: "New report time, down from 3-4 hours" },
        { value: "12 weeks", label: "Phase 1 duration" },
      ],
      situation: [
        "After every site inspection, employees had to write a detailed report. Each one took 3 to 4 hours. Manual steps meant human error, which caused delays and unhappy customers. Training a new employee took several months.",
        "Titan had grown steadily for 15+ years, and this was the bottleneck standing in the way of its next stage of growth.",
      ],
      human: [
        "The people involved: field inspectors, report writers, new hires, and the clients waiting on the reports.",
        "Every one of them had to trust that the technology was there to help, not replace them. Even with the executive team behind it, it would not have worked without buy-in from every person on the team. We studied how each employee worked and brought them into the process.",
      ],
      tech: {
        heading: "The AI side",
        body: [
          "Software robots (RPA) took over the repeated steps employees were doing by hand.",
          "The decisions employees make, in the office, with customers, in the field and when entering data, were encoded into AI. It helps them make the right call.",
          "AI-assisted reports replaced hours of manual writing.",
        ],
      },
      together: [
        "A parallel AI-driven system ran alongside the old one, instead of replacing it overnight. Titan’s institutional knowledge was kept, and accuracy and efficiency were added.",
        "The robots do the repeated work. The AI helps with the call. Employees stay the ones who decide.",
      ],
      results: [
        {
          title: "Reports in minutes",
          body: "Reports that took 3 to 4 hours now take about 9 minutes, with higher accuracy.",
        },
        {
          title: "Faster onboarding",
          body: "New employees are productive within a week instead of several months.",
        },
        {
          title: "Strong return",
          body: "400-500% ROI on the Phase 1 investment.",
        },
        {
          title: "New revenue",
          body: "The new speed made a rush report delivery service possible, a revenue stream that did not exist before.",
        },
      ],
      did: [
        "Mapped every action employees were taking and turned it into streamlined, automated processes (RPA).",
        "Encoded employee decisions into AI to support the right call.",
        "Worked with each employee on buy-in.",
      ],
      budget: "~$50K (Phase 1)",
      timeline:
        "12 weeks (Phase 1). Phase 2, a full legacy system overhaul, is underway.",
      quotes: [],
      note: TECH_NOTE,
    },
  },
  {
    client: "Wiivv",
    slug: "wiivv",
    kind: "Technology project",
    title: "Wiivv: custom orthotics, made at scale",
    outcome:
      "A phone foot scan became a custom 3D printed orthotic, later licensed to Bayer under Dr. Scholl’s.",
    detail: {
      summary:
        "Wiivv turned a phone foot scan into a custom 3D printed orthotic. AI models drive the fit. People run the pipeline from scan to shipped product. The company went on to license its product to Bayer under the Dr. Scholl’s brand.",
      stats: [
        { value: "No. 1", label: "3D printed orthotic on the market" },
        { value: "100,000", label: "Customers" },
        { value: "3", label: "Patents granted" },
      ],
      situation: [
        "The orthotic market was full of generic, one-size-fits-all products, which meant discomfort and poor support. Wiivv set out to offer orthotics matched to each person’s anatomy.",
        "It raised $5 million and ran one of the most successful 3D printing Kickstarter campaigns, with 5,000 pre-orders. Then technology limits made it hard to fulfill them fast enough.",
      ],
      human: [
        "The people involved: customers from high-performance athletes to nurses and doctors who spend long hours on their feet, plus the engineers and assembly line team who had to deliver for them.",
        "The company needed a strong team behind the product, not only a good idea.",
      ],
      tech: {
        heading: "The AI side",
        body: [
          "A mobile app lets users scan their feet and creates a highly accurate 3D model.",
          "AI models drive the fit engine.",
          "3D printing turns each scan into a custom orthotic with 0.2mm accuracy.",
          "Wiivv also filed patents, including one for electronic sensors that analyze foot movement and gait.",
        ],
      },
      together: [
        "Scan, fit, print and ship became one pipeline. Engineers refined the AI models, and the assembly line operations were integrated with the technology.",
        "The technology made each product custom. The team made it possible to deliver at volume.",
      ],
      results: [
        {
          title: "Pre-orders delivered",
          body: "Delivered the initial pre-orders and got past the technology hurdle.",
        },
        {
          title: "Product kept improving",
          body: "Launched new product versions that pushed orthotic customization further.",
        },
        {
          title: "Backed by studies",
          body: "Empirical studies validated the orthotics for pain reduction and performance.",
        },
        {
          title: "Customer growth",
          body: "Won a significant customer base, about 100,000 customers.",
        },
        {
          title: "Bayer partnership",
          body: "Attracted Bayer, leading to a licensing agreement and rebranding under the Dr. Scholl’s label. Valuation reached about $60M in 2 years.",
        },
      ],
      did: [
        "Quickly hired a strong engineering team.",
        "Overhauled the cloud infrastructure.",
        "Refined the AI models behind the fit engine.",
        "Integrated the assembly line with the technology for a smooth, scalable pipeline from scan to shipped product.",
      ],
      budget: "$2.5 million",
      timeline:
        "15 months of technology development, team growth and product work.",
      quotes: [
        {
          quote:
            "High integrity, incredible resourcefulness, and battle-tested experience are three qualities that TetraNoodle brings to any project or team.",
          name: "Shamil Hargovan",
          role: "CEO, Wiivv",
        },
        {
          quote:
            "TetraNoodle quickly hired a strong team, launched the platform, and scaled it very effectively.",
          name: "Louis-Victor Jadavji",
          role: "Cofounder, Wiivv",
        },
      ],
      note: TECH_NOTE,
    },
  },
  {
    client: "Desire2Learn",
    slug: "desire2learn",
    kind: "Technology project",
    title: "Desire2Learn: helping students pick the courses they finish",
    outcome:
      "An AI course recommender serving millions. Students using it take 20% more courses toward their degree.",
    detail: {
      summary:
        "D2L turned the Degree Compass idea into an AI system that serves millions of students. Students using it take 20% more courses toward their degree.",
      stats: [
        { value: "20%", label: "More courses taken toward a degree" },
        { value: "100,000+", label: "Customers, millions of users" },
        { value: "1 year", label: "From idea to deployed system" },
      ],
      situation: [
        "School dropout is estimated to cost the US economy about $459B in lost revenue, and 30% of university students drop out. Course selection was largely blind: students picked courses without much sense of which ones fit their aptitude or interests.",
        "D2L, a global leader in educational technology, had partnered with Austin Peay State University on a patented technology called Degree Compass. What it did not have was a way to turn that idea into a product that could scale to millions of students.",
      ],
      human: [
        "The people involved: university students at risk of dropping out, and the institutions responsible for their outcomes.",
        "The goal was to help students make a better first choice, so institutions are not left managing dropout after the fact.",
      ],
      tech: {
        heading: "The AI side",
        body: [
          "An AI-based system evaluates each student’s aptitude and interests and recommends courses they are more likely to complete.",
          "Recommendations are built to increase the odds of a student finishing their degree, not just filling a schedule.",
        ],
      },
      together: [
        "The system recommends. Students and institutions still make the choices.",
        "It was built on data from the Austin Peay partnership, then rolled out well beyond the original pilot group.",
      ],
      results: [
        {
          title: "More courses completed",
          body: "Students using Degree Compass take 20% more courses toward their degree.",
        },
        {
          title: "Dropout down",
          body: "Dropout rates declined dramatically within the first year of use.",
        },
        {
          title: "National attention",
          body: "Publicly recognized by President Barack Obama and the Bill & Melinda Gates Foundation.",
        },
        {
          title: "Scale",
          body: "Now supporting a platform with 100,000+ customers and millions of users.",
        },
      ],
      did: [
        "Built on D2L’s partnership with Austin Peay State University and the patented Degree Compass technology.",
        "Developed the AI-based course selection system within 6 months.",
        "Deployed it to serve millions of students globally.",
      ],
      budget: "~$1M+",
      timeline: "1 year, from initial analysis to deployment.",
      quotes: [
        {
          quote:
            "TetraNoodle brought a very pragmatic, collaborative attitude to the work.",
          name: "Stephen Michaud",
          role: "Senior Manager, Learning Applications, Integrations, and Analytics, The University of British Columbia",
        },
        {
          quote:
            "TetraNoodle is used to designing and maintaining mission critical implementations.",
          name: "Simon Ruddell",
          role: "Senior Project Manager, Coast Capital Savings",
        },
      ],
      note: TECH_NOTE,
    },
  },
  {
    client: "IBM",
    slug: "ibm",
    logo: { src: "/logos/ibm.png", alt: "IBM" },
    kind: "Data-led project",
    title: "IBM: a 10x jump in enrollments, led by people and data",
    outcome:
      "Audience data and sentiment analysis shaped a live event. Monthly enrollments rose 10x in 6 weeks.",
    detail: {
      summary:
        "During the pandemic, enrollments in IBM’s technical education programs were falling. Audience data and sentiment analysis shaped a live event, The Human Code. Monthly enrollments rose 10x in 6 weeks.",
      stats: [
        { value: "10x", label: "Increase in monthly enrollments" },
        { value: "100M+", label: "Fan reach through the event’s celebrity partner" },
        { value: "6 weeks", label: "Project duration" },
      ],
      situation: [
        "IBM offers world-class technical education to young professionals. At the height of the pandemic and lockdowns, enrollments were declining across ed-tech, and IBM needed a solution fast.",
        "The audience, mainly millennials, was tired and isolated, and a conventional enrollment push would not have cut through.",
      ],
      human: [
        "The people involved: young professionals around the world, and the artists brought in to reach them: Bollywood celebrity Terence Lewis (100 million fans globally), a world-renowned painter, a gifted poet and a famous musician.",
        "The event put people and creativity first, with technology as one half of the story.",
      ],
      tech: {
        heading: "The data side",
        body: [
          "We analyzed IBM’s consumer data, then ran an in-depth market research project to collect and analyze the audience’s sentiment.",
          "That analysis shaped the event concept from the start, instead of guesswork.",
          "AI was not the core of this project. The work was people-led and data-driven.",
        ],
      },
      together: [
        "Data decided what would land. People made it happen.",
        "The result was an immersive event, The Human Code, that merged celebrity artists with computer science, two disciplines that had not shared a stage before.",
      ],
      results: [
        {
          title: "Went viral",
          body: "The event was a huge success and went viral.",
        },
        {
          title: "10x enrollments",
          body: "IBM ended up with a 10x increase in monthly enrollments in its programs.",
        },
        {
          title: "New awareness",
          body: "New brand awareness built specifically among millennials.",
        },
      ],
      did: [
        "Analyzed IBM’s consumer data and ran the market research.",
        "Helped IBM design the immersive event, The Human Code.",
        "Brought in the celebrity and creative partners.",
      ],
      budget: "~$50K",
      timeline: "6 weeks",
      quotes: [
        {
          quote: "TetraNoodle blew us away. Kudos!",
          name: "Melissa Sassi",
          role: "Chief Penguin, IBM",
        },
        {
          quote:
            "TetraNoodle really is genuine and cares about what they are putting out there. Their intentions are noble.",
          name: "Terence Lewis",
          role: "Award-winning Bollywood choreographer",
        },
      ],
      note: "Data-led project. Delivered by TetraNoodle. People-led and data-driven. This was not an AI Merge engagement.",
    },
  },
  {
    client: "T-Mobile",
    slug: "tmobile",
    logo: { src: "/logos/tmobile.png", alt: "T-Mobile" },
    kind: "AI workshop",
    title: "T-Mobile: leaders using AI as a co-pilot",
    outcome:
      "A Leadership Summit workshop on using AI for storytelling and communication, with leaders’ own judgment in charge.",
    detail: {
      summary:
        "At a Leadership Summit workshop, T-Mobile’s senior leaders learned to use AI for storytelling and communication, with their own judgment in charge.",
      stats: [
        { value: "Senior leaders", label: "Audience" },
        { value: "Leadership Summit", label: "Format: workshop" },
        { value: "AI as co-pilot", label: "How leaders left using it" },
      ],
      situation: [
        "T-Mobile’s leadership wanted to use AI to improve empathy, storytelling and communication across the leadership team.",
        "Leaders needed tools they could use right away, not a lecture on AI, and the work had to land within a single summit.",
      ],
      human: [
        "The people involved: T-Mobile senior leaders attending the Leadership Summit.",
        "We worked on humanization, how AI tools can help people connect on a deeper level, using the hero’s journey to build compelling narratives. Socratic questioning gave leaders a way to think for themselves, not hand their thinking over.",
      ],
      tech: {
        heading: "The AI side",
        body: [
          "Content writing tools and generative AI, including Plato Ninja and Midjourney, for building narratives.",
          "Prompts written for leadership-level communication, not generic use.",
          "Neural network and mirroring principles to make dialogue more effective.",
        ],
      },
      together: [
        "Leaders stayed the captain of their own ship. AI was their co-pilot, not a replacement for their judgment.",
      ],
      results: [
        {
          title: "Deeper connection",
          body: "Leaders left with tools for genuine, humanized communication.",
        },
        {
          title: "Leadership confidence",
          body: "Leaders were equipped to use AI as a co-pilot and stay in charge of their message.",
        },
        {
          title: "Built to carry on",
          body: "Tools and frameworks designed to continue into day-to-day team leadership after the summit.",
        },
      ],
      did: [
        "Designed and ran the workshop.",
        "Built the humanization framework, the questioning approach and the leadership prompts.",
      ],
      budget: "Not stated",
      timeline: "Not stated",
      quotes: [
        {
          quote:
            "It was a tremendous privilege to have Manuj Aggarwal. AI is the future and he equipped us with not only knowledge, but also with powerful tools so that we can be the captain of our ship. We are now using AI as our co-pilot to drive productive and maximize our influence as leaders. Thank you and bravo to you and your team.",
          name: "Edwige A. Robinson",
          role: "Senior VP, T-Mobile",
        },
      ],
      note: "AI workshop. Delivered by TetraNoodle for T-Mobile’s Leadership Summit. This was a workshop, not an AI Merge engagement.",
    },
  },
  {
    client: "MineHub",
    title: "A blockchain odyssey for the supply chain.",
    outcome: "Reinventing how the mining industry moves material and trust.",
  },
  {
    client: "Pearson",
    logo: { src: "/logos/pearson.png", alt: "Pearson" },
    title: "Virtual AI employees at scale.",
    outcome: "AI workers that extend the team without growing headcount.",
  },
];

export const DETAILED_STUDIES = CASE_STUDIES.filter(
  (c): c is CaseStudy & { slug: string; detail: CaseStudyDetail } =>
    Boolean(c.slug && c.detail)
);

export function getCaseStudy(slug: string) {
  return DETAILED_STUDIES.find((c) => c.slug === slug);
}

/* ────────────────────────────────────────────────────────────────
   Track 01 · AI Merge Protocol: individual stories, told in the
   participants' own words. The quotes are sourced; the Before/Now lines
   were drafted from those quotes and must be confirmed by the content
   team. They stay hidden until BEFORE_NOW_APPROVED is flipped to true.
   ──────────────────────────────────────────────────────────────── */
export const BEFORE_NOW_APPROVED = false;

export type ProtocolStory = {
  name: string;
  role: string;
  quote: string;
  before: string;
  now: string;
  /** Real portrait; stories without one show initials. */
  photo?: string;
};

export const PROTOCOL_STORIES: ProtocolStory[] = [
  {
    name: "Nick H.",
    role: "Video producer",
    quote: "The stress part of my brain that has gone silent",
    before:
      "Stress ran underneath every project. Even when the work was going well, the pressure never switched off.",
    now: "Creative work without the constant background alarm.",
  },
  {
    name: "Brent M.",
    role: "Trader",
    quote: "Totally calm during trading now. Fewer trades but higher quality",
    before:
      "Every market move felt like something to react to. Activity felt safer than stillness.",
    now: "Fewer, better trades, made from calm instead of pressure.",
  },
  {
    name: "Michelle J.",
    role: "Business advisor",
    quote: "40% less noise in my day",
    before:
      "Her days were full of noise that looked like work. Clarity had to be fought for.",
    now: "Room in the day for the decisions that matter.",
  },
  {
    name: "Kate O.",
    role: "Protocol participant",
    quote: "My body responds as if what it hears is already true",
    before:
      "New beliefs made sense in her head but never reached her body. The old story kept the final say.",
    now: "New beliefs land physically, not just intellectually.",
  },
  {
    name: "Dorota H.",
    role: "Clinical counsellor",
    photo: "/people/Dorota.png",
    quote: "The transformation taking place gently",
    before:
      "She guided others through change but expected her own to be hard and forced. Growth meant effort.",
    now: "Change that unfolds without a fight.",
  },
];

/* ────────────────────────────────────────────────────────────────
   Results (formerly Case Studies): single source of truth for the
   /results index cards and the long-form /results/[slug] pages.
   Long-form copy follows the template: stat bar → Introduction →
   Genesis → Challenge → Strategic Intervention → Execution →
   Results → stat box → Financials → Conclusion → Testimonials.
   ──────────────────────────────────────────────────────────────── */

export type Stat = { value: string; label: string };
export type Block = { title: string; body: string };
export type Quote = { quote: string; name: string; role: string };

export type CaseStudyDetail = {
  /** Brands shown in the top stat bar. */
  partners: string[];
  /** Top stat bar. Omitted when the source supplied no numbers. */
  heroStats?: Stat[];
  intro: string;
  genesis: { ambition: string; target: string };
  challenge: { blocks: Block[]; belief: string };
  intervention: Block[];
  execution: Block[];
  results: Block[];
  /** Stat box beside the results. Omitted → the pull-quote stands in. */
  statBox?: Stat[];
  /** Shown in place of missing stats (T-Mobile). */
  pullQuote?: Quote;
  financials?: { budget: string; timeline: string };
  conclusion: string[];
  testimonials: Quote[];
};

export type CaseStudy = {
  client: string;
  /** Present only for studies with a long-form page. */
  slug?: string;
  logo?: { src: string; alt: string };
  title: string;
  outcome: string;
  detail?: CaseStudyDetail;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Wiivv",
    slug: "wiivv",
    title: "A trailblazing journey in custom orthotics.",
    outcome: "AI-driven custom-fit manufacturing at consumer scale.",
    detail: {
      partners: ["Wiivv", "Dr. Scholl’s", "Bayer"],
      heroStats: [
        { value: "No. 1", label: "3D printed orthotic on the market" },
        { value: "100,000", label: "Customers in 9 months" },
        { value: "3", label: "Patents granted" },
      ],
      intro:
        "A visionary enterprise set to revolutionize the orthotic industry with bespoke solutions, built on a belief most of the industry hadn’t questioned: that “custom” and “at scale” couldn’t coexist.",
      genesis: {
        ambition:
          "Wiivv, with a mission to disrupt the traditional orthotic market, identified a critical gap: the lack of personalized orthotic solutions catering to individual anatomical differences.",
        target:
          "A diverse demographic ranging from high-performance athletes to professionals like nurses and doctors who endure prolonged periods on their feet.",
      },
      challenge: {
        blocks: [
          {
            title: "Orthotic industry’s status quo",
            body: "The market was saturated with generic, one-size-fits-all orthotics, leading to discomfort and suboptimal support.",
          },
          {
            title: "Technological barrier",
            body: "Despite raising $5 million and generating a buzz with one of the most successful 3D printing Kickstarter campaigns, Wiivv faced a stumbling block: the urgency to fulfill burgeoning pre-orders due to technological limitations.",
          },
        ],
        belief:
          "The belief underneath the barrier: that scaling custom manufacturing meant choosing between speed and precision. It doesn’t have to.",
      },
      intervention: [
        {
          title: "Kickstarter Success",
          body: "Garnered 5,000 pre-orders, setting the stage for a groundbreaking market entry.",
        },
        {
          title: "Technological Innovations",
          body: "Hired a brilliant team of engineers. Overhauled the cloud infrastructure. Refined the AI models driving the fit engine.",
        },
        {
          title: "Our Comprehensive Overhaul",
          body: "Seamlessly integrated the assembly line operations with the technological advancements for a smooth, scalable pipeline from scan to shipped product.",
        },
      ],
      execution: [
        {
          title: "Precision-driven mobile app",
          body: "Developed a cutting-edge app enabling users to scan their feet with remarkable precision, creating highly accurate 3D models.",
        },
        {
          title: "Custom orthotic fabrication",
          body: "Advanced 3D printing technology transformed these scans into tailor-made orthotics with 0.2mm accuracy.",
        },
        {
          title: "Intellectual leap",
          body: "Filed for pioneering patents, including one for integrating electronic sensors to analyze foot movement and gait, offering users deeper health insights.",
        },
      ],
      results: [
        {
          title: "Pre-Order Triumph",
          body: "Effortlessly delivered the initial pre-orders, overcoming the initial technology hurdle.",
        },
        {
          title: "Continual Product Evolution",
          body: "Launched new product versions, constantly pushing the boundaries of orthotic customization.",
        },
        {
          title: "Scientific Endorsement",
          body: "Empirical studies validated the effectiveness of these custom orthotics in pain mitigation and performance enhancement.",
        },
        {
          title: "Expansive Customer Acquisition",
          body: "Captivated a significant customer base, marking a major milestone in customer reach.",
        },
        {
          title: "Strategic Alliance",
          body: "Attracted Bayer, a global powerhouse, leading to a lucrative licensing agreement and rebranding under the prestigious Dr. Scholl’s label.",
        },
      ],
      statBox: [
        { value: "5,000", label: "Pre-orders within a 9-month window" },
        { value: "~$60M", label: "Valuation achieved in 2 years" },
        { value: "100,000", label: "Customers in 12 months" },
      ],
      financials: {
        budget: "$2.5 million invested in this transformative project.",
        timeline:
          "An intense 15-month period of technological development, team expansion, and strategic innovations.",
      },
      conclusion: [
        "Wiivv’s journey stands as proof of what changes when a company stops operating from an inherited belief about what’s possible and starts building from what’s actually true about its own capability. Their belief ceiling lifted, from “custom or scale, pick one” to both, at once, and everything downstream changed: the product, the partnerships, the company’s place in its own industry.",
        "Our collaboration didn’t just resolve a technological challenge. It cleared the belief that was constraining the solution, then built the capacity to act from the new one, culminating in a prestigious partnership with a global industry titan.",
      ],
      testimonials: [
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
    },
  },
  {
    client: "Desire2Learn",
    slug: "desire2learn",
    title: "Degree Compass: smarter course selection.",
    outcome: "A recommendation engine that lifts student success.",
    detail: {
      partners: [
        "Desire2Learn",
        "Austin Peay State University",
        "Bill & Melinda Gates Foundation",
      ],
      heroStats: [
        { value: "100,000+", label: "Customers, millions of users" },
        { value: "20%", label: "More courses completed toward a degree" },
        { value: "1 year", label: "From idea to deployed system" },
      ],
      intro:
        "A global leader in educational technology, built on a belief most of higher ed hadn’t questioned: that dropout was a motivation problem, not a data problem.",
      genesis: {
        ambition:
          "It is estimated that school drop-out costs the US economy about $459B in lost revenue. D2L set out to address this directly (30% of students drop out in universities) by helping institutions meet their graduation goals.",
        target:
          "University students at risk of dropping out, and the higher-education institutions responsible for their outcomes.",
      },
      challenge: {
        blocks: [
          {
            title: "Ed-tech’s status quo",
            body: "Course selection was largely blind: students picked courses without much sense of which ones actually fit their aptitude or interests, and dropout stayed high as a result.",
          },
          {
            title: "Turning an idea into a product",
            body: "D2L had already partnered with Austin Peay State University on patented technology called Degree Compass. What they didn’t have was a way to turn that idea into a real product that could scale and serve millions of students globally.",
          },
        ],
        belief:
          "The belief underneath the barrier: that dropout was something to manage after the fact, not something a better first course choice could prevent.",
      },
      intervention: [
        {
          title: "Data Partnership",
          body: "Built on D2L’s existing partnership with Austin Peay State University and the patented Degree Compass technology.",
        },
        {
          title: "AI Model Build",
          body: "Within 6 months, developed an AI-based system that helps students pick suitable courses based on their aptitude and interests.",
        },
        {
          title: "Scaled Rollout",
          body: "Deployed the system to serve millions of students globally, not just the original pilot population.",
        },
      ],
      execution: [
        {
          title: "Aptitude matching engine",
          body: "AI evaluates each student’s aptitude and interests to recommend courses they’re more likely to complete.",
        },
        {
          title: "Predictive course selection",
          body: "Recommendations are built to increase the odds of a student finishing their degree, not just filling a schedule.",
        },
        {
          title: "National recognition",
          body: "The program’s success drew mentions from President Barack Obama and the Bill & Melinda Gates Foundation.",
        },
      ],
      results: [
        {
          title: "Course Load Increase",
          body: "Students using Degree Compass take 20% more courses toward their degree.",
        },
        {
          title: "Dropout Decline",
          body: "Dropout rates declined dramatically within the first year of use.",
        },
        {
          title: "National Spotlight",
          body: "Recognized publicly by President Obama and the Bill & Melinda Gates Foundation.",
        },
        {
          title: "Scale Achieved",
          body: "Now supporting a platform with 100,000+ customers and millions of users.",
        },
      ],
      statBox: [
        { value: "20%", label: "Increase in enrollments" },
        { value: "1 year", label: "Project duration" },
        { value: "~$1M+", label: "Invested" },
      ],
      financials: {
        budget: "~$1M+",
        timeline: "1 year, from initial analysis to deployment.",
      },
      conclusion: [
        "Desire2Learn’s story is what happens when an institution stops treating dropout as something to react to and starts treating it as something a better first match can prevent. The belief shifted, from “we manage dropout” to “we can predict and prevent it,” and the results followed: more courses completed, fewer students lost, and recognition reaching the White House and the Gates Foundation.",
      ],
      testimonials: [
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
    },
  },
  {
    client: "MineHub",
    title: "A blockchain odyssey for the supply chain.",
    outcome: "Reinventing how the mining industry moves material and trust.",
  },
  {
    client: "IBM",
    slug: "ibm",
    logo: { src: "/logos/ibm.png", alt: "IBM" },
    title: "Reimagining course enrollment with AI.",
    outcome:
      "A sentiment-led event that lifted monthly enrollments 10x in six weeks.",
    detail: {
      partners: ["IBM", "Terence Lewis Professional Training Institute"],
      heroStats: [
        { value: "10x", label: "Increase in monthly enrollments" },
        { value: "100M+", label: "Fan reach through the campaign’s celebrity partner" },
        { value: "6 weeks", label: "Project duration" },
      ],
      intro:
        "A name synonymous with technical education, challenged during the pandemic by a belief most of the industry had quietly accepted: that when the world shuts down, demand for learning shrinks with it.",
      genesis: {
        ambition:
          "IBM offers world-class technical education to young professionals. At the height of the global pandemic and lockdowns, enrollments were declining, and IBM needed solutions fast.",
        target:
          "Young professionals globally, particularly millennials: an audience that wouldn’t respond to a conventional enrollment push during a period of isolation and fatigue.",
      },
      challenge: {
        blocks: [
          {
            title: "Ed-tech’s status quo during COVID",
            body: "Enrollments were declining industry-wide. Isolation was reducing engagement everywhere, not just at IBM.",
          },
          {
            title: "Finding something that could cut through",
            body: "IBM needed a solution fast: one built on real audience insight, not guesswork, and compelling enough to break through pandemic-era fatigue.",
          },
        ],
        belief:
          "The belief underneath the barrier: that technical education had to look and sound technical to be taken seriously.",
      },
      intervention: [
        {
          title: "Data-Driven Research",
          body: "Analyzed IBM’s consumer data, then executed an in-depth market research project, collating and analyzing the data and audience’s sentiment.",
        },
        {
          title: "Immersive Event Design",
          body: "Based on that analysis, helped IBM create an immersive event called The Human Code.",
        },
        {
          title: "Celebrity & Creative Activation",
          body: "Brought in Bollywood celebrity Terence Lewis (100 million fans globally), a world-renowned painter, a gifted poet, and a famous musician.",
        },
      ],
      execution: [
        {
          title: "Sentiment-led strategy",
          body: "Audience data and sentiment analysis shaped the event concept from the ground up, rather than guessing at what would land.",
        },
        {
          title: "Art meets computer science",
          body: "Merged celebrity artists with computer science, combining disciplines that hadn’t shared a stage before.",
        },
        {
          title: "Global celebrity reach",
          body: "Terence Lewis’s 100-million-fan following carried the message well past IBM’s usual audience.",
        },
      ],
      results: [
        {
          title: "Viral Reach",
          body: "The event was a huge success, and it went viral.",
        },
        {
          title: "Enrollment Surge",
          body: "IBM ended up with a 10x increase in the number of monthly enrollments in their programs.",
        },
        {
          title: "Brand Awareness",
          body: "New brand awareness built specifically among millennials.",
        },
      ],
      statBox: [
        { value: "10x", label: "Enrollments in 6 weeks" },
        { value: "6 weeks", label: "Project duration" },
        { value: "~$50K", label: "Invested" },
      ],
      financials: { budget: "~$50K", timeline: "6 weeks" },
      conclusion: [
        "IBM’s belief ceiling wasn’t about their content; it was about the format. The assumption that technical education has to look technical to be credible was the actual barrier, not the pandemic. Once that belief lifted, the event carried itself: a 10x jump in enrollments in six weeks, and a brand conversation with millennials that IBM hadn’t had before.",
      ],
      testimonials: [
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
    },
  },
  {
    client: "Pearson",
    logo: { src: "/logos/pearson.png", alt: "Pearson" },
    title: "Virtual AI employees at scale.",
    outcome: "AI workers that extend the team without growing headcount.",
  },
  {
    client: "T-Mobile",
    slug: "tmobile",
    logo: { src: "/logos/tmobile.png", alt: "T-Mobile" },
    title: "AI as a leadership co-pilot.",
    outcome:
      "A Leadership Summit workshop on humanized, AI-driven communication.",
    detail: {
      partners: ["T-Mobile"],
      intro:
        "Brought into a Leadership Summit workshop built on a belief worth naming: that AI is a technical tool, not a leadership one.",
      genesis: {
        ambition:
          "T-Mobile’s leadership wanted to unlock the transformative potential of AI to enhance empathy, storytelling, and effective communication across their leadership team.",
        target: "T-Mobile senior leaders and Leadership Summit attendees.",
      },
      challenge: {
        blocks: [
          {
            title: "Leadership’s status quo",
            body: "Leadership communication and storytelling hadn’t caught up to what AI made newly possible for connecting with people.",
          },
          {
            title: "Making it practical, not theoretical",
            body: "Leaders needed tools they could actually use, not a lecture on AI, and needed it to land within the scope of a single summit.",
          },
        ],
        belief:
          "The belief underneath the barrier: that AI belonged to the technical team, not to leadership.",
      },
      intervention: [
        {
          title: "Humanization Framework",
          body: "Explored the art of humanization (how AI tools can connect individuals on a deeper level) using the hero’s journey framework to help leaders craft compelling narratives.",
        },
        {
          title: "Socratic Questioning",
          body: "Used as a tool for self-empowerment and insightful leadership.",
        },
        {
          title: "AI-Driven Communication",
          body: "Embraced neural network and mirroring principles to supercharge the art of effective dialogue.",
        },
      ],
      execution: [
        {
          title: "Narrative crafting tools",
          body: "Content writing tools and generative AI solutions, including Plato Ninja and Midjourney, for building compelling narratives.",
        },
        {
          title: "Strategic communication prompts",
          body: "Prompts built specifically for leadership-level communication, not generic use.",
        },
        {
          title: "Team empowerment",
          body: "Leaders equipped to foster stronger connections and drive success within their teams and beyond.",
        },
      ],
      results: [
        {
          title: "Deeper Connection",
          body: "Leaders left with tools for genuine, humanized communication.",
        },
        {
          title: "Leadership Confidence",
          body: "Equipped to act as “captain of their own ship,” using AI as a co-pilot rather than a replacement for judgment.",
        },
        {
          title: "Org-Wide Ripple",
          body: "Tools and frameworks designed to extend beyond the summit into day-to-day team leadership.",
        },
      ],
      pullQuote: {
        quote:
          "We are now using AI as our co-pilot to drive productive and maximize our influence as leaders.",
        name: "Edwige A. Robinson",
        role: "Senior VP, T-Mobile",
      },
      conclusion: [
        "For T-Mobile’s leadership, the belief ceiling wasn’t about capability; it was about ownership. AI stopped being “the technical team’s tool” and became something leaders could pick up themselves, to communicate, connect, and lead differently.",
      ],
      testimonials: [
        {
          quote:
            "It was a tremendous privilege to have Manuj Aggarwal. AI is the future and he equipped us with not only knowledge, but also with powerful tools so that we can be the captain of our ship. We are now using AI as our co-pilot to drive productive and maximize our influence as leaders. Thank you and bravo to you and your team.",
          name: "Edwige A. Robinson",
          role: "Senior VP, T-Mobile",
        },
      ],
    },
  },
  {
    client: "Titan",
    slug: "titan",
    title: "The AI workforce that paid for itself 5x over.",
    outcome: "Reports cut from 3–4 hours to 9 minutes, with 400–500% ROI.",
    detail: {
      partners: ["Titan Environment"],
      heroStats: [
        { value: "400–500%", label: "ROI on Phase 1 investment" },
        { value: "9 min", label: "New report turnaround (down from 3–4 hours)" },
        { value: "12 weeks", label: "Phase 1 duration" },
      ],
      intro:
        "North America’s fastest-growing end-to-end geosynthetics supplier, fabricator, and installer, built for 15+ years on a belief that was quietly capping its growth: that scale meant more headcount, not smarter systems.",
      genesis: {
        ambition:
          "For over 15 years, Titan has grown consistently as a global geosynthetics solutions leader operating from Canada and the United States. The ambition: keep growing without the technology holding the company back.",
        target:
          "Titan’s field inspectors, report writers, new hires, and the clients waiting on the reports they produce.",
      },
      challenge: {
        blocks: [
          {
            title: "Titan’s status quo",
            body: "After every site inspection, employees had to submit a detailed report of the findings, each one taking 3 to 4 hours to produce. Manual steps meant human error, which caused delays and customer dissatisfaction. Training a new employee on the process took several months.",
          },
          {
            title: "A bottleneck on growth",
            body: "Titan had been growing for 15+ years, but the technology hadn’t kept up, and this bottleneck was standing directly in the way of the next stage of growth.",
          },
        ],
        belief:
          "The belief underneath the barrier: that speed and accuracy were a trade-off, and that the only way to grow throughput was to grow headcount.",
      },
      intervention: [
        {
          title: "Body: Process Mapping & Automation",
          body: "Every action employees were taking was understood and converted into streamlined, automated processes using software robots (RPA).",
        },
        {
          title: "Mind: Decision Encoding",
          body: "Every decision employees were making (in the office, with the customer, in the field, entering data) was encoded into AI, so it could help employees make the right call.",
        },
        {
          title: "Soul: Employee Buy-In",
          body: "We dug into the behaviors and workflows of each employee and brought them into confidence that this technology was here to help, not replace them. Even with sponsorship from the executive team, this would not have worked without buy-in from every person on the team.",
        },
      ],
      execution: [
        {
          title: "Parallel AI system",
          body: "Rather than ripping out the legacy system all at once, a parallel AI-driven system ran alongside it, preserving institutional knowledge while adding accuracy and efficiency.",
        },
        {
          title: "Automated reporting",
          body: "RPA-driven, AI-assisted report generation replaced hours of manual work.",
        },
        {
          title: "New revenue stream",
          body: "The new speed made a rush report delivery service possible: a revenue stream that didn’t exist before.",
        },
      ],
      results: [
        {
          title: "Report Time Collapsed",
          body: "Reports that took 3–4 hours now take about 9 minutes, with higher accuracy.",
        },
        {
          title: "Training Time Collapsed",
          body: "New employees productive within a week instead of several months.",
        },
        {
          title: "Strong ROI",
          body: "400–500% return on the Phase 1 investment.",
        },
        {
          title: "New Revenue",
          body: "Rush report delivery launched as a new service offering.",
        },
      ],
      statBox: [
        { value: "400–500%", label: "ROI" },
        { value: "9 min", label: "New report time (from 3–4 hours)" },
        { value: "12 weeks", label: "Phase 1 duration" },
      ],
      financials: {
        budget: "~$50K (Phase 1)",
        timeline:
          "12 weeks (Phase 1). Phase 2, a full legacy system overhaul, is underway.",
      },
      conclusion: [
        "Titan’s ceiling wasn’t the market, and it wasn’t the team. It was a belief that had never been tested: that the only way to grow throughput was to grow headcount. Once that belief moved, a 3–4 hour report became a 9-minute one, a months-long onboarding became a week, and Titan found a new revenue stream it didn’t have before, without adding people.",
      ],
      testimonials: [],
    },
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

import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Backdrop from "../components/Backdrop";
import GlassCard from "../components/GlassCard";

export const metadata = { title: "Case Studies" };

/* ────────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────────── */
type CaseStudy = {
  client: string;
  logo?: { src: string; alt: string };
  title: string;
  outcome: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Wiivv",
    title: "A trailblazing journey in custom orthotics.",
    outcome: "AI-driven custom-fit manufacturing at consumer scale.",
  },
  {
    client: "Desire2Learn",
    title: "Degree Compass: smarter course selection.",
    outcome: "A recommendation engine that lifts student success.",
  },
  {
    client: "MineHub",
    title: "A blockchain odyssey for the supply chain.",
    outcome: "Reinventing how the mining industry moves material and trust.",
  },
  {
    client: "IBM",
    logo: { src: "/logos/ibm.png", alt: "IBM" },
    title: "Reimagining course enrollment with AI.",
    outcome: "Machine learning applied to IBM’s learning strategy.",
  },
  {
    client: "Pearson",
    logo: { src: "/logos/pearson.png", alt: "Pearson" },
    title: "Virtual AI employees at scale.",
    outcome: "AI workers that extend the team without growing headcount.",
  },
  {
    client: "T-Mobile",
    logo: { src: "/logos/tmobile.png", alt: "T-Mobile" },
    title: "Virtual AI employees in production.",
    outcome: "Automation that handles volume people shouldn’t have to.",
  },
  {
    client: "Titan",
    title: "The AI workforce that paid for itself 5x over.",
    outcome: "A workforce of agents returning 5x its cost.",
  },
];

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo?: string;
  monogram?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "TetraNoodle equipped us not just with knowledge but with powerful AI tools.",
    name: "Edwige Robinson",
    role: "SVP, T-Mobile",
    photo: "/people/edwige.jpeg",
  },
  {
    quote: "Leaders like Manuj make companies go from good to great.",
    name: "Khwaja Shaik",
    role: "CTO, IBM",
    photo: "/people/khwaja.jpeg",
  },
  {
    quote:
      "An hour with TetraNoodle gave me a deeper understanding and a fresh perspective on AI’s potential for our business.",
    name: "Neil Moore",
    role: "Founder, Simply Music",
    photo: "/people/neil.jpeg",
  },
  {
    quote:
      "Every now and then you meet someone who really cares. That person is Manuj.",
    name: "Steve Sims",
    role: "CEO, Sims Media",
    photo: "/people/steve.jpeg",
  },
  {
    quote:
      "Manuj is somebody who really is genuine and cares about what he’s putting out there.",
    name: "Terence Lewis",
    role: "Choreographer",
    photo: "/people/terence.jpeg",
  },
  {
    quote:
      "If only my clients had consulted with Manuj before they spent all that wasted time, energy, and money.",
    name: "Amir Nasr",
    role: "Founder, Assertive & Co.",
    photo: "/people/amir.jpeg",
  },
];

/* ────────────────────────────────────────────────────────────────
   Page composition
   ──────────────────────────────────────────────────────────────── */
export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Stories />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

/* ──────────────── HERO ──────────────── */
function Hero() {
  return (
    <section className="surface-canvas relative pt-[104px] lg:pt-[132px] pb-20 lg:pb-28 overflow-hidden">
      <Backdrop tone="light" parallax />

      <div className="field-content container-wide px-6 lg:px-12">
        <div className="max-w-[820px]">
          <Reveal as="p" className="t-eyebrow mb-5">
            Case studies
          </Reveal>
          <Reveal as="h1" delay={80} className="t-display balance mb-7">
            Real businesses,{" "}
            <span className="accent-text italic font-normal">real outcomes.</span>
          </Reveal>
          <Reveal as="p" delay={160} className="t-lead pretty mb-8 max-w-[56ch]">
            A look at what changes when AI is built around the operation instead
            of bolted on.
          </Reveal>
          <Reveal
            as="p"
            delay={240}
            className="font-mono text-[11px] tracking-[0.16em] uppercase text-[color:var(--color-body-muted)]"
          >
            10M+ lives impacted · $500M+ value produced for clients
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── CASE STUDY GRID ──────────────── */
function Stories() {
  return (
    <section className="surface-parchment section relative overflow-hidden">
      <Backdrop tone="light" />
      <div className="field-content container-wide">
        <div className="max-w-[640px] mb-12 lg:mb-16">
          <Reveal as="p" className="t-eyebrow mb-5">
            The work
          </Reveal>
          <Reveal as="h2" delay={80} className="t-display-md balance">
            Operations rebuilt{" "}
            <span className="accent-text italic font-normal">around the root.</span>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {CASE_STUDIES.map((c, i) => (
            <Reveal
              as="article"
              key={c.client}
              delay={i * 60}
              className="panel p-7 lg:p-8 flex flex-col"
            >
              <div className="h-8 flex items-center mb-6">
                {c.logo ? (
                  <Image
                    src={c.logo.src}
                    alt={c.logo.alt}
                    width={120}
                    height={32}
                    className="partner-logo h-6 w-auto"
                    style={{ width: "auto" }}
                  />
                ) : (
                  <p className="text-[18px] font-semibold accent-text">
                    {c.client}
                  </p>
                )}
              </div>

              <h3 className="text-[18px] font-semibold tracking-[-0.01em] leading-[1.3] mb-3">
                {c.title}
              </h3>
              <p className="t-body !text-[15px] flex-1">{c.outcome}</p>

              <Link
                href="#"
                className="link-cta mt-6 pt-5 border-t border-[color:var(--color-hairline-soft)]"
              >
                Read the story
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── TESTIMONIALS ──────────────── */
function Testimonials() {
  return (
    <section
      data-on-dark
      className="surface-ink section relative overflow-hidden"
    >
      <Backdrop tone="dark" />
      <div className="field-content container-wide">
        <div className="text-center max-w-[760px] mx-auto mb-12 lg:mb-16">
          <Reveal as="p" className="t-eyebrow mb-5">
            In their words
          </Reveal>
          <Reveal as="h2" delay={80} className="t-display-md balance">
            Leaders who&rsquo;ve{" "}
            <span className="accent-text italic font-normal">
              felt the difference.
            </span>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              delay={i * 60}
              className="panel p-7 lg:p-8 flex flex-col"
            >
              <blockquote className="text-[18px] leading-[1.5] tracking-[-0.012em] text-[color:var(--color-on-dark)] mb-7 flex-1">
                <span aria-hidden className="text-[color:var(--color-accent)] mr-1">
                  &ldquo;
                </span>
                {t.quote}
                <span aria-hidden className="text-[color:var(--color-accent)] ml-1">
                  &rdquo;
                </span>
              </blockquote>
              <figcaption className="pt-5 border-t border-[color:var(--color-hairline-dark)] flex items-center gap-3.5">
                {t.photo ? (
                  <span className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      sizes="44px"
                      className="object-cover object-center"
                    />
                  </span>
                ) : (
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-[color:var(--color-accent)] text-white font-semibold text-[15px] shrink-0">
                    {t.monogram}
                  </span>
                )}
                <span className="min-w-0">
                  <p className="text-[14px] font-semibold tracking-[-0.01em] text-[color:var(--color-on-dark)]">
                    {t.name}
                  </p>
                  <p className="text-[11px] font-mono tracking-[0.1em] uppercase text-[color:var(--color-on-dark-faint)] mt-1">
                    {t.role}
                  </p>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── CTA ──────────────── */
function CTA() {
  return (
    <section className="surface-parchment section relative overflow-hidden">
      <Backdrop tone="light" parallax />
      <div className="field-content container-tight">
        <GlassCard className="text-center px-6 sm:px-12 py-14 lg:py-20" interactive={false}>
          <Reveal as="p" className="t-eyebrow mb-5">
            What&rsquo;s next
          </Reveal>
          <Reveal as="h2" delay={80} className="t-display balance mb-7">
            Your story could be{" "}
            <span className="accent-text italic font-normal">next.</span>
          </Reveal>
          <Reveal as="p" delay={160} className="t-lead pretty max-w-[52ch] mx-auto mb-10">
            See where you stand, then build the operation that compounds from
            here.
          </Reveal>
          <Reveal as="div" delay={240} className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://aimerge.live"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Get your Unfair Advantage Score
            </a>
            <a href="mailto:info@tetranoodle.com" className="btn btn-glass">
              Talk to us
            </a>
          </Reveal>
        </GlassCard>
      </div>
    </section>
  );
}

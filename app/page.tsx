import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Partners from "./components/Partners";
import Editions from "./components/Editions";
import Footer from "./components/Footer";
import OrbitGraphic from "./components/OrbitGraphic";
import {
  Arrow,
  Blueprint,
  Burst,
  Circled,
  Sparkle,
  Squiggle,
  Underlined,
} from "./components/Doodles";
import { CONTACT_EMAIL, GOAL_URL } from "./lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const RESEARCH_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "AI Merge research"
)}`;

/* ────────────────────────────────────────────────────────────────
   Page composition
   ──────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Partners />
        <Start />
        <Delivery />
        <EditionsSection />
        <Experience />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

/* ──────────────── HERO ──────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-[112px] lg:pt-[136px] pb-14 lg:pb-20 px-5 sm:px-6 lg:px-8">
      <div className="field" aria-hidden="true">
        <div className="dot-grid w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] -right-[18vw] -top-[10vw]" />
      </div>

      <div className="field-content container-wide grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-10 items-center">
        <div>
          <Reveal as="p" className="t-eyebrow mb-7">
            TetraNoodle · Building software since 2000
          </Reveal>

          <Reveal as="h1" delay={60} className="t-display balance mb-7 relative">
            Get more done with AI that knows your business and{" "}
            <Underlined>keeps it private.</Underlined>
            <Sparkle className="hidden sm:block absolute -top-7 -left-9 w-7 text-[color:var(--color-accent)]" />
          </Reveal>

          <Reveal as="p" delay={120} className="text-[19px] font-semibold tracking-[-0.01em] mb-3">
            Personalized intelligence. Rigorous engineering.
          </Reveal>

          <Reveal as="p" delay={160} className="t-lead pretty mb-10 max-w-[50ch]">
            A private AI built around your data and the tools you already use,
            with AI agents that take on the work you choose. You approve every
            step.
          </Reveal>

          <Reveal as="div" delay={220} className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={GOAL_URL} className="btn btn-primary btn-lg">
              Tell us what you want to accomplish
            </a>
            <Link href="/process" className="link-cta">
              Explore how it works
            </Link>
          </Reveal>

          <Reveal as="div" delay={280} className="mt-10 pt-6 border-t border-[color:var(--color-hairline)] max-w-[540px] text-[14px] leading-[1.6] text-[color:var(--color-body-faint)]">
            <p>
              Refined for your goals. Connected to your knowledge.{" "}
              <Link href="/services" className="font-semibold text-[color:var(--color-ink)] underline decoration-[color:var(--color-lime-deep)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]">
                Privacy, security and human control.
              </Link>
            </p>
            <p className="mt-1">
              Powered by{" "}
              <a href="#editions" className="font-semibold text-[color:var(--color-accent)] hover:underline underline-offset-4">
                AI Merge
              </a>{" "}
              · Human-directed. Research-informed.
            </p>
          </Reveal>
        </div>

        <Reveal as="div" delay={200} className="relative">
          <OrbitGraphic />
          <Arrow
            className="hidden lg:block absolute -left-16 top-[8%] w-24 h-16 -scale-x-100 rotate-[200deg] text-[color:var(--color-body-faint)]"
            strokeWidth={2}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────── EXPAND · EQUIP · EVOLVE ──────────────── */
const STEPS = [
  {
    word: "Expand",
    rest: "your thinking",
    body: "Learn what AI can do for you. A four-week program to get clear on your goals and where AI actually helps.",
    href: "/process",
    art: <ExpandArt />,
  },
  {
    word: "Equip",
    rest: "yourself with the right AI",
    body: "A private AI built on your data, plus agents that do the work you choose. Start with ready-made agents, add custom ones later.",
    href: "/services",
    art: <EquipArt />,
  },
  {
    word: "Evolve",
    rest: "as AI does",
    body: "Review what the agents did, fix what’s off, add more. It gets better the longer you use it.",
    href: "/process",
    art: <EvolveArt />,
  },
];

function Start() {
  return (
    <section id="start" className="section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-14 lg:mb-20">
          <div>
            <Reveal as="p" className="t-eyebrow mb-6">
              A place to begin
            </Reveal>
            <Reveal as="h2" delay={60} className="t-display-md balance max-w-[16ch]">
              Start anywhere. <Circled>Three steps.</Circled>
            </Reveal>
          </div>
          <Reveal as="p" delay={120} className="t-body max-w-[34ch]">
            Available for one person, a team or a whole company.{" "}
            <a href="#editions" className="font-semibold text-[color:var(--color-ink)] underline underline-offset-4 decoration-[color:var(--color-hairline)] hover:decoration-[color:var(--color-accent)]">
              See the three sizes
            </a>
          </Reveal>
        </div>

        <div className="relative">
        <ol className="grid md:grid-cols-3 gap-5 lg:gap-6">

          {STEPS.map((s, i) => (
            <Reveal
              as="li"
              key={s.word}
              delay={i * 110}
              className="panel group flex flex-col p-3 list-none"
            >
              <div className="relative rounded-[calc(var(--radius-lg)-6px)] bg-[color:var(--color-parchment)] h-[220px] overflow-hidden grid place-items-center">
                <span className="absolute top-4 left-4 text-[12px] font-semibold tabular-nums text-[color:var(--color-body-faint)]">
                  0{i + 1} / 03
                </span>
                {s.art}
              </div>
              <div className="flex flex-col flex-1 px-4 pt-7 pb-5">
                <h3 className="mb-5">
                  <span className="block text-[44px] lg:text-[52px] leading-none font-semibold tracking-[-0.04em]">
                    {s.word}
                  </span>
                  <span className="block mt-2 text-[17px] font-medium text-[color:var(--color-accent)]">
                    {s.rest}
                  </span>
                </h3>
                <p className="t-body !text-[16px] pretty mb-8 flex-1">{s.body}</p>
                <Link
                  href={s.href}
                  className="link-cta self-start before:absolute before:inset-0 before:rounded-[inherit] before:content-['']"
                  style={{ position: "static" }}
                >
                  Explore {s.word}
                </Link>
              </div>
            </Reveal>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}

/* Line illustrations for the three steps. They draw in with the card,
   then keep a slow, quiet motion while on screen. */
function ExpandArt() {
  return (
    <svg viewBox="0 0 200 160" className="doodle w-[78%] h-auto text-[color:var(--color-ink)] transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105" strokeWidth={1.6} aria-hidden="true">
      <circle pathLength={1} cx="100" cy="80" r="16" />
      <circle pathLength={1} cx="100" cy="80" r="34" style={{ "--d": 150 } as CSSProperties} />
      <circle pathLength={1} cx="100" cy="80" r="56" style={{ "--d": 300, opacity: 0.5 } as CSSProperties} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
        const r = (a * Math.PI) / 180;
        return (
          <line
            key={a}
            pathLength={1}
            x1={100 + Math.cos(r) * 64}
            y1={80 + Math.sin(r) * 64}
            x2={100 + Math.cos(r) * 76}
            y2={80 + Math.sin(r) * 76}
            style={{ "--d": 450 + i * 40 } as CSSProperties}
          />
        );
      })}
      <circle className="fill" cx="100" cy="80" r="5" style={{ color: "var(--color-accent)" }} />
      <g className="origin-center [transform-box:view-box] animate-[spin_18s_linear_infinite]" style={{ transformOrigin: "100px 80px" }}>
        <circle className="fill" cx="134" cy="80" r="4.5" style={{ color: "var(--color-lime-deep)" }} />
      </g>
    </svg>
  );
}

function EquipArt() {
  const node = (x: number, y: number, d: number) => (
    <rect pathLength={1} x={x - 14} y={y - 14} width="28" height="28" rx="7" style={{ "--d": d } as CSSProperties} />
  );
  return (
    <svg viewBox="0 0 200 160" className="doodle w-[78%] h-auto text-[color:var(--color-ink)] transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105" strokeWidth={1.6} aria-hidden="true">
      <path pathLength={1} d="M100 80 L 44 36 M100 80 L 156 36 M100 80 L 44 124 M100 80 L 156 124" style={{ "--d": 300 } as CSSProperties} />
      {node(44, 36, 100)}
      {node(156, 36, 180)}
      {node(44, 124, 260)}
      {node(156, 124, 340)}
      <rect x="78" y="58" width="44" height="44" rx="12" className="fill" style={{ color: "var(--color-accent)" }} />
      <path d="M92 80 L 98 86 L 109 74" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="fill animate-pulse" cx="156" cy="36" r="4" style={{ color: "var(--color-lime-deep)" }} />
    </svg>
  );
}

function EvolveArt() {
  return (
    <svg viewBox="0 0 200 160" className="doodle w-[78%] h-auto text-[color:var(--color-ink)] transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105" strokeWidth={1.6} aria-hidden="true">
      <path pathLength={1} d="M24 136 L 184 136" style={{ opacity: 0.4 } as CSSProperties} />
      <path pathLength={1} d="M28 128 C 60 126, 70 108, 92 104 C 116 100, 118 74, 140 64 C 156 56, 164 40, 176 26" />
      <path pathLength={1} d="M163 26 L 177 24 L 178 39" style={{ "--d": 800 } as CSSProperties} />
      {[
        [56, 122],
        [92, 104],
        [140, 64],
      ].map(([x, y], i) => (
        <circle key={x} pathLength={1} cx={x} cy={y} r="6" style={{ "--d": 500 + i * 150 } as CSSProperties} />
      ))}
      <circle className="fill" cx="176" cy="26" r="5" style={{ color: "var(--color-accent)" }} />
      <path pathLength={1} d="M40 100 C 52 92, 60 96, 66 88" style={{ "--d": 900, opacity: 0.45 } as CSSProperties} />
    </svg>
  );
}

/* ──────────────── DELIVERY ──────────────── */
function Delivery() {
  const rows = [
    {
      title: "Ready-made foundations",
      body: "We start from what already works and reuse it where it fits.",
    },
    {
      title: "Custom AI built for you",
      body: "Specialized tools, products and customer experiences.",
    },
    {
      title: "Ongoing improvement",
      body: "We test, maintain and improve it with you.",
    },
  ];

  return (
    <section className="section surface-parchment">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <Reveal as="p" className="t-eyebrow mb-6">
              A complete path to delivery
            </Reveal>
            <Reveal as="h2" delay={60} className="t-display-md balance mb-8">
              Designed. Engineered. Deployed.{" "}
              <span className="accent-text">Built around your business.</span>
            </Reveal>
            <Reveal as="p" delay={120} className="t-lead pretty max-w-[46ch] mb-8">
              We set it up, connect it, test it and launch it, with support to
              keep improving. You direct the work.
            </Reveal>
            <Reveal as="div" delay={160}>
              <Link href="/services" className="link-cta">
                See the full delivery
              </Link>
            </Reveal>
          </div>

          <ol className="border-t border-[color:var(--color-ink)]">
            {rows.map((r, i) => (
              <Reveal
                as="li"
                key={r.title}
                delay={i * 90}
                className="group grid grid-cols-[56px_1fr] sm:grid-cols-[80px_1fr] gap-4 py-8 lg:py-10 border-b border-[color:var(--color-hairline)]"
              >
                <span className="text-[13px] font-semibold tabular-nums text-[color:var(--color-accent)] pt-2">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-[26px] lg:text-[30px] font-semibold tracking-[-0.025em] leading-[1.15] mb-2 transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1.5">
                    {r.title}
                  </h3>
                  <p className="t-body">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* The architect callout */}
        <Reveal
          as="div"
          className="mt-20 lg:mt-28 relative overflow-hidden rounded-[var(--radius-xl)] bg-[color:var(--color-sage)] grid md:grid-cols-[1fr_auto] gap-10 items-center p-8 sm:p-12 lg:p-16"
        >
          <div className="max-w-[620px] relative z-10">
            <h3 className="t-display-sm !text-[clamp(26px,3vw,40px)] balance mb-5">
              You wouldn&rsquo;t build a skyscraper without an architect.
            </h3>
            <p className="t-lead pretty mb-8">
              We design how your people, data and AI fit together, then build
              it.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/process" className="link-cta">
                See why the foundations matter
              </Link>
              <Link href="/services" className="link-cta">
                Data, intelligence and security
              </Link>
            </div>
          </div>
          <Blueprint className="w-[150px] sm:w-[190px] h-auto mx-auto md:mr-6 text-[color:var(--color-accent)]" />
          <Burst className="absolute right-[6%] bottom-[10%] w-10 h-10 text-[color:var(--color-ink)] opacity-50 hidden md:block" strokeWidth={2} />
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────── EDITIONS ──────────────── */
function EditionsSection() {
  return (
    <section id="editions" data-on-dark className="section surface-ink">
      <div className="field" aria-hidden="true">
        <div className="dot-grid w-[60vw] h-[60vw] -left-[20vw] -top-[20vw]" />
      </div>
      <div className="field-content container-wide">
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-12 lg:mb-14">
          <div>
            <Reveal as="p" className="t-eyebrow mb-6">
              One foundation. Three sizes.
            </Reveal>
            <Reveal as="h2" delay={60} className="t-display-md balance max-w-[18ch]">
              For one person, a team or{" "}
              <Underlined className="text-[color:var(--color-lime)]">a whole company.</Underlined>
            </Reveal>
          </div>
          <Reveal as="div" delay={120} className="hidden lg:block">
            <Sparkle className="w-10 text-[color:var(--color-lime)] float-y" />
          </Reveal>
        </div>
        <Reveal as="div" delay={160}>
          <Editions />
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────── EXPERIENCE ──────────────── */
function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-wide">
        <div className="max-w-[760px] mb-14 lg:mb-20">
          <Reveal as="p" className="t-eyebrow mb-6">
            Experience
          </Reveal>
          <Reveal as="h2" delay={60} className="t-display-md balance mb-8">
            What people experience after{" "}
            <span className="mark">four weeks of practice.</span>
          </Reveal>
          <Reveal as="p" delay={120} className="t-lead pretty max-w-[56ch]">
            <strong className="font-semibold text-[color:var(--color-ink)]">
              What people have noticed.
            </strong>{" "}
            At four-week check-ins, participants described less overthinking,
            pausing before reacting and taking clearer action.
          </Reveal>
          <Reveal as="div" delay={160} className="mt-6">
            <Link href="/case-studies#personal" className="link-cta">
              Read participant reports
            </Link>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[1.45fr_1fr] gap-5 lg:gap-6">
          <Reveal
            as="figure"
            className="surface-card p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-10"
          >
            <span aria-hidden className="text-[96px] leading-[0.6] font-semibold text-[color:var(--color-lime-deep)] select-none">
              &ldquo;
            </span>
            <blockquote className="text-[clamp(26px,2.8vw,38px)] leading-[1.18] font-semibold tracking-[-0.025em] balance">
              Less performance. More being. The business stress became{" "}
              <span className="accent-text">background noise</span> instead of
              foreground problem.
            </blockquote>
            <figcaption className="flex items-center gap-4">
              <span className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 ring-4 ring-[color:var(--color-parchment)]">
                <Image
                  src="/testimonials/mark-nazemi.png"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              <span className="text-[15px] leading-[1.4]">
                <span className="block font-semibold">Mark Nazemi, PhD</span>
                <span className="block text-[color:var(--color-body-faint)]">
                  Sensorium Co-Founder · Business leader
                </span>
              </span>
            </figcaption>
          </Reveal>

          <div className="grid gap-5 lg:gap-6">
            <Reveal
              as="figure"
              delay={100}
              className="relative rounded-[var(--radius-lg)] bg-[color:var(--color-lime)] p-8 sm:p-10 flex flex-col justify-between gap-8 overflow-hidden"
            >
              <blockquote className="text-[24px] leading-[1.25] font-semibold tracking-[-0.02em] balance relative z-10">
                &ldquo;My mind felt quieter within days. Less noise, more
                clarity in the morning.&rdquo;
              </blockquote>
              <figcaption className="text-[15px] relative z-10">
                <span className="font-semibold">Nick H.</span>
                <span className="text-[color:var(--color-body-muted)]">
                  {" "}
                  · Creative Director · Individual
                </span>
              </figcaption>
              <Squiggle className="absolute -right-4 top-6 w-32 h-7 text-[color:var(--color-ink)] opacity-25" strokeWidth={2} />
            </Reveal>

            <Reveal
              as="div"
              delay={180}
              className="rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] p-8 sm:p-10"
            >
              <p className="flex items-center gap-3 text-[18px] font-semibold tracking-[-0.01em] mb-3">
                <JournalIcon />
                Research-informed.
              </p>
              <p className="t-body !text-[16px] pretty mb-5">
                AI Merge research has been published in Mensa Research
                Journal. Publication and participant experience do not
                validate every implementation.
              </p>
              <a href={RESEARCH_URL} className="link-cta">
                Explore the research
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal
          as="div"
          delay={120}
          className="mt-10 pt-8 border-t border-[color:var(--color-hairline)] grid md:grid-cols-[auto_1fr] gap-x-10 gap-y-3"
        >
          <p className="t-caption italic">Individual results vary.</p>
          <p className="t-caption pretty max-w-[80ch]">
            Our human general intelligence framework helps people get more
            from their own judgment when working with AI. Technology experience
            and personal reports are distinct from measured business outcomes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function JournalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[color:var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z" />
      <path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3" />
      <path d="M9 7.5h6M9 11h4" />
    </svg>
  );
}

/* ──────────────── CTA ──────────────── */
function CTA() {
  return (
    <section className="px-[clamp(8px,1.2vw,16px)] pb-[clamp(8px,1.2vw,16px)]">
      <Reveal as="div" className="cta-card px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="field" aria-hidden="true">
          <span className="orbit-ring !inset-auto w-[520px] h-[520px] -right-40 -top-40 !border-white/15" />
          <span className="orbit-ring !inset-auto w-[360px] h-[360px] -right-20 -top-20 !border-white/15 r2" />
          <span className="orbit-ring !inset-auto w-[420px] h-[420px] -left-48 -bottom-56 !border-white/10" />
        </div>
        <div className="field-content container-wide grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
          <div>
            <p className="t-eyebrow mb-6">Start where you are</p>
            <h2 className="t-display balance relative">
              Tell us what you want to{" "}
              <Underlined className="text-[color:var(--color-lime)]">get done.</Underlined>
              <Sparkle className="absolute -top-6 right-[8%] w-8 text-[color:var(--color-lime)] hidden sm:block" />
            </h2>
          </div>
          <div>
            <p className="t-lead pretty mb-9 max-w-[38ch]">
              We will tell you if AI can help, and what it would take.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={GOAL_URL} className="btn btn-primary btn-lg">
                Tell us your goal
              </a>
              <Link href="/process" className="btn btn-outlined btn-lg">
                Explore how it works
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

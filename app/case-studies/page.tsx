import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { Arrow, Sparkle, Underlined } from "../components/Doodles";
import {
  BEFORE_NOW_APPROVED,
  CASE_STUDIES,
  PROTOCOL_STORIES,
  type CaseStudy,
} from "../lib/case-studies";
import { CONTACT_EMAIL, GOAL_CTA, GOAL_URL } from "../lib/site";

export const metadata = {
  title: "Case Studies",
  description:
    "Case studies from TetraNoodle: technology work with Titan, Wiivv, Desire2Learn, IBM and T-Mobile, and personal stories from the AI Merge Protocol.",
  alternates: { canonical: "/case-studies" },
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo: string;
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
  const [featured, ...rest] = CASE_STUDIES.filter((c) => c.detail);
  const upcoming = CASE_STUDIES.filter((c) => !c.detail);

  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <section id="enterprise" className="pb-24 lg:pb-36 px-5 sm:px-6 lg:px-8">
          <div className="container-wide">
            {featured && <Featured study={featured} />}
            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 mt-5 lg:mt-6">
              {rest.map((c, i) => (
                <StudyCard key={c.client} study={c} delay={(i % 2) * 80} />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 mt-5 lg:mt-6">
              {upcoming.map((c, i) => (
                <UpcomingCard key={c.client} study={c} delay={i * 80} />
              ))}
            </div>
          </div>
        </section>
        <PersonalStories />
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
    <section className="relative overflow-hidden pt-[124px] lg:pt-[164px] pb-14 lg:pb-20 px-5 sm:px-6 lg:px-8">
      <div className="field" aria-hidden="true">
        <div className="dot-grid w-[60vw] h-[60vw] -right-[16vw] -top-[18vw]" />
      </div>
      <div className="field-content container-wide">
        <Reveal as="p" className="t-eyebrow mb-7">
          Case studies
        </Reveal>
        <Reveal as="h1" delay={60} className="t-display balance mb-10 max-w-[17ch] relative">
          What changed, told by{" "}
          <Underlined>the people</Underlined> it changed for.
          <Sparkle className="hidden md:block absolute -right-4 top-0 w-8 text-[color:var(--color-accent)]" />
        </Reveal>
        <Reveal
          as="div"
          delay={120}
          className="flex flex-wrap items-end justify-between gap-x-12 gap-y-8"
        >
          <p className="t-lead pretty max-w-[54ch]">
            Technology projects we delivered with companies, and individuals
            who changed a pattern through AI Merge practice. Each story says
            plainly what kind of work it was.
          </p>
          <nav aria-label="On this page" className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#enterprise" className="link-cta">
              Company stories
            </a>
            <a href="#personal" className="link-cta">
              Personal stories
            </a>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────── FEATURED STUDY ──────────────── */
function KindTag({ kind }: { kind?: string }) {
  if (!kind) return null;
  return (
    <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas)] px-3 py-1 text-[12px] font-semibold text-[color:var(--color-body-muted)]">
      <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)]" />
      {kind}
    </span>
  );
}

function Featured({ study }: { study: CaseStudy }) {
  const stats = study.detail?.stats ?? [];
  return (
    <Reveal
      as="article"
      className="panel overflow-hidden grid lg:grid-cols-[1.25fr_1fr]"
    >
      <div className="p-7 sm:p-10 lg:p-14 flex flex-col">
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <KindTag kind={study.kind} />
          <span className="text-[13px] font-semibold text-[color:var(--color-body-faint)]">
            Featured story
          </span>
        </div>
        <h2 className="t-display-md balance mb-6 max-w-[18ch]">{study.title}</h2>
        <p className="t-body pretty mb-10 max-w-[52ch] flex-1">
          {study.detail?.summary}
        </p>
        <Link
          href={`/case-studies/${study.slug}`}
          className="link-cta self-start before:absolute before:inset-0 before:rounded-[inherit] before:content-[''] before:z-10"
          style={{ position: "static" }}
        >
          Read the {study.client} story
        </Link>
      </div>
      <dl className="cta-card !rounded-none p-7 sm:p-10 lg:p-14 flex flex-col justify-center gap-9">
        <Arrow className="absolute right-8 top-8 w-16 h-12 text-[color:var(--color-lime)] opacity-80" strokeWidth={2} />
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse relative">
            <dt className="text-[15px] text-white/80 mt-2 max-w-[28ch]">
              {s.label}
            </dt>
            <dd className="t-num text-[52px] lg:text-[64px] leading-none">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

/* ──────────────── STUDY CARDS ──────────────── */
function ClientMark({ study }: { study: CaseStudy }) {
  return (
    <div className="h-8 flex items-center">
      {study.logo ? (
        <Image
          src={study.logo.src}
          alt={study.logo.alt}
          width={120}
          height={32}
          className="partner-logo h-7 w-auto"
          style={{ width: "auto" }}
        />
      ) : (
        <p className="text-[17px] font-semibold tracking-[-0.01em]">{study.client}</p>
      )}
    </div>
  );
}

function StudyCard({ study, delay }: { study: CaseStudy; delay: number }) {
  const stat = study.detail?.stats[0];
  // Numbers headline the card; descriptor-only stats (T-Mobile) read as a phrase.
  const numeric = stat && /\d/.test(stat.value);
  return (
    <Reveal as="article" delay={delay} className="panel group p-7 lg:p-10 flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-12">
        <ClientMark study={study} />
        <KindTag kind={study.kind} />
      </div>
      {stat && (
        <div className="mb-10">
          <p
            className={`t-num leading-none mb-3 text-[color:var(--color-accent)] transition-transform duration-500 ease-[var(--ease-out)] origin-left group-hover:scale-[1.04] ${
              numeric ? "text-[64px] lg:text-[80px]" : "text-[36px] lg:text-[44px]"
            }`}
          >
            {stat.value}
          </p>
          <p className="t-caption max-w-[30ch]">{stat.label}</p>
        </div>
      )}
      <h3 className="text-[20px] font-semibold tracking-[-0.015em] leading-[1.3] mb-3 balance">
        {study.title}
      </h3>
      <p className="t-body !text-[16px] mb-8 flex-1 pretty">{study.outcome}</p>
      <Link
        href={`/case-studies/${study.slug}`}
        className="link-cta self-start before:absolute before:inset-0 before:rounded-[inherit] before:content-['']"
        style={{ position: "static" }}
      >
        Read the {study.client} story
      </Link>
    </Reveal>
  );
}

function UpcomingCard({ study, delay }: { study: CaseStudy; delay: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="p-7 lg:p-10 flex flex-col rounded-[var(--radius-lg)] border border-dashed border-[#c4c6ba]"
    >
      <div className="mb-8">
        <ClientMark study={study} />
      </div>
      <h3 className="text-[20px] font-semibold tracking-[-0.015em] leading-[1.3] mb-2">
        {study.title}
      </h3>
      <p className="t-body !text-[16px] mb-6 flex-1">{study.outcome}</p>
      <p className="t-caption">
        Full story coming soon.{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            `${study.client} case study`
          )}`}
          className="font-semibold underline underline-offset-4 text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)]"
        >
          Ask us about it
        </a>
      </p>
    </Reveal>
  );
}

/* ──────────────── PERSONAL STORIES (AI Merge Protocol) ──────────────── */
function PersonalStories() {
  return (
    <section id="personal" className="surface-parchment section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-12 lg:mb-16">
          <div className="max-w-[720px]">
            <Reveal as="p" className="t-eyebrow mb-6">
              Personal stories · AI Merge Protocol
            </Reveal>
            <Reveal as="h2" delay={60} className="t-display-md balance">
              When the pattern shifts,{" "}
              <span className="mark">in their own words.</span>
            </Reveal>
          </div>
          <Reveal as="p" delay={120} className="t-caption italic">
            Individual results vary.
          </Reveal>
        </div>

        <ul className="grid md:grid-cols-2 gap-x-16">
          {PROTOCOL_STORIES.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={(i % 2) * 80}
              className="border-t border-[color:var(--color-hairline)] py-10"
            >
              <figure>
                {BEFORE_NOW_APPROVED && (
                  <p className="t-body !text-[16px] mb-5">
                    <span className="block text-[14px] font-medium text-[color:var(--color-body-faint)] mb-1">
                      Before
                    </span>
                    {p.before}
                  </p>
                )}
                <blockquote className="font-semibold tracking-[-0.025em] text-[28px] sm:text-[34px] leading-[1.14] mb-6 balance">
                  &ldquo;{p.quote}&rdquo;
                </blockquote>
                {BEFORE_NOW_APPROVED && (
                  <p className="t-body !text-[16px] mb-6">
                    <span className="block text-[14px] font-medium text-[color:var(--color-body-faint)] mb-1">
                      Now
                    </span>
                    {p.now}
                  </p>
                )}
                <figcaption className="flex items-center gap-3 text-[15px]">
                  {p.photo ? (
                    <span className="relative rounded-full overflow-hidden shrink-0 w-10 h-10">
                      <Image
                        src={p.photo}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover object-[center_30%]"
                      />
                    </span>
                  ) : (
                    <span
                      aria-hidden
                      className="grid place-items-center w-10 h-10 rounded-full bg-[color:var(--color-lime)] text-[13px] font-semibold text-[color:var(--color-ink)] shrink-0"
                    >
                      {p.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  )}
                  <span>
                    <span className="font-semibold">{p.name}</span>
                    <span className="text-[color:var(--color-body-faint)]">
                      {" "}
                      · {p.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ──────────────── TESTIMONIALS ──────────────── */
function Testimonials() {
  return (
    <section data-on-dark className="surface-ink section mt-[clamp(8px,1.2vw,16px)]">
      <div className="field" aria-hidden="true">
        <div className="dot-grid w-[50vw] h-[50vw] -right-[14vw] -bottom-[20vw]" />
      </div>
      <div className="field-content container-wide">
        <div className="max-w-[720px] mb-12 lg:mb-16">
          <Reveal as="p" className="t-eyebrow mb-6">
            In their words
          </Reveal>
          <Reveal as="h2" delay={60} className="t-display-md balance">
            Leaders who&rsquo;ve{" "}
            <Underlined className="text-[color:var(--color-lime)]">felt the difference.</Underlined>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              delay={(i % 3) * 70}
              className="flex flex-col rounded-[var(--radius-lg)] bg-[color:var(--color-dark-2)] border border-white/[0.06] p-7 lg:p-8"
            >
              <blockquote className="font-semibold tracking-[-0.015em] text-[21px] leading-[1.35] mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3.5 pt-5 border-t border-[color:var(--color-hairline-dark)]">
                <span className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.photo}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <span className="text-[15px]">
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-[14px] text-[color:var(--color-on-dark-faint)]">
                    {t.role}
                  </span>
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
    <section className="section">
      <div className="container-tight text-center">
        <Reveal as="h2" className="t-display balance mb-7">
          Your story could be <span className="mark">next.</span>
        </Reveal>
        <Reveal as="p" delay={80} className="t-lead pretty max-w-[44ch] mx-auto mb-10">
          Tell us what you want to get done. We will tell you if AI can help,
          and what it would take.
        </Reveal>
        <Reveal
          as="div"
          delay={160}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
        >
          <a href={GOAL_URL} className="btn btn-primary btn-lg">
            {GOAL_CTA}
          </a>
          <Link href="/process" className="link-cta">
            Explore how it works
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

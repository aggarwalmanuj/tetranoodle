import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { Arrow, Sparkle, Underlined } from "../../components/Doodles";
import {
  DETAILED_STUDIES,
  getCaseStudy,
  type Quote,
} from "../../lib/case-studies";
import { GOAL_CTA, GOAL_URL } from "../../lib/site";

// Only the studies with long-form copy exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return DETAILED_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.client} · Case Study`,
    description: study.detail.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const d = study.detail;
  const index = DETAILED_STUDIES.findIndex((c) => c.slug === slug);
  const next = DETAILED_STUDIES[(index + 1) % DETAILED_STUDIES.length];
  const [lead, ...restTogether] = d.together;

  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        {/* ──────────────── HEADER ──────────────── */}
        <section className="relative overflow-hidden pt-[112px] lg:pt-[140px] pb-16 lg:pb-24 px-5 sm:px-6 lg:px-8">
          <div className="field" aria-hidden="true">
            <div className="dot-grid w-[56vw] h-[56vw] -right-[16vw] -top-[16vw]" />
          </div>
          <div className="field-content container-wide">
            <Reveal as="div" className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10">
              <Link href="/case-studies" className="back-link">
                All case studies
              </Link>
              <span aria-hidden className="text-[color:var(--color-hairline)]">/</span>
              <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[color:var(--color-hairline)] bg-[color:var(--color-pearl)] px-3 py-1 text-[12px] font-semibold text-[color:var(--color-body-muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)]" />
                {study.kind}
              </span>
            </Reveal>
            <Reveal as="h1" delay={60} className="t-display balance mb-8 max-w-[20ch]">
              {study.title}
            </Reveal>
            <Reveal as="p" delay={120} className="t-lead pretty max-w-[62ch]">
              {d.summary}
            </Reveal>

            <Reveal
              as="dl"
              delay={200}
              className="mt-14 lg:mt-20 grid sm:grid-cols-3 border-t border-[color:var(--color-ink)]"
            >
              {d.stats.map((s, i) => {
                const numeric = /\d/.test(s.value);
                return (
                  <div
                    key={s.label}
                    className={`flex flex-col-reverse justify-end pt-7 pb-6 sm:pr-8 border-b sm:border-b-0 border-[color:var(--color-hairline)] ${
                      i > 0 ? "sm:pl-8 sm:border-l" : ""
                    }`}
                  >
                    <dt className="t-caption mt-3 max-w-[26ch]">{s.label}</dt>
                    <dd
                      className={`t-num leading-[0.95] ${
                        numeric
                          ? "text-[clamp(48px,6vw,84px)]"
                          : "text-[clamp(28px,2.8vw,38px)] tracking-[-0.03em]"
                      } ${i === 0 ? "text-[color:var(--color-accent)]" : ""}`}
                    >
                      {s.value}
                    </dd>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </section>

        {/* ──────────────── SITUATION ──────────────── */}
        <section className="section surface-parchment">
          <div className="container-wide grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <Reveal as="p" className="t-eyebrow mb-6">
                The situation
              </Reveal>
              <Reveal as="h2" delay={60} className="t-display-md balance">
                What stood in the way.
              </Reveal>
            </div>
            <div>
              {d.situation.map((p, i) => (
                <Reveal
                  as="p"
                  key={i}
                  delay={i * 80}
                  className={
                    i === 0
                      ? "text-[clamp(21px,2vw,26px)] leading-[1.45] tracking-[-0.015em] font-medium mb-8 pretty"
                      : "t-body pretty mb-6"
                  }
                >
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── HUMAN + AI ──────────────── */}
        <section className="section">
          <div className="container-wide">
            <div className="max-w-[720px] mb-12 lg:mb-16">
              <Reveal as="p" className="t-eyebrow mb-6">
                Two sides of the work
              </Reveal>
              <Reveal as="h2" delay={60} className="t-display-md balance">
                The people, and{" "}
                <Underlined>the technology.</Underlined>
              </Reveal>
            </div>

            <div className="relative grid md:grid-cols-2 gap-5 lg:gap-6">
              <Reveal as="article" className="surface-card p-8 sm:p-10 lg:p-12">
                <SideIcon kind="human" />
                <h3 className="text-[26px] font-semibold tracking-[-0.025em] mb-5">
                  The human side
                </h3>
                {d.human.map((p, i) => (
                  <p key={i} className="t-body pretty mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </Reveal>

              {/* The join between the two halves */}
              <span
                aria-hidden
                className="hidden md:grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 place-items-center rounded-full bg-[color:var(--color-lime)] text-[26px] font-semibold text-[color:var(--color-ink)] ring-8 ring-[color:var(--color-canvas)]"
              >
                +
              </span>

              <Reveal
                as="article"
                delay={100}
                data-on-dark
                className="rounded-[var(--radius-lg)] bg-[color:var(--color-dark)] text-[color:var(--color-on-dark)] p-8 sm:p-10 lg:p-12"
              >
                <SideIcon kind="tech" />
                <h3 className="text-[26px] font-semibold tracking-[-0.025em] mb-5">
                  {d.tech.heading}
                </h3>
                <ul className="flex flex-col gap-4">
                  {d.tech.body.map((p, i) => (
                    <li key={i} className="grid grid-cols-[18px_1fr] gap-3 text-[16px] leading-[1.65] text-[color:var(--color-on-dark-muted)]">
                      <span aria-hidden className="mt-[9px] w-2 h-2 rounded-full bg-[color:var(--color-lime)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* How they worked together */}
            <Reveal
              as="div"
              className="mt-5 lg:mt-6 relative overflow-hidden rounded-[var(--radius-lg)] bg-[color:var(--color-sage)] p-8 sm:p-12 lg:p-16"
            >
              <p className="t-eyebrow mb-6">How they worked together</p>
              <p className="text-[clamp(24px,2.8vw,38px)] leading-[1.2] font-semibold tracking-[-0.025em] max-w-[30ch] balance">
                {lead}
              </p>
              {restTogether.map((p, i) => (
                <p key={i} className="t-lead pretty mt-6 max-w-[58ch]">
                  {p}
                </p>
              ))}
              <Sparkle className="absolute right-[6%] top-[14%] w-9 text-[color:var(--color-accent)] hidden sm:block" />
            </Reveal>
          </div>
        </section>

        {/* ──────────────── RESULTS ──────────────── */}
        <section data-on-dark className="section surface-ink">
          <div className="field" aria-hidden="true">
            <div className="dot-grid w-[50vw] h-[50vw] -left-[14vw] -bottom-[20vw]" />
          </div>
          <div className="field-content container-wide">
            <div className="max-w-[720px] mb-12 lg:mb-16">
              <Reveal as="p" className="t-eyebrow mb-6">
                Results
              </Reveal>
              <Reveal as="h2" delay={60} className="t-display-md balance">
                What changed.
              </Reveal>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {d.results.map((r, i) => (
                <Reveal
                  as="li"
                  key={r.title}
                  delay={(i % 3) * 80}
                  className="rounded-[var(--radius-lg)] bg-[color:var(--color-dark-2)] border border-white/[0.06] p-7 lg:p-8 flex flex-col"
                >
                  <span className="flex items-center justify-between mb-10">
                    <span className="text-[13px] font-semibold tabular-nums text-[color:var(--color-on-dark-faint)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <CheckIcon />
                  </span>
                  <h3 className="text-[22px] font-semibold tracking-[-0.02em] leading-[1.2] mb-3">
                    {r.title}
                  </h3>
                  <p className="t-body !text-[16px] pretty">{r.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ──────────────── WHAT WE DID ──────────────── */}
        <section className="section">
          <div className="container-wide grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">
            <div>
              <Reveal as="p" className="t-eyebrow mb-6">
                What TetraNoodle did
              </Reveal>
              <Reveal as="h2" delay={60} className="t-display-md balance mb-10">
                Our part of the work.
              </Reveal>
              <ul className="border-t border-[color:var(--color-hairline)]">
                {d.did.map((item, i) => (
                  <Reveal
                    as="li"
                    key={i}
                    delay={i * 60}
                    className="grid grid-cols-[44px_1fr] gap-3 py-5 border-b border-[color:var(--color-hairline)] text-[18px] leading-[1.5] tracking-[-0.01em]"
                  >
                    <span className="text-[13px] font-semibold tabular-nums text-[color:var(--color-accent)] pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal as="dl" delay={120} className="surface-card p-8 lg:p-10 lg:mt-[132px]">
              <div className="pb-6 mb-6 border-b border-[color:var(--color-hairline)]">
                <dt className="t-caption mb-2">Budget</dt>
                <dd className="text-[30px] font-semibold tracking-[-0.03em] leading-[1.1]">
                  {d.budget}
                </dd>
              </div>
              <div>
                <dt className="t-caption mb-2">Timeline</dt>
                <dd className="text-[18px] font-medium leading-[1.45] tracking-[-0.01em]">
                  {d.timeline}
                </dd>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ──────────────── QUOTES ──────────────── */}
        {d.quotes.length > 0 && (
          <section className="section surface-parchment">
            <div className="container-wide">
              <Reveal as="p" className="t-eyebrow mb-10 lg:mb-14">
                In their words
              </Reveal>
              <div className={`grid gap-12 lg:gap-16 ${d.quotes.length > 1 ? "lg:grid-cols-2" : ""}`}>
                {d.quotes.map((q, i) => (
                  <QuoteBlock key={q.name} quote={q} delay={i * 100} large={d.quotes.length === 1} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ──────────────── LABEL + NEXT ──────────────── */}
        <section className="section !pt-16 lg:!pt-20">
          <div className="container-wide">
            <Reveal
              as="p"
              className="flex items-start gap-3 rounded-[var(--radius-md)] border border-dashed border-[#c4c6ba] p-5 text-[14px] leading-[1.55] text-[color:var(--color-body-muted)] mb-16 lg:mb-20"
            >
              <InfoIcon />
              {d.note}
            </Reveal>

            <Reveal as="div" className="grid lg:grid-cols-[1.4fr_1fr] gap-5 lg:gap-6">
              <Link
                href={`/case-studies/${next.slug}`}
                className="panel group block p-8 sm:p-10 lg:p-12"
              >
                <span className="t-caption block mb-6">Next story</span>
                <span className="flex items-end justify-between gap-6">
                  <span className="t-display-sm balance max-w-[22ch]">{next.title}</span>
                  <span
                    aria-hidden
                    className="shrink-0 grid place-items-center w-14 h-14 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-canvas)] text-[22px] transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-[-8deg]"
                  >
                    ↗
                  </span>
                </span>
              </Link>

              <div className="cta-card !rounded-[var(--radius-lg)] p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
                <Arrow className="absolute right-6 top-6 w-16 h-12 text-[color:var(--color-lime)] opacity-80" strokeWidth={2} />
                <p className="text-[24px] font-semibold tracking-[-0.02em] leading-[1.25] max-w-[18ch] relative">
                  Tell us what you want to get done.
                </p>
                <a href={GOAL_URL} className="btn btn-primary self-start relative">
                  {GOAL_CTA}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ──────────────── Pieces ──────────────── */
function QuoteBlock({
  quote,
  delay,
  large,
}: {
  quote: Quote;
  delay: number;
  large: boolean;
}) {
  return (
    <Reveal as="figure" delay={delay} className="relative">
      <span aria-hidden className="block text-[88px] leading-[0.5] h-10 font-semibold text-[color:var(--color-accent)] select-none">
        &ldquo;
      </span>
      <blockquote
        className={`font-semibold tracking-[-0.025em] balance mb-8 ${
          large
            ? "text-[clamp(26px,3vw,42px)] leading-[1.2] max-w-[34ch]"
            : "text-[clamp(22px,2.2vw,30px)] leading-[1.25]"
        }`}
      >
        {quote.quote}
      </blockquote>
      <figcaption className="flex items-center gap-3 text-[15px]">
        <span
          aria-hidden
          className="grid place-items-center w-11 h-11 rounded-full bg-[color:var(--color-lime)] text-[14px] font-semibold shrink-0"
        >
          {quote.name
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")}
        </span>
        <span>
          <span className="block font-semibold">{quote.name}</span>
          <span className="block text-[color:var(--color-body-faint)] text-[14px] max-w-[52ch]">
            {quote.role}
          </span>
        </span>
      </figcaption>
    </Reveal>
  );
}

function SideIcon({ kind }: { kind: "human" | "tech" }) {
  const human = kind === "human";
  return (
    <span
      aria-hidden
      className={`grid place-items-center w-12 h-12 rounded-[var(--radius-sm)] mb-10 ${
        human
          ? "bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]"
          : "bg-white/[0.08] text-[color:var(--color-lime)]"
      }`}
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {human ? (
          <>
            <circle cx="9" cy="8" r="3.2" />
            <path d="M3 20c.8-3.6 3.2-5.6 6-5.6s5.2 2 6 5.6" />
            <path d="M16 4.6a3 3 0 0 1 0 6M18 14.8c1.4.8 2.4 2.5 2.8 5.2" />
          </>
        ) : (
          <>
            <rect x="5" y="5" width="14" height="14" rx="3" />
            <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
            <path d="M12 8.6c.3 2.2 1.1 3.1 3.4 3.4-2.3.3-3.1 1.2-3.4 3.4-.3-2.2-1.1-3.1-3.4-3.4 2.3-.3 3.1-1.2 3.4-3.4z" />
          </>
        )}
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <span aria-hidden className="check-icon grid place-items-center w-8 h-8 rounded-full">
      <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
      </svg>
    </span>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0 mt-px text-[color:var(--color-body-faint)]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="10" cy="10" r="8" />
      <path d="M10 9v5M10 6.2v.1" />
    </svg>
  );
}

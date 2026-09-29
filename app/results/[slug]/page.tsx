import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import Backdrop from "../../components/Backdrop";
import GlassCard from "../../components/GlassCard";
import {
  DETAILED_STUDIES,
  getCaseStudy,
  type Quote,
  type Stat,
} from "../../lib/case-studies";
import { SCORE_CTA, SCORE_URL } from "../../lib/site";

// Only the studies with long-form copy exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return DETAILED_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/results/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.client} · Results`,
    description: `${study.client}: ${study.detail.intro}`,
    alternates: { canonical: `/results/${study.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/results/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const d = study.detail;
  const index = DETAILED_STUDIES.findIndex((c) => c.slug === slug);
  const next = DETAILED_STUDIES[(index + 1) % DETAILED_STUDIES.length];

  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        {/* ──────────────── HERO + STAT BAR ──────────────── */}
        <section className="surface-canvas relative pt-[104px] lg:pt-[132px] pb-20 lg:pb-28 overflow-hidden">
          <Backdrop tone="light" parallax />
          <div className="field-content container-wide px-6 lg:px-12">
            <Reveal as="div" className="mb-8">
              <Link href="/results" className="back-link">
                All results
              </Link>
            </Reveal>
            <div className="max-w-[860px]">
              <Reveal as="p" delay={40} className="t-eyebrow mb-5">
                Case study · {study.client}
              </Reveal>
              <Reveal as="h1" delay={80} className="t-display-md balance mb-7">
                {study.title}
              </Reveal>
              <Reveal as="p" delay={160} className="t-lead pretty max-w-[60ch]">
                <span className="text-[color:var(--color-ink)] font-medium">
                  {study.client}
                </span>
                : {d.intro}
              </Reveal>
            </div>

            <Reveal
              as="div"
              delay={240}
              className="stat-bar mt-12 lg:mt-16 grid lg:grid-cols-[1fr_1.6fr] overflow-hidden rounded-[var(--radius-xl)]"
            >
              <div className="stat-bar-brands p-7 lg:p-9 flex flex-col items-start justify-center gap-3">
                <p className="t-eyebrow">
                  {d.partners.length > 1 ? "Partners" : "Client"}
                </p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {d.partners.map((p) => (
                    <li
                      key={p}
                      className="text-[18px] lg:text-[20px] font-semibold tracking-[-0.015em]"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div data-on-dark className="stat-bar-nums surface-ink p-7 lg:p-9">
                {d.heroStats ? (
                  <StatList stats={d.heroStats} />
                ) : d.pullQuote ? (
                  <PullQuote quote={d.pullQuote} />
                ) : null}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ──────────────── GENESIS ──────────────── */}
        <section className="surface-parchment section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide">
            <SectionHead eyebrow="The genesis" title="Where it started." />
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              <InfoCard label="Ambition" body={d.genesis.ambition} />
              <InfoCard label="Target group" body={d.genesis.target} delay={80} />
            </div>
          </div>
        </section>

        {/* ──────────────── CHALLENGE ──────────────── */}
        <section className="surface-canvas section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide">
            <SectionHead eyebrow="The challenge" title="What stood in the way." />
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-12 lg:mb-16">
              {d.challenge.blocks.map((b, i) => (
                <Reveal as="div" key={b.title} delay={i * 80}>
                  <h3 className="text-[20px] lg:text-[22px] font-semibold tracking-[-0.018em] leading-[1.25] mb-3">
                    {b.title}
                  </h3>
                  <p className="t-body pretty max-w-[56ch]">{b.body}</p>
                </Reveal>
              ))}
            </div>
            <Reveal as="blockquote" delay={160} className="belief-callout">
              <p className="text-[20px] sm:text-[24px] leading-[1.4] tracking-[-0.015em] font-medium max-w-[52ch]">
                {d.challenge.belief}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ──────────────── STRATEGIC INTERVENTION (dark) ──────────────── */}
        <section
          data-on-dark
          className="surface-ink section relative overflow-hidden"
        >
          <Backdrop tone="dark" />
          <div className="field-content container-wide">
            <SectionHead
              eyebrow="Our strategic intervention"
              title="Three moves, in order."
            />
            <ol className="grid md:grid-cols-3 gap-5 lg:gap-6">
              {d.intervention.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={i * 80}
                  className="panel p-7 lg:p-8 flex flex-col"
                >
                  <span className="step-no font-mono text-[32px] leading-none tracking-[0.02em] text-[color:var(--color-accent-sky)] tabular-nums mb-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[19px] lg:text-[20px] font-semibold tracking-[-0.015em] leading-[1.25] mb-3 text-[color:var(--color-on-dark)]">
                    {s.title}
                  </h3>
                  <p className="t-body !text-[16px]">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ──────────────── EXECUTION ──────────────── */}
        <section className="surface-parchment section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide">
            <SectionHead
              eyebrow="Execution & innovation"
              title="How it was built."
            />
            <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
              {d.execution.map((e, i) => (
                <InfoCard key={e.title} label={e.title} body={e.body} delay={i * 80} />
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── RESULTS + STAT BOX ──────────────── */}
        <section className="surface-canvas section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-20 items-start">
            <div>
              <SectionHead eyebrow="Results" title="What changed." />
              <ul className="flex flex-col">
                {d.results.map((r, i) => (
                  <Reveal
                    as="li"
                    key={r.title}
                    delay={i * 60}
                    className="result-row border-t border-[color:var(--color-hairline-soft)] last:border-b py-6 grid grid-cols-[28px_1fr] gap-4 items-start"
                  >
                    <CheckIcon />
                    <div>
                      <h3 className="text-[18px] lg:text-[19px] font-semibold tracking-[-0.015em] leading-[1.3] mb-1.5">
                        {r.title}
                      </h3>
                      <p className="t-body !text-[16px] max-w-[56ch]">{r.body}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal as="div" delay={120} className="lg:sticky lg:top-32">
              <div
                data-on-dark
                className="stat-box surface-ink rounded-[var(--radius-xl)] p-8 lg:p-10"
              >
                {d.statBox ? (
                  <>
                    <p className="t-eyebrow mb-8">By the numbers</p>
                    <StatList stats={d.statBox} stacked />
                  </>
                ) : d.pullQuote ? (
                  <>
                    <p className="t-eyebrow mb-8">In their words</p>
                    <PullQuote quote={d.pullQuote} />
                  </>
                ) : null}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ──────────────── FINANCIALS + CONCLUSION ──────────────── */}
        <section className="surface-parchment section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide">
            {d.financials && (
              <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-16 lg:mb-24">
                <InfoCard label="Budget" body={d.financials.budget} />
                <InfoCard label="Timeline" body={d.financials.timeline} delay={80} />
              </div>
            )}
            <div className="max-w-[820px]">
              <Reveal as="p" className="t-eyebrow mb-5">
                Conclusion
              </Reveal>
              {d.conclusion.map((para, i) => (
                <Reveal
                  as="p"
                  key={i}
                  delay={80 + i * 80}
                  className={`pretty ${
                    i === 0
                      ? "text-[21px] sm:text-[24px] leading-[1.45] tracking-[-0.015em] text-[color:var(--color-ink)] mb-6"
                      : "t-lead"
                  }`}
                >
                  {para}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── TESTIMONIALS (dark) ──────────────── */}
        {d.testimonials.length > 0 && (
          <section
            data-on-dark
            className="surface-ink section relative overflow-hidden"
          >
            <Backdrop tone="dark" />
            <div className="field-content container-wide">
              <SectionHead eyebrow="In their words" title="From the people who were there." />
              <div
                className={`grid gap-5 lg:gap-6 ${
                  d.testimonials.length > 1 ? "md:grid-cols-2" : "max-w-[860px]"
                }`}
              >
                {d.testimonials.map((t, i) => (
                  <Reveal
                    as="figure"
                    key={t.name}
                    delay={i * 80}
                    className="panel p-7 lg:p-9 flex flex-col"
                  >
                    <blockquote className="text-[18px] sm:text-[20px] leading-[1.5] tracking-[-0.012em] text-[color:var(--color-on-dark)] mb-7 flex-1">
                      <span aria-hidden className="text-[color:var(--color-accent-sky)] mr-1">
                        &ldquo;
                      </span>
                      {t.quote}
                      <span aria-hidden className="text-[color:var(--color-accent-sky)] ml-1">
                        &rdquo;
                      </span>
                    </blockquote>
                    <figcaption className="pt-5 border-t border-[color:var(--color-hairline-dark)]">
                      <p className="text-[15px] font-semibold tracking-[-0.01em] text-[color:var(--color-on-dark)]">
                        {t.name}
                      </p>
                      <p className="text-[11px] font-mono tracking-[0.1em] uppercase text-[color:var(--color-on-dark-faint)] mt-1">
                        {t.role}
                      </p>
                    </figcaption>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ──────────────── NEXT + CTA ──────────────── */}
        <section className="surface-canvas section relative overflow-hidden">
          <Backdrop tone="light" parallax />
          <div className="field-content container-tight">
            <GlassCard
              className="cta-card text-center px-6 sm:px-12 py-14 lg:py-20"
              interactive={false}
            >
              <Reveal as="p" className="t-eyebrow mb-5">
                What&rsquo;s next
              </Reveal>
              <Reveal as="h2" delay={80} className="t-display-md balance mb-7">
                Your story could be{" "}
                <span className="accent-text italic font-normal">next.</span>
              </Reveal>
              <Reveal as="p" delay={160} className="t-lead pretty max-w-[52ch] mx-auto mb-10">
                See where you stand, then build the operation that compounds
                from here.
              </Reveal>
              <Reveal
                as="div"
                delay={240}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                <a
                  href={SCORE_URL}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  {SCORE_CTA}
                </a>
                <a href="mailto:info@tetranoodle.com" className="btn btn-glass">
                  Talk to us
                </a>
              </Reveal>
            </GlassCard>

            <Reveal as="div" delay={120} className="mt-10 text-center">
              <Link href={`/results/${next.slug}`} className="link-cta">
                Next story: {next.client}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ──────────────── Pieces ──────────────── */

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-[760px] mb-10 lg:mb-14">
      <Reveal as="p" className="t-eyebrow mb-5">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={80} className="t-display-sm balance">
        {title}
      </Reveal>
    </div>
  );
}

function InfoCard({
  label,
  body,
  delay = 0,
}: {
  label: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="panel panel-pearl p-7 lg:p-8">
      <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-[color:var(--color-accent)] mb-4">
        {label}
      </h3>
      <p className="text-[16px] lg:text-[17px] leading-[1.6] text-[color:var(--color-body)] pretty">
        {body}
      </p>
    </Reveal>
  );
}

function StatList({ stats, stacked = false }: { stats: Stat[]; stacked?: boolean }) {
  return (
    <dl
      className={
        stacked
          ? "flex flex-col gap-8"
          : "grid sm:grid-cols-3 gap-6 sm:gap-8 h-full items-center"
      }
    >
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col-reverse">
          <dt className="text-[13px] leading-[1.45] text-[color:var(--color-on-dark-muted)] mt-2 max-w-[24ch]">
            {s.label}
          </dt>
          <dd
            className={`stat-value ${
              stacked ? "text-[34px] lg:text-[40px]" : "text-[30px] lg:text-[34px] whitespace-nowrap"
            } leading-none font-semibold tracking-[-0.03em] text-[color:var(--color-on-dark)] tabular-nums`}
          >
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function PullQuote({ quote }: { quote: Quote }) {
  return (
    <figure className="flex flex-col justify-center h-full">
      <blockquote className="text-[19px] sm:text-[21px] leading-[1.45] tracking-[-0.012em] text-[color:var(--color-on-dark)] font-medium">
        &ldquo;{quote.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-[13px] text-[color:var(--color-on-dark-muted)]">
        {quote.name} · {quote.role}
      </figcaption>
    </figure>
  );
}

function CheckIcon() {
  return (
    <span
      aria-hidden
      className="check-icon mt-0.5 inline-grid place-items-center w-7 h-7 rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

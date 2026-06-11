import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Backdrop from "../components/Backdrop";
import GlassCard from "../components/GlassCard";

export const metadata = { title: "About" };

const STATS = [
  { value: "10M+", label: "Lives impacted" },
  { value: "30+", label: "Years of expertise" },
  { value: "$500M+", label: "Value produced for clients" },
];

const TEAM = [
  {
    name: "Manuj Aggarwal",
    role: "Founder & CIO",
    line: "Four US patents, three decades at the root of hard AI problems.",
    photo: "/people/manuj-portrait.jpg",
  },
  {
    name: "Ashwin Kartic",
    role: "Marketing Strategist",
    line: "Turns deep technical work into stories leaders act on.",
    monogram: "AK",
  },
  {
    name: "Sonam Suri Sharma",
    role: "Director, Client Experience",
    line: "Keeps every engagement precise, personal, and accountable.",
    monogram: "SS",
  },
];

const PARTNERS = [
  { src: "/logos/microsoft.png", alt: "Microsoft", w: 34, h: 34 },
  { src: "/logos/ibm.png", alt: "IBM", w: 80, h: 32 },
  { src: "/logos/pearson.png", alt: "Pearson", w: 32, h: 34 },
  { src: "/logos/tmobile.png", alt: "T-Mobile", w: 34, h: 34 },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        {/* ──────────────── HERO ──────────────── */}
        <section className="surface-canvas relative pt-[104px] lg:pt-[132px] pb-20 lg:pb-28 overflow-hidden">
          <Backdrop tone="light" parallax />

          <div className="field-content container-wide grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="max-w-[680px]">
              <Reveal as="p" className="t-eyebrow mb-5">
                About TetraNoodle
              </Reveal>
              <Reveal as="h1" delay={80} className="t-display balance mb-7">
                AI-driven.{" "}
                <span className="accent-text italic font-normal">Human-led.</span>
              </Reveal>
              <Reveal as="p" delay={160} className="t-lead pretty mb-10 max-w-[52ch]">
                TetraNoodle builds automation and private AI vaults for operations
                that can&rsquo;t run on commodity tools.{" "}
                <span className="text-[color:var(--color-ink)]">
                  Founded in Vancouver in 2000.
                </span>
              </Reveal>
              <Reveal as="div" delay={240} className="flex flex-wrap items-center gap-3">
                <a href="mailto:info@tetranoodle.com" className="btn btn-primary">
                  Let&rsquo;s talk
                </a>
                <Link href="/" className="btn btn-glass text-[14px]">
                  See the platform →
                </Link>
              </Reveal>
            </div>

            <Reveal as="div" delay={200} className="relative">
              <GlassCard className="relative aspect-[4/5] w-full max-w-[480px] mx-auto p-2 sm:p-2.5">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                  <Image
                    src="/people/manuj-keynote.jpg"
                    alt="Manuj Aggarwal speaking at an IMAGINE AI IMPACT keynote."
                    fill
                    priority
                    sizes="(min-width: 1024px) 480px, 90vw"
                    className="object-cover object-[70%_center]"
                  />
                </div>
              </GlassCard>

              <p className="mt-6 t-caption text-center">
                Built on the peer-reviewed AI Merge protocol
              </p>
            </Reveal>
          </div>
        </section>

        {/* ──────────────── MISSION ──────────────── */}
        <section className="surface-parchment section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-tight text-center">
            <Reveal as="p" className="t-eyebrow mb-5">
              Our mission
            </Reveal>
            <Reveal as="h2" delay={80} className="t-display-md balance mb-7">
              Help leaders realize their{" "}
              <span className="accent-text italic font-normal">full potential</span>{" "}
              with AI they can trust.
            </Reveal>
            <Reveal as="p" delay={160} className="t-lead pretty max-w-[58ch] mx-auto">
              Commodity AI leaks context and control. We build automation and
              private vaults that keep your data sovereign, your decisions sharp,
              and your advantage compounding.
            </Reveal>
          </div>
        </section>

        {/* ──────────────── STATS ──────────────── */}
        <section className="surface-canvas section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide">
            <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
              {STATS.map((s, i) => (
                <Reveal
                  as="div"
                  key={s.label}
                  delay={i * 80}
                  className="panel p-7 lg:p-8 text-center"
                >
                  <p className="t-display-sm accent-text mb-3">{s.value}</p>
                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[color:var(--color-body-muted)]">
                    {s.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── FOUNDER (dark) ──────────────── */}
        <section
          data-on-dark
          className="surface-ink section relative overflow-hidden"
        >
          <Backdrop tone="dark" />
          <div className="field-content container-wide grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
            <Reveal as="div" className="order-2 lg:order-1">
              <p className="t-eyebrow mb-5">The founder</p>
              <h2 className="t-display-md balance mb-7">
                From $2 a day to the boardrooms of the{" "}
                <span className="accent-text italic font-normal">
                  Fortune 500.
                </span>
              </h2>
              <p className="t-lead pretty mb-6 max-w-[52ch]">
                Manuj Aggarwal, Founder &amp; CIO. Four US patents and thirty years
                in AI and technology, spent finding the pattern beneath the
                problem.
              </p>
              <p className="t-body max-w-[52ch] mb-10">
                AI Merge converges his engineering and research, and is{" "}
                <span className="text-[color:var(--color-on-dark)]">
                  published in the Mensa Research Journal.
                </span>
              </p>
              <a href="mailto:info@tetranoodle.com" className="btn btn-secondary">
                Read the research
              </a>
            </Reveal>

            <Reveal as="div" delay={120} className="order-1 lg:order-2">
              <GlassCard className="relative aspect-[4/5] w-full max-w-[480px] mx-auto p-2 sm:p-2.5">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                  <Image
                    src="/people/manuj-stage.jpg"
                    alt="Manuj Aggarwal speaking with a microphone against a purple backdrop."
                    fill
                    sizes="(min-width: 1024px) 480px, 90vw"
                    className="object-cover object-center"
                  />
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        {/* ──────────────── TEAM ──────────────── */}
        <section className="surface-canvas section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide">
            <div className="max-w-[760px] mx-auto text-center mb-12 lg:mb-16">
              <Reveal as="p" className="t-eyebrow mb-5">
                The team
              </Reveal>
              <Reveal as="h2" delay={80} className="t-display-md balance">
                Small team.{" "}
                <span className="accent-text italic font-normal">
                  Outsized impact.
                </span>
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {TEAM.map((m, i) => (
                <Reveal
                  as="article"
                  key={m.name}
                  delay={i * 80}
                  className="panel p-7 lg:p-8"
                >
                  {m.photo ? (
                    <div className="relative w-14 h-14 rounded-[16px] overflow-hidden mb-5">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        sizes="56px"
                        className="object-cover object-center"
                      />
                    </div>
                  ) : (
                    <span className="grid place-items-center w-14 h-14 rounded-full bg-[color:var(--color-accent)] text-white font-semibold text-[18px] mb-5">
                      {m.monogram}
                    </span>
                  )}
                  <h3 className="text-[20px] lg:text-[22px] font-semibold tracking-[-0.018em] leading-[1.18] mb-2">
                    {m.name}
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-accent)] mb-4">
                    {m.role}
                  </p>
                  <p className="text-[14px] leading-[1.55] text-[color:var(--color-body-muted)]">
                    {m.line}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── TRUSTED BY ──────────────── */}
        <section className="surface-parchment section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide text-center">
            <Reveal as="p" className="t-eyebrow mb-9">
              Trusted by teams at
            </Reveal>
            <Reveal
              as="div"
              delay={80}
              className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16"
            >
              {PARTNERS.map((p) => (
                <Image
                  key={p.alt}
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  className="partner-logo h-7 sm:h-8 w-auto"
                  style={{ width: "auto" }}
                />
              ))}
            </Reveal>
          </div>
        </section>

        {/* ──────────────── CTA ──────────────── */}
        <section className="surface-canvas section relative overflow-hidden">
          <Backdrop tone="light" parallax />
          <div className="field-content container-tight">
            <GlassCard
              className="text-center px-6 sm:px-12 py-14 lg:py-20"
              interactive={false}
            >
              <Reveal as="p" className="t-eyebrow mb-5">
                Begin
              </Reveal>
              <Reveal as="h2" delay={80} className="t-display balance mb-7">
                Want to build something{" "}
                <span className="accent-text italic font-normal">
                  that lasts?
                </span>
              </Reveal>
              <Reveal
                as="p"
                delay={160}
                className="t-lead pretty max-w-[52ch] mx-auto mb-10"
              >
                Tell us where you&rsquo;re stuck. We&rsquo;ll show you the root
                pattern and the system that changes it.
              </Reveal>
              <Reveal as="div" delay={240} className="flex flex-col items-center gap-4">
                <a
                  href="mailto:info@tetranoodle.com"
                  className="btn btn-primary !px-7 !py-4 !text-[16px]"
                >
                  Let&rsquo;s talk
                </a>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-body-faint)]">
                  Vancouver, Canada · Replies within one business day
                </p>
              </Reveal>
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

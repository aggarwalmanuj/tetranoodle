import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Backdrop from "../components/Backdrop";
import GlassCard from "../components/GlassCard";

export const metadata = { title: "Process" };

const STEPS = [
  {
    no: "01",
    title: "Analysis & Deep Dive",
    desc: "We map your world: the bottlenecks, the patterns, the work that doesn’t need you.",
    image: "/process/step-analysis.jpg",
    imageAlt: "A person reviewing data and charts on a laptop.",
  },
  {
    no: "02",
    title: "Strategic Roadmap",
    desc: "A clear plan from where you are to where you want to be, on your time and budget.",
    image: "/process/step-roadmap.jpg",
    imageAlt: "A planning wall covered in sticky notes mapping out a roadmap.",
  },
  {
    no: "03",
    title: "Implementation",
    desc: "We build it: custom agents, workflows, and your private AI vault, tested and tuned.",
    image: "/process/step-build.jpg",
    imageAlt: "A developer building software on screen.",
  },
  {
    no: "04",
    title: "Optimization",
    desc: "We polish what we’ve built so it runs clean and reliable.",
    image: "/process/step-optimize.jpg",
    imageAlt: "Hands fine-tuning settings on a dashboard.",
  },
  {
    no: "05",
    title: "Change Management",
    desc: "We help your team adopt the new way without friction.",
    image: "/process/step-team.jpg",
    imageAlt: "A team in a workshop, learning together.",
  },
  {
    no: "06",
    title: "Evaluation",
    desc: "We measure the impact and prove the wins against real numbers.",
    image: "/process/step-measure.jpg",
    imageAlt: "A business analytics dashboard showing results.",
  },
  {
    no: "07",
    title: "Iteration & Growth",
    desc: "The system compounds: it gets sharper the longer it runs.",
    image: "/process/step-growth.jpg",
    imageAlt: "An upward growth chart representing compounding results.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        {/* ──────────────── HERO ──────────────── */}
        <section className="surface-canvas relative pt-[104px] lg:pt-[132px] pb-20 lg:pb-28 overflow-hidden">
          <Backdrop tone="light" parallax />

          <div className="field-content container-wide px-6 lg:px-12 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-[720px]">
              <Reveal as="p" className="t-eyebrow mb-5">
                How we work
              </Reveal>
              <Reveal as="h1" delay={80} className="t-display balance mb-7">
                AI innovation,{" "}
                <span className="accent-text italic font-normal">human-led.</span>
              </Reveal>
              <Reveal as="p" delay={160} className="t-lead pretty max-w-[58ch]">
                We start by truly listening: your goals, your team&rsquo;s
                talents, your real constraints. Then we find what&rsquo;s
                actually generating the problem you keep hitting, and build the
                fix in whatever form fits your world: automation, a private AI
                vault, agents, the whole transformation.{" "}
                <span className="text-[color:var(--color-ink)]">
                  No generic advice. No one-size program.
                </span>
              </Reveal>
            </div>

            <Reveal as="div" delay={200} className="relative">
              <GlassCard className="relative aspect-[4/3] w-full max-w-[560px] mx-auto p-2 sm:p-2.5">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                  <Image
                    src="/process/hero.jpg"
                    alt="A team working together at a whiteboard, planning a project."
                    fill
                    priority
                    sizes="(min-width: 1024px) 560px, 90vw"
                    className="object-cover object-center"
                  />
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        {/* ──────────────── PRINCIPLE (dark) ──────────────── */}
        <section
          data-on-dark
          className="surface-ink section relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.4]" aria-hidden>
            <Image
              src="/process/discovery.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)] via-[color:var(--color-ink)]/40 to-[color:var(--color-ink)]" />
          </div>
          <div className="field-content relative container-tight text-center">
            <Reveal as="p" className="t-eyebrow mb-6">
              Our promise
            </Reveal>
            <Reveal as="p" delay={80} className="t-display-sm balance font-medium">
              A precise fix at the exact source, and we{" "}
              <span className="accent-text italic font-normal">
                stand behind it
              </span>{" "}
              getting solved.
            </Reveal>
          </div>
        </section>

        {/* ──────────────── STEPS ──────────────── */}
        <section className="surface-canvas section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide">
            <div className="max-w-[760px] mb-12 lg:mb-16">
              <Reveal as="p" className="t-eyebrow mb-5">
                The engagement
              </Reveal>
              <Reveal as="h2" delay={80} className="t-display-md balance">
                Seven steps,{" "}
                <span className="accent-text italic font-normal">
                  one outcome.
                </span>
              </Reveal>
            </div>

            <div className="flex flex-col gap-14 lg:gap-24">
              {STEPS.map((s, i) => (
                <Reveal
                  as="article"
                  key={s.no}
                  delay={i * 60}
                  className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  {/* Image — alternates side on desktop, gentle zoom on hover */}
                  <div
                    className={`relative aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden elevation-product ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </div>

                  {/* Number + title + text */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-[40px] lg:text-[52px] leading-none tracking-[0.02em] text-[color:var(--color-accent)] tabular-nums">
                        {s.no}
                      </span>
                      <span
                        aria-hidden
                        className="h-px flex-1 max-w-[80px] bg-[color:var(--color-accent)]/30 origin-left scale-x-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                      />
                    </span>
                    <h3 className="text-[24px] lg:text-[28px] font-semibold tracking-[-0.018em] leading-[1.18] mb-3">
                      {s.title}
                    </h3>
                    <p className="t-body !text-[17px] max-w-[46ch]">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── GUARANTEE (dark) ──────────────── */}
        <section
          data-on-dark
          className="surface-ink section relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.22]" aria-hidden>
            <Image
              src="/process/guarantee.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)] via-transparent to-[color:var(--color-ink)]" />
          </div>
          <div className="field-content relative container-tight text-center">
            <Reveal as="p" className="t-eyebrow mb-6">
              The guarantee
            </Reveal>
            <Reveal as="h2" delay={80} className="t-display-md balance mb-7">
              A 90-day result guarantee. If you don&rsquo;t see the benefit,{" "}
              <span className="accent-text italic font-normal">
                you get your money back.
              </span>
            </Reveal>
            <Reveal as="p" delay={160} className="t-lead pretty max-w-[52ch] mx-auto">
              We can stand behind the outcome because the protocol is built to
              fix the source, not the symptom.
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
                Let&rsquo;s map your{" "}
                <span className="accent-text italic font-normal">
                  first win.
                </span>
              </Reveal>
              <Reveal as="p" delay={160} className="t-lead pretty max-w-[52ch] mx-auto mb-10">
                One conversation to find the root, and the fastest path to a
                result you can measure.
              </Reveal>
              <Reveal
                as="div"
                delay={240}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                <a
                  href="https://aimerge.live"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary !px-7 !py-4 !text-[16px]"
                >
                  Get your Unfair Advantage Score
                </a>
                <a
                  href="mailto:info@tetranoodle.com"
                  className="btn btn-glass transition-transform duration-[var(--dur-fast)] hover:-translate-y-[1px]"
                >
                  Talk to us
                </a>
              </Reveal>
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

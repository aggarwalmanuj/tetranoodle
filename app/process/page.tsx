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
  },
  {
    no: "02",
    title: "Strategic Roadmap",
    desc: "A clear plan from where you are to where you want to be, on your time and budget.",
  },
  {
    no: "03",
    title: "Implementation",
    desc: "We build it: custom agents, workflows, and your private AI vault, tested and tuned.",
  },
  {
    no: "04",
    title: "Optimization",
    desc: "We polish what we’ve built so it runs clean and reliable.",
  },
  {
    no: "05",
    title: "Change Management",
    desc: "We help your team adopt the new way without friction.",
  },
  {
    no: "06",
    title: "Evaluation",
    desc: "We measure the impact and prove the wins against real numbers.",
  },
  {
    no: "07",
    title: "Iteration & Growth",
    desc: "The system compounds: it gets sharper the longer it runs.",
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

          <div className="field-content container-wide px-6 lg:px-12">
            <div className="max-w-[820px]">
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
          </div>
        </section>

        {/* ──────────────── PRINCIPLE ──────────────── */}
        <section className="surface-parchment section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-tight text-center">
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

            <div className="flex flex-col">
              {STEPS.map((s, i) => (
                <Reveal
                  as="div"
                  key={s.no}
                  delay={i * 60}
                  className="group grid grid-cols-[56px_1fr] sm:grid-cols-[80px_1fr] gap-5 sm:gap-8 items-baseline py-7 lg:py-8 border-t border-[color:var(--color-hairline-soft)] last:border-b"
                >
                  <span className="font-mono text-[18px] sm:text-[22px] tracking-[0.04em] text-[color:var(--color-accent)] tabular-nums">
                    {s.no}
                  </span>
                  <div>
                    <h3 className="text-[20px] lg:text-[24px] font-semibold tracking-[-0.018em] leading-[1.2] mb-2">
                      {s.title}
                    </h3>
                    <p className="t-body max-w-[54ch]">{s.desc}</p>
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
          <Backdrop tone="dark" />
          <div className="field-content container-tight text-center">
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
        <section className="surface-parchment section relative overflow-hidden">
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
                <a href="mailto:info@tetranoodle.com" className="btn btn-glass">
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

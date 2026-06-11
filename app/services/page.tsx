import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Backdrop from "../components/Backdrop";
import GlassCard from "../components/GlassCard";

export const metadata = { title: "Services" };

const accentDash = (
  <span
    aria-hidden
    className="mt-[10px] inline-block w-[18px] h-px shrink-0 bg-[color:var(--color-accent)]"
  />
);

const offerings = [
  {
    tag: "Offering 01",
    title: (
      <>
        Automation that{" "}
        <span className="accent-text italic font-normal">earns its keep.</span>
      </>
    ),
    body:
      "We find the work in your operation that doesn’t need you and build it to run on its own. Outreach, scheduling, follow-up, reporting, invoicing, the dozen small things eating your week.",
    items: [
      "A walkthrough of your operation, bottlenecks named",
      "Custom agents and workflows built around your business",
      "A 90-day result guarantee, money back if you don’t see the benefit",
      "Ongoing tuning as your operation evolves",
    ],
  },
  {
    tag: "Offering 02",
    title: (
      <>
        A private AI vault that{" "}
        <span className="accent-text italic font-normal">
          remembers everything.
        </span>
      </>
    ),
    body:
      "Most of your business intelligence (decisions, patterns, customer history, what works and why) is locked in your head or scattered across tools. The Vault is your own private AI environment that holds it, learns from it, and gives it back when you need it. Yours alone. Nothing shared, nothing public, nothing used to train any system outside it.",
    items: [
      "A dedicated private vault, not a shared platform",
      "Trained to your history, goals, and operation from day one",
      "Connects to your automation so both get smarter together",
      "Compounds: month six knows things you never told it",
    ],
  },
];

const capabilities = [
  {
    label: "01",
    name: "Custom Technology Solutions",
    desc: "Tailor-made AI built for your needs and competitive advantage.",
  },
  {
    label: "02",
    name: "Integration of Off-the-shelf Products",
    desc: "Plug proven tools into your existing systems, faster time to market.",
  },
  {
    label: "03",
    name: "Build Your Own SaaS Venture",
    desc: "Turn your vision into a SaaS business, concept to launch.",
  },
];

const method = [
  {
    tag: "Strategize",
    body: "AI, automation, and data strategy that positions you for growth.",
  },
  {
    tag: "Execute",
    body: "We implement and ship, streamlining operations and driving real productivity.",
  },
  {
    tag: "Manage",
    body: "Ongoing tuning, security, and optimization so it keeps working.",
  },
];

const editions = [
  {
    name: "Individuals",
    desc: "A digital twin: your own private AI, built around your life and goals.",
  },
  {
    name: "Business Leaders",
    desc: "A team twin: shared intelligence that helps the whole team move in sync.",
  },
  {
    name: "Enterprise",
    desc: "A private AI vault at organizational scale, with full data sovereignty.",
  },
  {
    name: "Communities",
    desc: "A private vault that holds collective knowledge and outlasts any single leader.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        {/* ──────────────── HERO ──────────────── */}
        <section className="surface-canvas relative pt-[104px] lg:pt-[132px] pb-20 lg:pb-28 overflow-hidden">
          <Backdrop tone="light" parallax />

          <div className="field-content container-full px-6 lg:px-12 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="max-w-[720px]">
              <Reveal as="p" className="t-eyebrow mb-5">
                What we build
              </Reveal>
              <Reveal as="h1" delay={80} className="t-display balance mb-7">
                Automation that frees your time. A{" "}
                <span className="accent-text italic font-normal">
                  private AI vault
                </span>{" "}
                that holds your intelligence.
              </Reveal>
              <Reveal as="p" delay={160} className="t-lead pretty mb-10 max-w-[58ch]">
                Most of the AI work you need falls into two buckets: getting your
                time back, and protecting the knowledge your business runs on.{" "}
                <span className="text-[color:var(--color-ink)]">
                  We build both, on the AI Merge protocol, so they get sharper the
                  longer you use them and stay yours alone.
                </span>
              </Reveal>
              <Reveal
                as="div"
                delay={240}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="https://aimerge.live"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  Get your score
                </a>
                <a
                  href="mailto:info@tetranoodle.com"
                  className="btn btn-glass text-[14px]"
                >
                  Talk to us
                </a>
              </Reveal>
            </div>

            <Reveal as="div" delay={200} className="relative">
              <GlassCard className="relative aspect-[4/5] w-full max-w-[460px] mx-auto p-2 sm:p-2.5">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                  <Image
                    src="/newpics/handshake.jpg"
                    alt="Two people shaking hands across a table in a bright modern office."
                    fill
                    priority
                    sizes="(min-width: 1024px) 460px, 90vw"
                    className="object-cover object-center"
                  />
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        {/* ──────────────── OFFERINGS ──────────────── */}
        <section className="surface-parchment section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide">
            <div className="grid lg:grid-cols-2 gap-6">
              {offerings.map((o, i) => (
                <Reveal
                  as="article"
                  key={o.tag}
                  delay={i * 80}
                  className="panel p-7 lg:p-8 flex flex-col"
                >
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-accent)] mb-4">
                    {o.tag}
                  </p>
                  <h2 className="t-display-sm balance mb-5">{o.title}</h2>
                  <p className="t-body pretty mb-8 max-w-[52ch]">{o.body}</p>

                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[color:var(--color-body-faint)] mb-4">
                    What you get
                  </p>
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {o.items.map((item) => (
                      <li key={item} className="flex gap-3.5">
                        {accentDash}
                        <span className="text-[15px] leading-[1.5] tracking-[-0.01em] text-[color:var(--color-ink)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/process" className="link-cta mt-auto">
                    See how it works
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal
              as="p"
              delay={160}
              className="t-lead pretty italic text-center max-w-[64ch] mx-auto mt-12 lg:mt-16"
            >
              Automation gives you time back. The Vault gives you intelligence
              that compounds.{" "}
              <span className="accent-text not-italic font-normal">
                Together they&rsquo;re a complete AI journey,
              </span>{" "}
              not a stack of disconnected tools.
            </Reveal>
          </div>
        </section>

        {/* ──────────────── CAPABILITIES ──────────────── */}
        <section className="surface-canvas section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide">
            <div className="max-w-[760px] mb-12 lg:mb-16">
              <Reveal as="p" className="t-eyebrow mb-5">
                Technology &amp; innovation
              </Reveal>
              <Reveal as="h2" delay={80} className="t-display-md balance">
                However your{" "}
                <span className="accent-text italic font-normal">vision</span>{" "}
                takes shape.
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {capabilities.map((c, i) => (
                <Reveal
                  as="article"
                  key={c.name}
                  delay={i * 80}
                  className="panel p-7 lg:p-8"
                >
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-accent)] mb-4">
                    {c.label}
                  </p>
                  <h3 className="text-[20px] lg:text-[22px] font-semibold tracking-[-0.018em] leading-[1.18] mb-3">
                    {c.name}
                  </h3>
                  <p className="text-[14px] leading-[1.55] text-[color:var(--color-body-muted)]">
                    {c.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── METHOD (dark) ──────────────── */}
        <section
          data-on-dark
          className="surface-ink section relative overflow-hidden"
        >
          <Backdrop tone="dark" />
          <div className="field-content container-wide">
            <div className="max-w-[760px] mb-12 lg:mb-16">
              <Reveal as="p" className="t-eyebrow mb-5">
                How we engage
              </Reveal>
              <Reveal as="h2" delay={80} className="t-display-md balance">
                Strategy, shipped, then{" "}
                <span className="accent-text italic font-normal">
                  kept sharp.
                </span>
              </Reveal>
            </div>

            <div className="flex flex-col">
              {method.map((m, i) => (
                <Reveal
                  as="div"
                  key={m.tag}
                  delay={i * 80}
                  className="group border-t border-[color:var(--color-hairline-dark)] last:border-b py-7 grid grid-cols-[120px_1fr] gap-5 items-start"
                >
                  <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[color:var(--color-accent-sky)] pt-1">
                    {m.tag}
                  </span>
                  <p className="t-body !text-[16px] text-[color:var(--color-on-dark-muted)] max-w-[52ch]">
                    {m.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── EDITIONS ──────────────── */}
        <section className="surface-parchment section relative overflow-hidden">
          <Backdrop tone="light" />
          <div className="field-content container-wide">
            <div className="max-w-[760px] mb-12 lg:mb-16">
              <Reveal as="p" className="t-eyebrow mb-5">
                The protocol underneath
              </Reveal>
              <Reveal as="h2" delay={80} className="t-display-md balance mb-6">
                AI Merge,{" "}
                <span className="accent-text italic font-normal">
                  configured for you.
                </span>
              </Reveal>
              <Reveal as="p" delay={160} className="t-lead pretty max-w-[58ch]">
                AI Merge is the protocol every offering is built on; it shows up
                differently depending on who&rsquo;s using it.
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {editions.map((e, i) => (
                <Reveal
                  as="article"
                  key={e.name}
                  delay={i * 80}
                  className="panel panel-pearl p-7 lg:p-8"
                >
                  <h3 className="text-[18px] lg:text-[19px] font-semibold tracking-[-0.018em] leading-[1.2] mb-3">
                    {e.name}
                  </h3>
                  <p className="text-[14px] leading-[1.55] text-[color:var(--color-body-muted)]">
                    {e.desc}
                  </p>
                </Reveal>
              ))}
            </div>
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
              <Reveal as="h2" delay={80} className="t-display balance mb-10">
                Ready to put AI to{" "}
                <span className="accent-text italic font-normal">work?</span>
              </Reveal>
              <Reveal
                as="div"
                delay={160}
                className="flex flex-col items-center gap-4"
              >
                <a
                  href="https://aimerge.live"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary !px-7 !py-4 !text-[16px]"
                >
                  Get your Unfair Advantage Score
                </a>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-body-faint)]">
                  Free · Instant personalized report · No credit card
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

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
    image: "/services/automation.jpg",
    imageAlt:
      "A calm modern workspace where automated workflows run on screen.",
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
    image: "/services/vault.jpg",
    imageAlt:
      "A secure, private environment representing your own AI vault.",
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
    icon: (
      <>
        <circle cx="12" cy="8" r="3.2" strokeWidth="1.6" />
        <path d="M5.5 19a6.5 6.5 0 0 1 13 0" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Business Leaders",
    desc: "A team twin: shared intelligence that helps the whole team move in sync.",
    icon: (
      <>
        <circle cx="8" cy="9" r="2.4" strokeWidth="1.6" />
        <circle cx="16" cy="9" r="2.4" strokeWidth="1.6" />
        <path d="M3.5 18a4.5 4.5 0 0 1 9 0m-1 0a4.5 4.5 0 0 1 9 0" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Enterprise",
    desc: "A private AI vault at organizational scale, with full data sovereignty.",
    icon: (
      <>
        <path d="M4 20V6l8-3 8 3v14" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 20v-4h6v4M8 9h.01M12 9h.01M16 9h.01M8 12.5h.01M12 12.5h.01M16 12.5h.01" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Communities",
    desc: "A private vault that holds collective knowledge and outlasts any single leader.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
        <path d="M3 12h18M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18" strokeWidth="1.6" />
      </>
    ),
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

          <div className="field-content container-wide px-6 lg:px-12 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="max-w-[720px]">
              <Reveal as="p" className="t-eyebrow mb-5">
                What we build
              </Reveal>
              <Reveal
                as="h1"
                delay={80}
                className="t-display balance mb-7 text-[clamp(32px,4.4vw,60px)]"
              >
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

        {/* ──────────────── OFFERINGS (dark) ──────────────── */}
        <section
          data-on-dark
          className="surface-ink section relative overflow-hidden"
        >
          <Backdrop tone="dark" />
          <div className="field-content container-wide flex flex-col gap-16 lg:gap-24">
            {offerings.map((o, i) => (
              <Reveal
                as="article"
                key={o.tag}
                delay={i * 80}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Image — alternates side on desktop */}
                <div
                  className={`relative aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden elevation-product ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={o.image}
                    alt={o.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-[color:var(--color-accent)] mb-4">
                    {o.tag}
                  </p>
                  <h2 className="t-display-sm balance mb-5">{o.title}</h2>
                  <p className="t-body pretty mb-8 max-w-[52ch] !text-[17px]">
                    {o.body}
                  </p>

                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[color:var(--color-body-faint)] mb-4">
                    What you get
                  </p>
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {o.items.map((item) => (
                      <li key={item} className="flex gap-3.5">
                        {accentDash}
                        <span className="text-[16px] leading-[1.55] tracking-[-0.01em] text-[color:var(--color-on-dark)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/process" className="link-cta">
                    See how it works
                  </Link>
                </div>
              </Reveal>
            ))}

            <Reveal
              as="p"
              delay={160}
              className="t-lead pretty italic text-center max-w-[64ch] mx-auto"
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
          <div className="field-content container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <Reveal as="div" className="relative order-1">
              <div className="relative aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden elevation-product">
                <Image
                  src="/newpics/businessteam.jpg"
                  alt="A team collaborating around a laptop in a bright office."
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>

            {/* Heading + capability list */}
            <div className="order-2">
              <Reveal as="p" className="t-eyebrow mb-5">
                Technology &amp; innovation
              </Reveal>
              <Reveal as="h2" delay={80} className="t-display-md balance mb-10">
                However your{" "}
                <span className="accent-text italic font-normal">vision</span>{" "}
                takes shape.
              </Reveal>

              <ul className="flex flex-col">
                {capabilities.map((c, i) => (
                  <Reveal
                    as="li"
                    key={c.name}
                    delay={i * 80}
                    className="border-t border-[color:var(--color-hairline-soft)] last:border-b py-6 grid grid-cols-[minmax(40px,auto)_1fr] gap-5 items-start"
                  >
                    <span className="font-mono text-[13px] tracking-[0.12em] text-[color:var(--color-accent)] pt-1">
                      {c.label}
                    </span>
                    <div>
                      <h3 className="text-[19px] lg:text-[21px] font-semibold tracking-[-0.018em] leading-[1.2] mb-2">
                        {c.name}
                      </h3>
                      <p className="text-[16px] leading-[1.55] text-[color:var(--color-body-muted)]">
                        {c.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
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
                  <span
                    aria-hidden
                    className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-lg)] bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] mb-5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      {e.icon}
                    </svg>
                  </span>
                  <h3 className="text-[18px] lg:text-[19px] font-semibold tracking-[-0.018em] leading-[1.2] mb-3">
                    {e.name}
                  </h3>
                  <p className="text-[16px] leading-[1.55] text-[color:var(--color-body-muted)]">
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
          <div className="field-content container-wide">
            <GlassCard
              className="overflow-hidden grid lg:grid-cols-2 items-stretch"
              interactive={false}
            >
              {/* Image */}
              <div className="relative min-h-[260px] lg:min-h-full order-1">
                <Image
                  src="/newpics/handshake.jpg"
                  alt="Two people shaking hands across a table in a bright modern office."
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Text + button */}
              <div className="order-2 px-6 sm:px-10 lg:px-14 py-14 lg:py-20">
                <Reveal as="p" className="t-eyebrow mb-5">
                  Begin
                </Reveal>
                <Reveal as="h2" delay={80} className="t-display-md balance mb-8">
                  Ready to put AI to{" "}
                  <span className="accent-text italic font-normal">work?</span>
                </Reveal>
                <Reveal
                  as="div"
                  delay={160}
                  className="flex flex-col items-start gap-4"
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
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

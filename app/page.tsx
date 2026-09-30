import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Audiences from "./components/Audiences";
import Shapes from "./components/Shapes";
import Surface from "./components/Surface";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import { SCORE_CTA, SCORE_URL } from "./lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

/* ────────────────────────────────────────────────────────────────
   Asset map: keep file paths centralized.
   Manuj portraits are replaced by the brand's green office
   illustrations (Storyset). Industry/atmosphere photography stays.
   ──────────────────────────────────────────────────────────────── */
const ASSETS = {
    heroPhoto: "/people/hero.jpg",
    founderPhoto: "/people/manuj-stage.jpg",
    fieldAtmosphere: "/random/pexels-oskar-gross-1074333632-34341414.jpg",
    industry1: "/random/business1.png",
    industry2: "/random/business2.png",
    industry3: "/random/business3.png",
    industry4: "/random/business4.jpg",
};

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
                <CredibilityStrip />
                <Problem />
                <WhatItIs />
                <Offerings />
                <ForYou />
                <Platform />
                <Industries />
                <Proof />
                <Founder />
                <FieldVision />
                <CTA />
            </main>
            <Footer />
        </>
    );
}

/* ──────────────── HERO ──────────────── */
function Hero() {
    return (
        <section className="surface-canvas relative pt-[104px] lg:pt-[132px] pb-20 lg:pb-32 overflow-hidden">
            <Shapes />

            <div className="field-content container-wide px-6 lg:px-12 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
                <div className="max-w-[720px]">
                    <Reveal as="div" delay={0}>
                        <span className="surface-card inline-flex items-center gap-2.5 !rounded-[var(--radius-pill)] pl-2.5 pr-4 py-1.5 mb-7">
                            <span
                                aria-hidden
                                className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)]"
                            />
                            <span className="text-[13px] text-[color:var(--color-body-muted)] font-semibold">
                                Peer-reviewed · Mensa Research Journal
                            </span>
                        </span>
                    </Reveal>

                    <Reveal
                        as="h1"
                        delay={80}
                        className="t-display balance mb-7 text-[clamp(32px,4.8vw,64px)]"
                    >
                        Your own AI.
                        <br />
                        <span className="accent-text">
                            Private, secure, actually yours.
                        </span>
                    </Reveal>

                    <Reveal
                        as="p"
                        delay={160}
                        className="t-lead pretty mb-10 max-w-[54ch]"
                    >
                        Not a generic model trained on everyone else&rsquo;s
                        data. Not a tool you rent by the seat.{" "}
                        <span className="text-[color:var(--color-ink)]">
                            Your own AI: built around your operation or your
                            life, held privately, that gets sharper the longer
                            you use it.
                        </span>{" "}
                        For individuals. For teams inside organizations that
                        can&rsquo;t run on commodity tools.
                    </Reveal>

                    <Reveal
                        as="div"
                        delay={240}
                        className="flex flex-wrap items-center gap-3"
                    >
                        <a href="#score" className="btn btn-primary">
                            {SCORE_CTA}
                        </a>
                        <a
                            href="/services"
                            className="btn btn-tonal text-[14px]"
                        >
                            See what we build →
                        </a>
                    </Reveal>
                </div>

                <Reveal as="div" delay={200} className="relative lg:-mt-12">
                    <Surface className="media-frame media-arch relative aspect-[4/5] w-full max-w-[480px] mx-auto">
                        <div className="relative w-full h-full">
                            <Image
                                src={ASSETS.heroPhoto}
                                alt="Two founders standing together in a bright modern office, smiling at the camera."
                                fill
                                priority
                                sizes="(min-width: 1024px) 480px, 90vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </Surface>

                    <p className="mt-6 t-caption text-center">
                        4 AI patents · 30 years in AI
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

/* ──────────────── CREDIBILITY STRIP ──────────────── */
function CredibilityStrip() {
    const items = [
        "Peer-reviewed science",
        "4 AI patents",
        "30 years in AI & technology",
        "Clinically validated",
        "Results in 4 weeks",
        "Real estate · Finance · Enterprise",
        "Vancouver, Canada",
    ];
    return (
        <aside
            aria-label="Credibility"
            className="surface-parchment border-y border-[color:var(--color-hairline-soft)]"
        >
            <div className="marquee-fade container-full px-6 lg:px-12 py-6 overflow-hidden">
                <div className="marquee-track">
                    {[...items, ...items].map((t, i) => (
                        <span
                            key={i}
                            className="cred-chip"
                        >
                            <span
                                aria-hidden
                                className="inline-block w-1 h-1 rounded-full bg-[color:var(--color-accent)]"
                            />
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
}

/* ──────────────── PROBLEM (dark) ──────────────── */
function Problem() {
    const symptoms = [
        "Why am I stuck even though I know what to do?",
        "Why does my team keep waiting for me?",
        "Why does everything depend on me?",
        "Why is growth plateauing no matter what I try?",
        "Why do I keep repeating the same pattern?",
        "Why am I overwhelmed even though I have everything?",
    ];

    return (
        <section
            id="problem"
            data-on-dark
            className="surface-ink section relative overflow-hidden"
        >
            <div className="field-content container-wide grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                <div>
                    <Reveal as="p" className="t-eyebrow mb-5">
                        The pattern
                    </Reveal>
                    <Reveal
                        as="h2"
                        delay={80}
                        className="t-display-md balance mb-7"
                    >
                        You&rsquo;ve tried{" "}
                        <span className="accent-text">
                            everything.
                        </span>
                        <br />
                        It keeps coming back.
                    </Reveal>
                    <Reveal
                        as="p"
                        delay={160}
                        className="t-lead pretty mb-10 max-w-[50ch]"
                    >
                        New strategy, new hire, new tool. Six months later
                        you&rsquo;re back where you started.{" "}
                        <span className="text-[color:var(--color-on-dark)]">
                            That&rsquo;s not a strategy problem.
                        </span>
                    </Reveal>

                    <ul className="flex flex-col">
                        {symptoms.map((q, i) => (
                            <li
                                key={q}
                                className="group border-t border-[color:var(--color-hairline-dark)] last:border-b py-5"
                            >
                                <Reveal
                                    as="span"
                                    delay={i * 60}
                                    className="block"
                                >
                                    <span className="text-[18px] sm:text-[20px] leading-[1.35] tracking-[-0.012em] text-[color:var(--color-on-dark-muted)] group-hover:text-[color:var(--color-on-dark)] transition-colors">
                                        &ldquo;{q}&rdquo;
                                    </span>
                                </Reveal>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:sticky lg:top-32">
                    <Reveal as="div" delay={120}>
                        <Surface className="p-8 lg:p-10">
                            <p className="text-[13px] text-[color:var(--color-accent-sky)] mb-5 font-semibold">
                                The real problem
                            </p>
                            <p className="text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.3] tracking-[-0.018em] text-[color:var(--color-on-dark)] font-medium">
                                Most AI tools are the same intelligence everyone
                                else is renting: generic, forgettable, and never
                                actually yours.{" "}
                                <span className="text-[color:var(--color-on-dark-muted)] font-normal">
                                    What that leaves you with: your operation
                                    still depending on you, your knowledge still
                                    trapped in your head or scattered across
                                    tools you don&rsquo;t control, your time
                                    still eaten by the same tasks every week.
                                </span>
                            </p>
                        </Surface>
                    </Reveal>

                    <Reveal
                        as="p"
                        delay={220}
                        className="t-body mt-8 max-w-[46ch]"
                    >
                        We build the alternative:{" "}
                        <span className="text-[color:var(--color-on-dark)]">
                            agents that run what doesn&rsquo;t need you, and a
                            private vault that holds the intelligence your
                            business or your life runs on.
                        </span>{" "}
                        Yours. Not shared, not rented, not training anyone
                        else&rsquo;s model.
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ──────────────── WHAT IT IS ──────────────── */
function WhatItIs() {
    const concepts = [
        {
            label: "Privacy",
            name: "Your own AI vault",
            desc: "Built around you. Yours alone. Nobody else's.",
        },
        {
            label: "Certainty",
            name: "It gets solved",
            desc: "Not a maybe. A clear path to the outcome.",
        },
        {
            label: "Effectiveness",
            name: "Real change, fast",
            desc: "A 25-year clinician saw it work in four weeks.",
        },
        {
            label: "Efficiency",
            name: "The closest thing to easy",
            desc: "The result, without the grind to get there.",
        },
    ];

    return (
        <section
            id="platform"
            className="surface-parchment section relative overflow-hidden"
        >
            <div className="field-content container-wide">
                <div className="max-w-[820px]">
                    <Reveal as="p" className="t-eyebrow mb-5">
                        What you actually get
                    </Reveal>
                    <Reveal
                        as="h2"
                        delay={80}
                        className="t-display-md balance mb-7"
                    >
                        Not another tool:{" "}
                        <span className="accent-text">
                            an AI that&rsquo;s actually yours.
                        </span>
                    </Reveal>
                    <Reveal
                        as="p"
                        delay={160}
                        className="t-lead pretty max-w-[58ch] mb-4"
                    >
                        People don&rsquo;t want AI. They want their time back,
                        and they want to stop handing their knowledge to
                        someone else&rsquo;s model.
                    </Reveal>
                    <Reveal as="p" delay={220} className="t-body max-w-[58ch]">
                        So we don&rsquo;t sell you AI.{" "}
                        <span className="text-[color:var(--color-ink)]">
                            We give you your own, and we stand behind it.
                        </span>
                    </Reveal>
                </div>

                <div className="mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {concepts.map((c, i) => (
                        <Reveal
                            as="div"
                            key={c.name}
                            delay={i * 80}
                            className="panel panel-pearl p-7 lg:p-8"
                        >
                            <p className="text-[13px] text-[color:var(--color-accent)] mb-4 font-semibold">
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
    );
}

/* ──────────────── WHAT WE BUILD (one private AI: agents + vault) ──────────────── */
function Offerings() {
    const cards = [
        {
            tag: "The agents",
            title: "Agents that work on their own.",
            body: "No imports, no exports, no clicking through a queue. Tell it what you need once, and it keeps going, checking in only when it genuinely doesn't know what to do next.",
        },
        {
            tag: "The vault",
            title: "A private AI vault that remembers everything.",
            body: "Your decisions, patterns, and history, held in your own private AI environment. Nothing shared, nothing public, nothing training anyone else's model. It compounds the longer it runs.",
        },
    ];
    return (
        <section className="surface-canvas section relative overflow-hidden">
            <div className="field-content container-wide">
                <div className="max-w-[760px] mb-12 lg:mb-16">
                    <Reveal as="p" className="t-eyebrow mb-5">
                        What we build
                    </Reveal>
                    <Reveal as="h2" delay={80} className="t-display-md balance mb-7">
                        One private AI.{" "}
                        <span className="accent-text">
                            A control center, not a dashboard.
                        </span>
                    </Reveal>
                    <Reveal as="p" delay={160} className="t-lead pretty max-w-[60ch]">
                        Install it, and agents come with it: working on their
                        own, not one more app you have to click through.{" "}
                        <span className="text-[color:var(--color-ink)]">
                            Outreach, follow-up, scheduling, reporting: the work
                            that doesn&rsquo;t need you, running in the
                            background, inside an environment that&rsquo;s
                            yours alone.
                        </span>
                    </Reveal>
                </div>

                <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
                    {cards.map((c, i) => (
                        <Reveal
                            as="article"
                            key={c.tag}
                            delay={i * 100}
                            className="panel p-8 lg:p-10 flex flex-col"
                        >
                            <p className="text-[13px] text-[color:var(--color-accent)] mb-5 font-semibold">
                                {c.tag}
                            </p>
                            <h3 className="t-display-sm tracking-[-0.02em] mb-4 max-w-[18ch]">
                                {c.title}
                            </h3>
                            <p className="t-body mb-8 max-w-[46ch] flex-1">
                                {c.body}
                            </p>
                            <a href="/services" className="link-cta">
                                See how it works
                            </a>
                        </Reveal>
                    ))}
                </div>

                <Reveal
                    as="p"
                    delay={160}
                    className="t-body text-center max-w-[60ch] mx-auto mt-12"
                >
                    The agents are your private AI at work. The Vault is its
                    memory.{" "}
                    <span className="accent-text">
                        Together they&rsquo;re one system, not a stack of tools
                        you have to operate yourself.
                    </span>
                </Reveal>
            </div>
        </section>
    );
}

/* ──────────────── FOR YOU (tabs) ──────────────── */
function ForYou() {
    return (
        <section
            id="for-you"
            className="surface-parchment section relative overflow-hidden"
        >
            <div className="field-content container-wide">
                <div className="text-center max-w-[760px] mx-auto mb-12 lg:mb-16">
                    <Reveal as="p" className="t-eyebrow mb-5">
                        Who it&rsquo;s for
                    </Reveal>
                    <Reveal as="h2" delay={80} className="t-display-md balance">
                        One private AI.{" "}
                        <span className="accent-text">
                            Built for you, or built for your team.
                        </span>
                    </Reveal>
                </div>
                <Audiences />
            </div>
        </section>
    );
}

/* ──────────────── PLATFORM (Ignite/Teams/Vault/Industry) ──────────────── */
function Platform() {
    const products = [
        {
            tag: "IGNITE",
            title: "Individual & Leadership Transformation",
            body: "A personalized 4-week protocol for individuals and leaders ready to change at the root.",
        },
        {
            tag: "TEAMS",
            title: "Enterprise & Team Edition",
            body: "Collective nervous-system work for organizations that need to move as one coherent intelligence.",
        },
        {
            tag: "VAULT",
            title: "Private AI Infrastructure",
            body: "Secure, private AI memory for leaders and enterprises who need trusted intelligence environments.",
        },
        {
            tag: "INDUSTRY",
            title: "Real Estate · Finance · Healthcare · Communities",
            body: "Domain-specific programs calibrated to the decisions, pressures, and human dynamics of each industry.",
        },
    ];

    return (
        <section
            data-on-dark
            className="surface-ink-2 section relative overflow-hidden"
        >
            <div className="field-content container-wide grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start">
                <div className="lg:sticky lg:top-32">
                    <Reveal as="p" className="t-eyebrow mb-5">
                        How it works
                    </Reveal>
                    <Reveal
                        as="h2"
                        delay={80}
                        className="t-display-md balance mb-7"
                    >
                        One platform for every{" "}
                        <span className="accent-text">context</span> it shows up
                        in.
                    </Reveal>
                    <Reveal
                        as="p"
                        delay={160}
                        className="t-lead pretty max-w-[44ch] mb-8"
                    >
                        AI Merge reads your story and your patterns, finds the
                        root, then delivers a protocol calibrated to your
                        industry and your life.
                    </Reveal>
                    <Reveal as="p" delay={240} className="t-body max-w-[44ch]">
                        No generic advice. No one-size program.{" "}
                        <span className="text-[color:var(--color-on-dark)]">
                            A precise intervention at the exact root.
                        </span>
                    </Reveal>
                </div>

                <div className="flex flex-col">
                    {products.map((p, i) => (
                        <Reveal
                            as="div"
                            key={p.tag}
                            delay={i * 80}
                            className="group border-t border-[color:var(--color-hairline-dark)] last:border-b py-7 grid grid-cols-[minmax(72px,auto)_1fr_24px] gap-5 items-start cursor-pointer"
                        >
                            <span className="text-[13px] text-[color:var(--color-accent-sky)] pt-1 font-semibold">
                                {p.tag}
                            </span>
                            <div>
                                <h3 className="text-[19px] lg:text-[21px] font-medium tracking-[-0.015em] text-[color:var(--color-on-dark)] mb-2">
                                    {p.title}
                                </h3>
                                <p className="t-body !text-[15px]">{p.body}</p>
                            </div>
                            <span
                                aria-hidden
                                className="text-[color:var(--color-on-dark-faint)] group-hover:text-[color:var(--color-accent-sky)] group-hover:translate-x-1 transition-all pt-1"
                            >
                                →
                            </span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ──────────────── INDUSTRIES: visual break ──────────────── */
function Industries() {
    const tiles = [
        {
            src: ASSETS.industry1,
            label: "Real Estate",
            body: "Coherence at scale for brokerages and firms.",
        },
        {
            src: ASSETS.industry2,
            label: "Finance",
            body: "Decisions under pressure, regulated by clarity.",
        },
        {
            src: ASSETS.industry3,
            label: "Healthcare",
            body: "Care teams that hold without burning out.",
        },
        {
            src: ASSETS.industry4,
            label: "Communities",
            body: "Belonging that compounds across generations.",
        },
    ];
    return (
        <section className="surface-parchment section relative overflow-hidden">
            <div className="field-content container-wide">
                <div className="flex items-end justify-between flex-wrap gap-6 mb-12 lg:mb-16">
                    <div className="max-w-[640px]">
                        <Reveal as="p" className="t-eyebrow mb-5">
                            Industries
                        </Reveal>
                        <Reveal
                            as="h2"
                            delay={80}
                            className="t-display-md balance"
                        >
                            Calibrated to the human dynamics of{" "}
                            <span className="accent-text">your field.</span>
                        </Reveal>
                    </div>
                    <Reveal as="a" delay={160} className="link-cta">
                        See all industries
                    </Reveal>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {tiles.map((t, i) => (
                        <Reveal
                            as="article"
                            key={t.label}
                            delay={i * 60}
                            className="panel overflow-hidden group"
                        >
                            <div className="relative aspect-[4/5] bg-[color:var(--color-parchment)] overflow-hidden">
                                <Image
                                    src={t.src}
                                    alt=""
                                    fill
                                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                                />
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"
                                />
                            </div>
                            <div className="p-5 lg:p-6">
                                <p className="text-[13px] text-[color:var(--color-accent)] mb-2 font-semibold">
                                    {t.label}
                                </p>
                                <p className="text-[15px] leading-[1.45] text-[color:var(--color-ink)] tracking-[-0.01em]">
                                    {t.body}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ──────────────── PROOF ──────────────── */
function Proof() {
    const proofs = [
        {
            text: "Thank you, thank you, thank you. I feel the transformation taking place gently.",
            name: "Dorota Hedzelek",
            role: "PhD · Registered Clinical Counsellor · 25 Years",
        },
        {
            text: "Less performance. More being. The business stress became background noise instead of foreground problem.",
            name: "Mark Nazemi",
            role: "PhD · Sensorium Co-Founder",
        },
        {
            text: "Something released that I hadn't known was held. It is a tool to free yourself.",
            name: "Jill Carter",
            role: "Founder · Modern Pursuit Matchmaking",
        },
    ];
    return (
        <section
            id="proof"
            className="surface-canvas section relative overflow-hidden"
        >
            <div className="field-content container-wide">
                <div className="text-center max-w-[760px] mx-auto mb-12 lg:mb-16">
                    <Reveal as="p" className="t-eyebrow mb-5">
                        Field evidence
                    </Reveal>
                    <Reveal as="h2" delay={80} className="t-display-md balance">
                        What happens when the AI is{" "}
                        <span className="accent-text">actually yours.</span>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
                    {proofs.map((p, i) => (
                        <Reveal
                            as="figure"
                            key={p.name}
                            delay={i * 80}
                            className="panel p-7 lg:p-8 flex flex-col"
                        >
                            <blockquote className="text-[18px] leading-[1.5] tracking-[-0.012em] text-[color:var(--color-ink)] mb-7 flex-1">
                                <span
                                    aria-hidden
                                    className="text-[color:var(--color-accent)] mr-1"
                                >
                                    “
                                </span>
                                {p.text}
                                <span
                                    aria-hidden
                                    className="text-[color:var(--color-accent)] ml-1"
                                >
                                    ”
                                </span>
                            </blockquote>
                            <figcaption className="pt-5 border-t border-[color:var(--color-hairline-soft)]">
                                <p className="text-[14px] font-semibold tracking-[-0.01em]">
                                    {p.name}
                                </p>
                                <p className="text-[13px] text-[color:var(--color-body-faint)] mt-1 font-semibold">
                                    {p.role}
                                </p>
                            </figcaption>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ──────────────── FOUNDER ──────────────── */
function Founder() {
    return (
        <section
            id="founder"
            className="surface-parchment section relative overflow-hidden"
        >
            <div className="field-content container-wide grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
                <Reveal as="div" className="order-2 lg:order-1">
                    <p className="t-eyebrow mb-5">The founder</p>
                    <h2 className="t-display-md balance mb-7">
                        Built by someone who has{" "}
                        <span className="accent-text">
                            been at the root for thirty years.
                        </span>
                    </h2>
                    <p className="t-lead pretty mb-6 max-w-[52ch]">
                        Manuj Aggarwal: four AI patents, three decades in
                        technology, and a lifelong investigator of why human
                        systems get stuck. AI Merge converges his engineering
                        and clinical research, published in the Mensa Research
                        Journal.
                    </p>
                    <p className="t-body max-w-[52ch] mb-10">
                        His mission:{" "}
                        <span className="text-[color:var(--color-ink)]">
                            help 20 Nobel-class minds unlock their potential
                        </span>
                        , and seed the next generation of leaders.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#score" className="btn btn-primary">
                            Work with Manuj
                        </a>
                        <a href="#founder" className="btn btn-outlined">
                            Read the paper
                        </a>
                    </div>
                </Reveal>

                <Reveal as="div" delay={120} className="order-1 lg:order-2">
                    <Surface className="media-frame media-leaf relative aspect-[4/5] w-full max-w-[480px] mx-auto">
                        <div className="relative w-full h-full">
                            <Image
                                src={ASSETS.founderPhoto}
                                alt="Manuj Aggarwal, founder of TetraNoodle, speaking on stage."
                                fill
                                sizes="(min-width: 1024px) 480px, 90vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </Surface>
                </Reveal>
            </div>
        </section>
    );
}

/* ──────────────── FIELD / VISION ──────────────── */
function FieldVision() {
    return (
        <section
            data-on-dark
            className="surface-ink section relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-[0.16]" aria-hidden>
                <Image
                    src={ASSETS.fieldAtmosphere}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)] via-transparent to-[color:var(--color-ink)]" />
            </div>

            <div className="field-content relative container-tight text-center">
                <Reveal as="p" className="t-eyebrow mb-5">
                    A complete AI journey
                </Reveal>
                <Reveal as="p" delay={80} className="t-lead pretty mb-8">
                    Most AI work stops at the tool: another agent, another
                    prompt, another integration.{" "}
                    <span className="text-[color:var(--color-on-dark)]">
                        That is the easy half. It is also where almost everyone
                        gets stuck.
                    </span>
                </Reveal>
                <Reveal as="p" delay={160} className="t-lead pretty mb-12">
                    We build the whole thing: the automation, the private vault,
                    and the{" "}
                    <span className="accent-text">human layer</span> that
                    ties them together. The work compounds instead of decaying.
                </Reveal>

                <Reveal as="div" delay={240} className="flex justify-center">
                    <Surface className="inline-block px-10 py-8">
                        <p className="text-[26px] sm:text-[32px] tracking-[-0.022em] font-medium accent-text mb-2">
                            Built on AI Merge
                        </p>
                        <p className="text-[13px] text-[color:var(--color-on-dark-faint)] font-semibold">
                            Peer-reviewed · Mensa Research Journal · Vancouver,
                            Canada
                        </p>
                    </Surface>
                </Reveal>
            </div>
        </section>
    );
}

/* ──────────────── CTA ──────────────── */
function CTA() {
    return (
        <section
            id="score"
            className="surface-parchment section relative overflow-hidden"
        >
            <Shapes />
            <div className="field-content container-tight">
                <Surface
                    className="cta-card text-center px-6 sm:px-12 py-14 lg:py-20"
                >
                    <Reveal as="p" className="t-eyebrow mb-5">
                        Begin
                    </Reveal>
                    <Reveal
                        as="h2"
                        delay={80}
                        className="t-display balance mb-7"
                    >
                        Is your intelligence{" "}
                        <span className="accent-text">actually yours?</span>
                    </Reveal>
                    <Reveal
                        as="p"
                        delay={160}
                        className="t-lead pretty max-w-[52ch] mx-auto mb-10"
                    >
                        See exactly where you stand, and what your own private
                        AI could look like.
                    </Reveal>
                    <Reveal
                        as="div"
                        delay={240}
                        className="flex flex-col items-center gap-4"
                    >
                        <a
                            href={SCORE_URL}
                            target="_blank"
                            rel="noopener"
                            className="btn btn-primary btn-lg"
                        >
                            {SCORE_CTA}
                        </a>
                        <p className="text-[13px] text-[color:var(--color-body-faint)] font-semibold">
                            Free · Instant personalized report · No credit card
                        </p>
                    </Reveal>
                </Surface>
            </div>
        </section>
    );
}

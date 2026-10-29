import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import {
  BEFORE_NOW_APPROVED,
  CASE_STUDIES,
  PROTOCOL_STORIES,
  type CaseStudy,
} from "../lib/case-studies";
import { SCORE_CTA, SCORE_URL } from "../lib/site";

export const metadata = {
  title: "Case Studies",
  description:
    "Case studies from TetraNoodle: enterprise AI work with Wiivv, Desire2Learn, IBM, T-Mobile, Titan and more, and personal stories from the AI Merge Protocol.",
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
        <section id="enterprise" className="surface-canvas pb-20 lg:pb-32 px-5 sm:px-6 lg:px-12">
          <div className="container-wide">
            {featured && <Featured study={featured} />}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-5 lg:mt-6">
              {rest.map((c, i) => (
                <StudyCard key={c.client} study={c} delay={i * 60} />
              ))}
              {upcoming.map((c, i) => (
                <UpcomingCard key={c.client} study={c} delay={(rest.length + i) * 60} />
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
    <section className="surface-canvas pt-[112px] lg:pt-[148px] pb-14 lg:pb-20 px-5 sm:px-6 lg:px-12">
      <div className="container-wide">
        <Reveal as="p" className="t-eyebrow mb-6">
          Case studies
        </Reveal>
        <Reveal as="h1" delay={60} className="t-display balance mb-8 max-w-[16ch]">
          What changed, told by{" "}
          <span className="accent-text">the people it changed for.</span>
        </Reveal>
        <Reveal
          as="div"
          delay={120}
          className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6"
        >
          <p className="t-lead pretty max-w-[54ch]">
            Companies that rebuilt how they work around AI that was actually
            theirs, and individuals who stopped repeating the same pattern.
          </p>
          <nav aria-label="On this page" className="flex flex-wrap gap-x-6">
            <a href="#enterprise" className="link-cta">
              Company stories
            </a>
            <a href="#personal" className="link-cta">
              Personal stories
            </a>
          </nav>
        </Reveal>
        <Reveal
          as="dl"
          delay={180}
          className="mt-14 lg:mt-20 pt-8 border-t border-[color:var(--color-hairline)] grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-[760px]"
        >
          {[
            { value: "10M+", label: "Lives impacted" },
            { value: "$500M+", label: "Value produced for clients" },
            { value: "30 yrs", label: "Building with AI" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="t-caption mt-1">{s.label}</dt>
              <dd className="font-serif text-[40px] lg:text-[48px] leading-none tabular-nums">
                {s.value}
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────── FEATURED STUDY ──────────────── */
function Featured({ study }: { study: CaseStudy }) {
  const stats = study.detail?.heroStats ?? study.detail?.statBox ?? [];
  return (
    <Reveal
      as="article"
      className="panel overflow-hidden grid lg:grid-cols-[1.2fr_1fr]"
    >
      <div className="p-7 sm:p-10 lg:p-14 flex flex-col">
        <p className="t-eyebrow mb-6">Featured · {study.client}</p>
        <h2 className="t-display-md balance mb-6 max-w-[18ch]">{study.title}</h2>
        <p className="t-body pretty mb-10 max-w-[50ch] flex-1">
          {study.detail?.intro}
        </p>
        <Link
          href={`/case-studies/${study.slug}`}
          className="link-cta self-start before:absolute before:inset-0 before:rounded-[inherit] before:content-['']"
          style={{ position: "static" }}
        >
          Read the {study.client} story
        </Link>
      </div>
      <dl className="surface-parchment p-7 sm:p-10 lg:p-14 flex flex-col justify-center gap-8 lg:border-l border-t lg:border-t-0 border-[color:var(--color-hairline)]">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse">
            <dt className="text-[15px] text-[color:var(--color-body-muted)] mt-2">
              {s.label}
            </dt>
            <dd className="font-serif text-[52px] lg:text-[64px] leading-none tabular-nums">
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
    <div className="h-8 flex items-center mb-8">
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
        <p className="text-[16px] font-semibold">{study.client}</p>
      )}
    </div>
  );
}

function StudyCard({ study, delay }: { study: CaseStudy; delay: number }) {
  const stat = study.detail?.heroStats?.[0] ?? study.detail?.statBox?.[0];
  return (
    <Reveal as="article" delay={delay} className="panel p-7 lg:p-8 flex flex-col">
      <ClientMark study={study} />
      {stat && (
        <div className="mb-8">
          <p className="font-serif text-[48px] leading-none tabular-nums mb-2">
            {stat.value}
          </p>
          <p className="t-caption max-w-[28ch]">{stat.label}</p>
        </div>
      )}
      <h3 className="text-[18px] font-semibold leading-[1.35] mb-2">
        {study.title}
      </h3>
      <p className="t-body !text-[16px] mb-6 flex-1">{study.outcome}</p>
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
      className="p-7 lg:p-8 flex flex-col rounded-[var(--radius-lg)] border border-dashed border-[color:var(--color-hairline)]"
    >
      <ClientMark study={study} />
      <h3 className="text-[18px] font-semibold leading-[1.35] mb-2">
        {study.title}
      </h3>
      <p className="t-body !text-[16px] mb-6 flex-1">{study.outcome}</p>
      <p className="t-caption">
        Full story coming soon.{" "}
        <a
          href={`mailto:info@tetranoodle.com?subject=${encodeURIComponent(
            `${study.client} case study`
          )}`}
          className="underline underline-offset-4 text-[color:var(--color-ink)] hover:decoration-2"
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
        <div className="max-w-[720px] mb-12 lg:mb-16">
          <Reveal as="p" className="t-eyebrow mb-4">
            Personal stories · AI Merge Protocol
          </Reveal>
          <Reveal as="h2" delay={60} className="t-display-md balance">
            When the belief shifts,{" "}
            <span className="accent-text">in their own words.</span>
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
                <blockquote className="font-serif text-[30px] sm:text-[36px] leading-[1.12] mb-6 balance">
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
                    <span className="avatar relative w-10 h-10">
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
                      className="grid place-items-center w-10 h-10 rounded-full bg-[color:var(--color-pearl)] border border-[color:var(--color-hairline)] text-[13px] font-semibold text-[color:var(--color-body-muted)] shrink-0"
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
    <section data-on-dark className="surface-ink section">
      <div className="container-wide">
        <div className="max-w-[720px] mb-12 lg:mb-16">
          <Reveal as="p" className="t-eyebrow mb-4">
            In their words
          </Reveal>
          <Reveal as="h2" delay={60} className="t-display-md balance">
            Leaders who&rsquo;ve{" "}
            <span className="accent-text">felt the difference.</span>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="figure" key={t.name} delay={(i % 3) * 70} className="flex flex-col">
              <blockquote className="font-serif text-[24px] leading-[1.28] mb-6 flex-1">
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
    <section className="surface-canvas section">
      <div className="container-tight text-center">
        <Reveal as="h2" className="t-display balance mb-7">
          Your story could be <span className="accent-text">next.</span>
        </Reveal>
        <Reveal as="p" delay={80} className="t-lead pretty max-w-[48ch] mx-auto mb-10">
          See where you stand, then build the operation that compounds from
          here.
        </Reveal>
        <Reveal
          as="div"
          delay={160}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
        >
          <a
            href={SCORE_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-primary btn-lg"
          >
            {SCORE_CTA}
          </a>
          <a href="mailto:info@tetranoodle.com" className="link-cta">
            Or talk to a person
          </a>
        </Reveal>
      </div>
    </section>
  );
}

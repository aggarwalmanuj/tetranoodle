import Link from "next/link";
import Image from "next/image";
import { Squiggle, Sparkle } from "./Doodles";
import Reveal from "./Reveal";
import { CONTACT_EMAIL, GOAL_CTA, GOAL_URL, PERSONAL_PREVIEW_URL } from "../lib/site";

type FooterLink = { label: string; href: string; external?: boolean };

const COLS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Expand · Equip · Evolve", href: "/#start" },
      { label: "What we deliver", href: "/services" },
      { label: "How it works", href: "/process" },
      { label: "Who we help", href: "/#editions" },
    ],
  },
  {
    title: "AI Merge",
    links: [
      { label: "Personal", href: "/#editions" },
      { label: "Team", href: "/#editions" },
      { label: "Enterprise", href: "/#editions" },
      { label: "Try the personal preview", href: PERSONAL_PREVIEW_URL, external: true },
    ],
  },
  {
    title: "TetraNoodle",
    links: [
      { label: "About & experience", href: "/about" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Participant reports", href: "/case-studies#personal" },
      { label: "Research & evidence", href: "/#experience" },
      { label: "Contact", href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      data-on-dark
      className="surface-ink relative overflow-hidden mx-[clamp(8px,1.2vw,16px)] mb-[clamp(8px,1.2vw,16px)] rounded-[var(--radius-sheet)]"
    >
      <div className="field" aria-hidden="true">
        <div className="dot-grid inset-0 opacity-60" />
      </div>

      <div className="field-content container-full px-6 lg:px-14 pt-16 lg:pt-24 pb-8">
        {/* Closing prompt */}
        <Reveal
          as="div"
          className="flex flex-wrap items-end justify-between gap-8 pb-14 lg:pb-20 mb-14 border-b border-[color:var(--color-hairline-dark)]"
        >
          <div className="max-w-[640px]">
            <p className="t-display-md balance">
              Technology for human authorship{" "}
              <span className="relative inline-block text-[color:var(--color-lime)]">
                in the age of AI.
                <Squiggle className="absolute -bottom-3 left-0 w-[46%] h-3 text-[color:var(--color-lime)]" strokeWidth={2.5} />
              </span>
            </p>
          </div>
          <a href={GOAL_URL} className="btn btn-lime btn-lg">
            {GOAL_CTA}
          </a>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 lg:gap-16">
          <div className="max-w-[340px]">
            <p className="flex items-center gap-2.5 text-[18px] font-semibold tracking-[-0.02em]">
              <Image
                src="/icons/bluelogo.png"
                alt=""
                width={28}
                height={28}
                className="w-7 h-7"
              />
              TetraNoodle
            </p>
            <p className="mt-4 text-[15px] leading-[1.6] text-[color:var(--color-on-dark-muted)]">
              Expanded Intelligence. Engineered around you. Building software
              since 2000, from Vancouver.
            </p>
          </div>

          {COLS.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <p className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[color:var(--color-on-dark-faint)] mb-5">
                {c.title}
              </p>
              <ul className="flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener"
                        className="text-[15px] text-[color:var(--color-on-dark)] hover:text-[color:var(--color-lime)] transition-colors"
                      >
                        {l.label} <span aria-hidden>↗</span>
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[15px] text-[color:var(--color-on-dark)] hover:text-[color:var(--color-lime)] transition-colors"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Oversized wordmark, cropped by the sheet edge */}
        <p
          aria-hidden="true"
          className="relative mt-20 lg:mt-28 mb-8 select-none font-semibold tracking-[-0.06em] leading-[0.8] text-[clamp(64px,15.5vw,236px)] text-[color:var(--color-dark-2)]"
        >
          TetraNoodle
          <Sparkle className="absolute top-[4%] right-[1%] w-[clamp(24px,3.6vw,52px)] text-[color:var(--color-lime)]" />
        </p>

        <div className="relative pt-6 border-t border-[color:var(--color-hairline-dark)] flex flex-wrap items-center justify-between gap-4 text-[13px] text-[color:var(--color-on-dark-faint)]">
          <p>© {new Date().getFullYear()} TetraNoodle Technologies. Vancouver, Canada</p>
          <p>AI Merge research published in Mensa Research Journal</p>
        </div>
      </div>
    </footer>
  );
}

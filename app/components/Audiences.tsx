"use client";

import { useState, useId, useRef, useEffect, KeyboardEvent } from "react";
import Image from "next/image";
import GlassCard from "./GlassCard";

type Audience = {
  id: string;
  tab: string;
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  outcomes: string[];
  href: string;
  image: string;
  imageAlt: string;
  quote: { text: string; name: string; role: string };
};

const AUDIENCES: Audience[] = [
  {
    id: "leaders",
    image: "/people/one.png",
    imageAlt: "A business leader working at a laptop in a bright office, looking at the camera.",
    tab: "Business Leaders",
    eyebrow: "For Business Leaders",
    title: (
      <>
        Your business performs at the level of{" "}
        <span className="accent-text">your nervous system.</span>
      </>
    ),
    body: (
      <>
        The leader <em>is</em> the nervous system of the business. Run on
        urgency, and every decision and every hire absorbs it. AI Merge works
        at the root: you, regulated, clear, sovereign.
      </>
    ),
    outcomes: [
      "Stop being the bottleneck everything routes through",
      "Decide from clarity instead of pressure",
      "Build a team that holds what you've built without you",
      "Break the pattern of recurring business problems",
      "Stay above the AI poverty line as the world accelerates",
    ],
    href: "#score",
    quote: {
      text: "The business stress became background noise instead of foreground problem. Less performance. More being.",
      name: "Mark Nazemi",
      role: "PhD · Co-Founder, Sensorium",
    },
  },
  {
    id: "individuals",
    image: "/people/two.png",
    imageAlt: "A confident professional standing in an office, arms crossed, looking at the camera.",
    tab: "Ambitious Individuals",
    eyebrow: "For Individuals",
    title: (
      <>
        You are not stuck because you lack{" "}
        <span className="accent-text">information.</span>
      </>
    ),
    body: (
      <>
        You are stuck because some part of your system does not yet feel safe
        enough to move. AI Merge finds the real pattern underneath the
        pressure, so you can stop fighting symptoms and build from the root.
      </>
    ),
    outcomes: [
      "Find your purpose, precisely, not vaguely",
      "Stop running on old stories about who you are",
      "Break the pattern that keeps showing up in different forms",
      "Build a life your body can actually move toward",
      "Unlock potential others haven't seen yet",
    ],
    href: "#score",
    quote: {
      text: "Thank you, thank you, thank you. I feel the transformation taking place gently. Something that was held is releasing.",
      name: "Dorota Hedzelek",
      role: "PhD · Registered Clinical Counsellor",
    },
  },
  {
    id: "enterprise",
    image: "/people/three.png",
    imageAlt: "A diverse team of professionals standing together, looking at the camera.",
    tab: "Enterprise & Teams",
    eyebrow: "For Enterprise & Teams",
    title: (
      <>
        Your AI strategy needs an enterprise that can{" "}
        <span className="accent-text">absorb it.</span>
      </>
    ),
    body: (
      <>
        AI adoption doesn&rsquo;t fail because people lack tools. It fails when
        the human system underneath runs on overload and fear. AI Merge builds
        the trusted human layer, so your AI creates clarity instead of noise.
      </>
    ),
    outcomes: [
      "Private AI vault: sensitive context stays yours",
      "Clearer decisions under pressure across the organization",
      "Teams that don't wait for the leader to decide everything",
      "AI adoption that compounds instead of fragments",
      "Measurable coherence across leaders and teams",
    ],
    href: "#score",
    quote: {
      text: "Something released that I hadn't known was held. It's a tool to free yourself, and once you're free, the business follows.",
      name: "Jill Carter",
      role: "Founder · Modern Pursuit Matchmaking",
    },
  },
  {
    id: "communities",
    image: "/people/image.png",
    imageAlt: "A community member seated calmly in a warm office space, looking at the camera.",
    tab: "Communities",
    eyebrow: "For Communities",
    title: (
      <>
        Coherent communities{" "}
        <span className="accent-text">outlast everything else.</span>
      </>
    ),
    body: (
      <>
        In civic institutions, firms, and congregations, the root patterns in
        the collective determine what can be held and transmitted. AI Merge
        reads the collective nervous system and cultivates what it needs to
        thrive.
      </>
    ),
    outcomes: [
      "Belonging that is genuine, not just functional",
      "Leadership that transmits clarity, not anxiety",
      "Collective intelligence that grows with the community",
      "Resilience that holds when things get hard",
      "Legacy that outlasts any single leader",
    ],
    href: "#score",
    quote: {
      text: "This is exactly the convergence: AI helping people find their divine intelligence. The two were always meant to meet.",
      name: "Gina",
      role: "Director · Pillai Center · 26 Years",
    },
  },
];

export default function Audiences() {
  const [active, setActive] = useState(0);
  const tablistId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Set tabindex per W3C tablist pattern
  useEffect(() => {
    tabRefs.current[active]?.focus({ preventScroll: true });
  }, [active]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % AUDIENCES.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + AUDIENCES.length) % AUDIENCES.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(AUDIENCES.length - 1);
    }
  };

  const current = AUDIENCES[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Choose your role"
        id={tablistId}
        className="flex flex-wrap gap-2 mb-12 lg:mb-16 border-b border-[color:var(--color-hairline-soft)]"
      >
        {AUDIENCES.map((a, i) => (
          <button
            key={a.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            id={`${tablistId}-tab-${i}`}
            aria-controls={`${tablistId}-panel-${i}`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={onKey}
            className={`relative px-4 sm:px-5 py-3 text-[13px] sm:text-[14px] tracking-[-0.01em] transition-colors -mb-px border-b-2 ${
              active === i
                ? "text-[color:var(--color-ink)] border-[color:var(--color-accent)]"
                : "text-[color:var(--color-body-muted)] border-transparent hover:text-[color:var(--color-ink)]"
            }`}
          >
            {a.tab}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${tablistId}-panel-${active}`}
        aria-labelledby={`${tablistId}-tab-${active}`}
        key={current.id}
        className="panel-in grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
      >
        <div className="reveal is-visible" style={{ transitionDelay: "0ms" }}>
          <p className="t-eyebrow mb-5">{current.eyebrow}</p>
          <h3 className="t-display-md balance mb-6">{current.title}</h3>
          <p className="t-lead pretty mb-8 max-w-[52ch]">{current.body}</p>
          <ul className="flex flex-col gap-3 mb-10">
            {current.outcomes.map((o) => (
              <li key={o} className="flex gap-3 t-body !text-[color:var(--color-body)]">
                <span
                  aria-hidden
                  className="mt-[10px] inline-block w-[18px] h-px shrink-0 bg-[color:var(--color-accent)]"
                />
                <span className="text-[16px] leading-[1.55]">{o}</span>
              </li>
            ))}
          </ul>
          <a href={current.href} className="link-cta">
            See your fit
          </a>
        </div>

        {/* Photo with the testimonial in a glass panel floating over it —
            glass-over-image is the canonical liquid-glass use case. */}
        <figure
          data-on-dark
          className="reveal is-visible relative rounded-[var(--radius-xl)] overflow-hidden aspect-[4/5] sm:aspect-[5/6] elevation-product"
          style={{ transitionDelay: "120ms" }}
        >
          <Image
            src={current.image}
            alt={current.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          />
          {/* Wrapper owns the absolute placement; the glass card stays
              position:relative (its specular layers anchor to it). */}
          <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
            <GlassCard interactive={false} className="p-5 sm:p-6">
              <blockquote className="text-[16px] sm:text-[18px] leading-[1.45] tracking-[-0.012em] text-[color:var(--color-on-dark)]">
                <span aria-hidden className="text-[color:var(--color-accent-sky)] mr-1">“</span>
                {current.quote.text}
                <span aria-hidden className="text-[color:var(--color-accent-sky)] ml-1">”</span>
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-[color:var(--color-hairline-dark)]">
                <p className="text-[13px] font-semibold tracking-[-0.01em] text-[color:var(--color-on-dark)]">
                  {current.quote.name}
                </p>
                <p className="text-[11px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-on-dark-faint)] mt-1">
                  {current.quote.role}
                </p>
              </figcaption>
            </GlassCard>
          </div>
        </figure>
      </div>
    </div>
  );
}

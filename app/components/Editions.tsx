"use client";

import { KeyboardEvent, useRef, useState } from "react";
import { CONTACT_EMAIL, PERSONAL_PREVIEW_URL } from "../lib/site";

type Edition = {
  key: string;
  tab: string;
  name: string;
  title: string;
  body: string;
  action: { label: string; href: string; external?: boolean };
  example: { goal: string; knowledge: string; support: string };
};

const talk = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const EDITIONS: Edition[] = [
  {
    key: "personal",
    tab: "Personal",
    name: "AI Merge Personal",
    title: "Accomplish more. Carry less.",
    body: "Explore goals and patterns through supported practice. Equip yourself with useful tools and keep developing.",
    action: {
      label: "Try the personal preview",
      href: PERSONAL_PREVIEW_URL,
      external: true,
    },
    example: {
      goal: "A leader’s priorities",
      knowledge: "Work, life and the decisions that matter",
      support: "Personalized practice and useful frameworks",
    },
  },
  {
    key: "team",
    tab: "Team",
    name: "AI Merge Team",
    title: "Unleash individual potential. Multiply collective power.",
    body: "Connect individual strengths, leadership knowledge and useful AI to help the team accomplish more.",
    action: { label: "Talk about your team", href: talk("AI Merge Team") },
    example: {
      goal: "A sales team’s customer conversations",
      knowledge: "Relevant customer history and team knowledge",
      support: "Preparation, shared judgment and approved follow-through",
    },
  },
  {
    key: "enterprise",
    tab: "Enterprise",
    name: "AI Merge Enterprise",
    title: "Turn institutional intelligence into enterprise value.",
    body: "Connect people, institutional knowledge and systems through tailored engineering and human-led AI.",
    action: {
      label: "Talk about your organization",
      href: talk("AI Merge Enterprise"),
    },
    example: {
      goal: "An institution’s operational decisions",
      knowledge: "Selected records and executive experience",
      support: "System integrations, permissions and scoped agents",
    },
  },
];

/**
 * Personal / Team / Enterprise as an accessible tab set (arrow keys, Home,
 * End). Each panel pairs the pitch with a worked "design example", so the
 * shared foundation reads as something concrete.
 */
export default function Editions() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number, focus = false) => {
    setActive(i);
    if (focus) tabs.current[i]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = EDITIONS.length - 1;
    const next =
      e.key === "ArrowRight" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowLeft" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    select(next, true);
  };

  const e = EDITIONS[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="AI Merge editions"
        className="flex gap-1 shadow-[inset_0_-1px_0_var(--color-hairline-dark)] overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {EDITIONS.map((ed, i) => {
          const selected = i === active;
          return (
            <button
              key={ed.key}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`edition-tab-${ed.key}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`edition-panel-${ed.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(ev) => onKey(ev, i)}
              className={`relative min-h-[52px] px-5 sm:px-7 text-[15px] font-semibold whitespace-nowrap transition-colors ${
                selected
                  ? "text-[color:var(--color-lime)]"
                  : "text-[color:var(--color-on-dark-faint)] hover:text-[color:var(--color-on-dark)]"
              }`}
            >
              <span className="mr-2 text-[11px] tabular-nums opacity-70">
                0{i + 1}
              </span>
              {ed.tab}
              <span
                aria-hidden
                className={`absolute left-0 right-0 bottom-0 h-[2px] bg-[color:var(--color-lime)] origin-left transition-transform duration-500 ease-[var(--ease-out)] ${
                  selected ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        key={e.key}
        id={`edition-panel-${e.key}`}
        role="tabpanel"
        aria-labelledby={`edition-tab-${e.key}`}
        tabIndex={0}
        className="panel-in grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-20 items-center pt-12 lg:pt-16"
      >
        <div>
          <p className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[color:var(--color-lime)] mb-5">
            {e.name}
          </p>
          <h3 className="t-display-sm !text-[clamp(28px,3vw,40px)] balance mb-6 max-w-[18ch]">
            {e.title}
          </h3>
          <p className="t-lead pretty max-w-[44ch] mb-9">{e.body}</p>
          <a
            href={e.action.href}
            {...(e.action.external ? { target: "_blank", rel: "noopener" } : {})}
            className="link-cta"
          >
            {e.action.label}
          </a>
        </div>

        <figure className="relative rounded-[var(--radius-lg)] bg-[color:var(--color-dark-2)] border border-white/[0.08] p-7 sm:p-9">
          <figcaption className="flex items-center justify-between pb-6 mb-2 border-b border-[color:var(--color-hairline-dark)] text-[12px] font-semibold tracking-[0.14em] uppercase text-[color:var(--color-on-dark-faint)]">
            Design example
            <span className="inline-flex items-center gap-2 normal-case tracking-normal font-medium">
              <span className="w-2 h-2 rounded-full bg-[color:var(--color-lime)] animate-pulse" />
              {e.tab}
            </span>
          </figcaption>
          <dl>
            {(
              [
                ["Goal", e.example.goal],
                ["Knowledge", e.example.knowledge],
                ["Support", e.example.support],
              ] as const
            ).map(([k, v], i) => (
              <div
                key={k}
                className="grid grid-cols-[110px_1fr] gap-4 py-5 border-b border-[color:var(--color-hairline-dark)] panel-in"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                <dt className="text-[14px] font-semibold text-[color:var(--color-on-dark-faint)]">
                  {k}
                </dt>
                <dd className="text-[17px] leading-[1.45] text-[color:var(--color-on-dark)]">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-xs)] border border-[color:var(--color-lime)]/40 px-3 py-1.5 text-[13px] text-[color:var(--color-lime)]">
            Shared AI Merge foundation · tailored to the work
          </p>
        </figure>
      </div>
    </div>
  );
}

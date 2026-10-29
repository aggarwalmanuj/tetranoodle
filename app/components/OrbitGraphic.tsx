import Image from "next/image";
import { CSSProperties, ReactNode } from "react";

/**
 * The hero diagram: your goal at the core, with people, knowledge, AI,
 * systems and new possibilities in orbit around it. Three tilted rings
 * hold still while two satellite layers turn slowly in opposite
 * directions, and the labels bob on staggered timings so the scene never
 * moves in lockstep. All motion stops under prefers-reduced-motion.
 */
const LABELS: {
  text: string;
  pos: CSSProperties;
  delay: string;
  icon: ReactNode;
}[] = [
  { text: "People", pos: { top: "6%", left: "40%" }, delay: "0s", icon: <PeopleIcon /> },
  { text: "Knowledge", pos: { top: "30%", right: "0%" }, delay: "-1.6s", icon: <BookIcon /> },
  { text: "AI", pos: { bottom: "20%", right: "8%" }, delay: "-3.1s", icon: <SparkIcon /> },
  { text: "Systems", pos: { bottom: "26%", left: "0%" }, delay: "-4.4s", icon: <GridIcon /> },
  { text: "New possibilities", pos: { top: "24%", left: "0%" }, delay: "-2.2s", icon: <ArrowIcon /> },
];

export default function OrbitGraphic() {
  return (
    <figure className="relative">
      <div className="orbit-stage" aria-hidden="true">
        <span className="orbit-ring r1" />
        <span className="orbit-ring r2" />
        <span className="orbit-ring r3" />

        {/* Satellites riding the outer path */}
        <div className="orbit-spin">
          <span className="orbit-sat" style={{ top: "11%", left: "49%" }} />
          <span className="orbit-sat !bg-[color:var(--color-accent)] !w-2 !h-2" style={{ bottom: "14%", left: "30%" }} />
        </div>
        <div className="orbit-spin slow">
          <span className="orbit-sat !w-2.5 !h-2.5" style={{ top: "48%", right: "10%" }} />
          <span className="orbit-sat !bg-[color:var(--color-ink)] !w-2 !h-2" style={{ top: "30%", left: "14%" }} />
        </div>

        <div className="orbit-core">
          <span className="orbit-pulse" />
          <span className="orbit-pulse" style={{ animationDelay: "1.6s" }} />
          <span className="relative grid place-items-center gap-1.5">
            <Image
              src="/icons/output-onlinepngtools (2).png"
              alt=""
              width={36}
              height={40}
              className="w-[clamp(24px,2.4vw,32px)] h-auto opacity-95"
            />
            <span className="text-[clamp(15px,1.5vw,19px)] font-semibold leading-[1.1] tracking-[-0.01em]">
              Your
              <br />
              goal
            </span>
          </span>
        </div>

        {LABELS.map((l) => (
          <span
            key={l.text}
            className="orbit-label"
            style={{ ...l.pos, animationDelay: l.delay }}
          >
            <i>{l.icon}</i>
            {l.text}
          </span>
        ))}
      </div>
      <figcaption className="mt-2 text-center text-[11px] font-semibold tracking-[0.22em] text-[color:var(--color-body-faint)]">
        INTELLIGENCE, MADE USEFUL.
      </figcaption>
    </figure>
  );
}

/* 12px glyphs inside the label dots. Drawn, not emoji. */
const glyph = {
  viewBox: "0 0 16 16",
  width: 11,
  height: 11,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
function PeopleIcon() {
  return (
    <svg {...glyph}>
      <circle cx="6" cy="5.5" r="2.5" />
      <path d="M1.5 14c.6-2.6 2.3-4 4.5-4s3.9 1.4 4.5 4" />
      <path d="M11 3.2a2.4 2.4 0 0 1 0 4.6M12.5 10.3c1 .6 1.7 1.8 2 3.7" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg {...glyph}>
      <path d="M8 4c-1.6-1.2-3.8-1.5-6-1v10c2.2-.5 4.4-.2 6 1 1.6-1.2 3.8-1.5 6-1V3c-2.2-.5-4.4-.2-6 1z" />
      <path d="M8 4v10" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg {...glyph}>
      <path d="M8 1.5c.4 3.4 1.7 4.9 5.5 5.5-3.8.6-5.1 2.1-5.5 5.5C7.6 9.1 6.3 7.6 2.5 7 6.3 6.4 7.6 4.9 8 1.5z" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg {...glyph}>
      <rect x="2" y="2" width="5" height="5" rx="1.2" />
      <rect x="9" y="2" width="5" height="5" rx="1.2" />
      <rect x="2" y="9" width="5" height="5" rx="1.2" />
      <rect x="9" y="9" width="5" height="5" rx="1.2" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg {...glyph}>
      <path d="M3 13 13 3M6 3h7v7" />
    </svg>
  );
}

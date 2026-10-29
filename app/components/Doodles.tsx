import { CSSProperties, ReactNode } from "react";

/**
 * Hand-drawn marks: underlines, circles, arrows, sparkles. Each path uses
 * pathLength="1" so the .doodle rules in globals.css can draw it in once
 * a parent .reveal becomes visible. Decorative only: hidden from AT.
 */

type DoodleProps = {
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
};

/** Underlines and circles stretch to fit the word they mark. */
function Svg({
  viewBox,
  className = "",
  style,
  strokeWidth = 3,
  stretch = false,
  children,
}: DoodleProps & { viewBox: string; stretch?: boolean; children: ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      className={`doodle ${className}`}
      style={style}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio={stretch ? "none" : undefined}
    >
      {children}
    </svg>
  );
}

/** Two quick strokes under a word, the second fainter. */
export function Underline(props: DoodleProps) {
  return (
    <Svg viewBox="0 0 200 20" stretch {...props}>
      <path pathLength={1} d="M3 13 C 40 6, 90 4, 130 8 S 185 12, 197 7" />
      <path
        pathLength={1}
        d="M24 17 C 70 12, 130 12, 178 14"
        style={{ "--d": 260, opacity: 0.55 } as CSSProperties}
      />
    </Svg>
  );
}

/** A loose loop drawn around a word, overshooting where it closes. */
export function Circle(props: DoodleProps) {
  return (
    <Svg viewBox="0 0 200 80" stretch {...props}>
      <path
        pathLength={1}
        d="M150 8 C 110 0, 40 4, 14 24 C -6 42, 20 70, 90 74 C 160 78, 198 58, 192 34 C 187 14, 140 6, 96 8 C 70 9, 52 12, 40 16"
      />
    </Svg>
  );
}

/** Curly arrow with a loop, pointing right-down. */
export function Arrow(props: DoodleProps) {
  return (
    <Svg viewBox="0 0 120 80" {...props}>
      <path
        pathLength={1}
        d="M6 10 C 30 4, 52 14, 50 34 C 48 50, 30 52, 32 40 C 34 26, 64 30, 80 46 C 90 56, 100 64, 112 68"
      />
      <path
        pathLength={1}
        d="M96 72 L 113 68 L 107 53"
        style={{ "--d": 700 } as CSSProperties}
      />
    </Svg>
  );
}

/** Wavy line, for dividers and margins. */
export function Squiggle(props: DoodleProps) {
  return (
    <Svg viewBox="0 0 104 24" {...props}>
      <path
        pathLength={1}
        d="M2 12 Q 12 0, 22 12 T 42 12 T 62 12 T 82 12 T 102 12"
      />
    </Svg>
  );
}

/** Three short emphasis strokes, like a sketcher's "look here". */
export function Burst(props: DoodleProps) {
  return (
    <Svg viewBox="0 0 40 40" {...props}>
      <path pathLength={1} d="M8 30 L 2 22" />
      <path pathLength={1} d="M20 24 L 19 8" style={{ "--d": 120 } as CSSProperties} />
      <path pathLength={1} d="M31 29 L 38 18" style={{ "--d": 240 } as CSSProperties} />
    </Svg>
  );
}

/** A four-point sparkle. Filled, so it twinkles instead of drawing. */
export function Sparkle({
  className = "",
  style,
}: Omit<DoodleProps, "strokeWidth">) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`overflow-visible ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="twinkle"
        fill="currentColor"
        d="M20 1 C 21 13, 27 19, 39 20 C 27 21, 21 27, 20 39 C 19 27, 13 21, 1 20 C 13 19, 19 13, 20 1 Z"
      />
    </svg>
  );
}

/** Architect's sketch of a tower, with a dimension line and a compass. */
export function Blueprint(props: DoodleProps) {
  const d = (n: number) => ({ "--d": n }) as CSSProperties;
  return (
    <Svg viewBox="0 0 170 210" strokeWidth={2} {...props}>
      <path pathLength={1} d="M8 196 L 162 196" />
      <path pathLength={1} d="M52 196 L 52 46 L 112 46 L 112 196" style={d(80)} />
      <path pathLength={1} d="M70 46 L 82 22 L 94 46 M 82 22 L 82 6" style={d(200)} />
      <path pathLength={1} d="M52 76 L 112 76 M 52 106 L 112 106 M 52 136 L 112 136 M 52 166 L 112 166" style={d(320)} />
      <path pathLength={1} d="M72 46 L 72 196 M 92 46 L 92 196" style={d(440)} />
      <path pathLength={1} d="M112 120 L 144 120 L 144 196" style={d(520)} />
      <path pathLength={1} d="M30 46 L 30 196 M 24 46 L 36 46 M 24 196 L 36 196" style={d(620)} />
      <circle pathLength={1} cx="142" cy="36" r="14" style={d(720)} />
      <path pathLength={1} d="M142 18 L 142 54 M 124 36 L 160 36" style={d(820)} />
    </Svg>
  );
}

/** Word with a doodle drawn under it. */
export function Underlined({
  children,
  className = "text-[color:var(--color-lime-deep)]",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className="doodle-word">
      {children}
      <Underline className={`doodle-under ${className}`} strokeWidth={4} />
    </span>
  );
}

/** Word with a loose circle drawn around it. */
export function Circled({
  children,
  className = "text-[color:var(--color-accent)]",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className="doodle-word">
      {children}
      <Circle className={`doodle-circle ${className}`} strokeWidth={2.5} />
    </span>
  );
}

"use client";

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useRef,
} from "react";

type GlassCardProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Track the pointer to drift the specular highlight. Default true. */
  interactive?: boolean;
};

/**
 * An elevated liquid-glass surface.
 *
 * Why glass here: these are *elevated* information layers (concept
 * tiles, industry cards, quote panels) floating above the living
 * field — not body reading surfaces. The pointer drives a specular
 * sheen so the material reads as refractive glass, not a flat filter.
 *
 * Motion intent: the highlight drifts toward the cursor and the card
 * settles on a spring; on press it scales 0.99. All of it is skipped
 * for prefers-reduced-motion (the listener bails; CSS pins the card).
 */
export default function GlassCard({
  children,
  as,
  className = "",
  style,
  interactive = true,
}: GlassCardProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const raf = useRef(0);

  const onPointerMove = (e: React.PointerEvent) => {
    if (!interactive) return;
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      const r = node.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      node.style.setProperty("--mx", `${mx}%`);
      node.style.setProperty("--my", `${my}%`);
    });
  };

  const onPointerLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.removeProperty("--mx");
    node.style.removeProperty("--my");
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={interactive ? onPointerMove : undefined}
      onPointerLeave={interactive ? onPointerLeave : undefined}
      className={`glass glass-card glass--specular ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}

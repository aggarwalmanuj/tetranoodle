"use client";

import { useEffect } from "react";

/**
 * M3 touch ripple: one delegated pointerdown listener for every button,
 * chip and nav pill, instead of wiring each component. Skipped entirely
 * for prefers-reduced-motion. Renders nothing.
 */
export default function Ripple() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onDown = (e: PointerEvent) => {
      if (reduce.matches || e.button !== 0) return;
      const host = (e.target as Element | null)?.closest<HTMLElement>(
        ".btn, .chip, .nav-link"
      );
      if (!host) return;
      const r = host.getBoundingClientRect();
      const size = Math.hypot(r.width, r.height) * 2;
      const dot = document.createElement("span");
      dot.className = "ripple";
      dot.style.width = dot.style.height = `${size}px`;
      dot.style.left = `${e.clientX - r.left - size / 2}px`;
      dot.style.top = `${e.clientY - r.top - size / 2}px`;
      host.appendChild(dot);
      dot.addEventListener("animationend", () => dot.remove(), { once: true });
    };
    document.addEventListener("pointerdown", onDown, { passive: true });
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  return null;
}

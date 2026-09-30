"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  /** Final numeric value to count to. */
  value: number;
  /** Text shown before the number (e.g. "$"). */
  prefix?: string;
  /** Text shown after the number (e.g. "M+", "+"). */
  suffix?: string;
  /** Animation duration in ms. */
  duration?: number;
  className?: string;
};

/**
 * Counts a number up from 0 to `value` when it scrolls into view.
 *
 * The final value is what renders on the server, so crawlers, link
 * previews and no-JS visitors read the real figure (not "0M+"). The
 * client resets it to 0 and animates by writing the text node directly,
 * without a React re-render per frame. Reduced motion keeps the final value.
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    const write = (n: number) => {
      node.textContent = `${prefix}${n.toLocaleString()}${suffix}`;
    };
    write(0);

    let raf = 0;
    let start = 0;
    const run = (now: number) => {
      if (!start) start = now;
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic for a natural settle
      write(Math.round((1 - Math.pow(1 - t, 3)) * value));
      if (t < 1) raf = requestAnimationFrame(run);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            raf = requestAnimationFrame(run);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      write(value);
    };
  }, [value, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

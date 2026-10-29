"use client";

import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  createElement,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  children: ReactNode;
  /** Milliseconds delay before the element animates in. */
  delay?: number;
  /** Tag to render as. Defaults to "div". */
  as?: "div" | "section" | "article" | "p" | "span" | "h1" | "h2" | "h3" | "h4" | "li" | "ol" | "ul" | "dl" | "a" | "figure" | "blockquote";
  className?: string;
  style?: CSSProperties;
  href?: string;
  /** Pass-through data attributes (e.g. data-on-dark). */
  [data: `data-${string}`]: unknown;
};

/**
 * Lightweight scroll-reveal. IntersectionObserver based.
 * Motion intent: confirm content has entered view, and trigger any
 * doodles or highlighter marks inside it to draw in.
 * prefers-reduced-motion fallback lives in globals.css.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  // Once the entrance has played, drop the delay so hover transitions on
  // the same element (cards lifting, etc.) respond immediately.
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = window.setTimeout(() => setSettled(true), delay + 1000);
    return () => window.clearTimeout(t);
  }, [visible, delay]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -64px 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: `reveal ${visible ? "is-visible" : ""} ${className}`.trim(),
      style: settled ? style : { transitionDelay: `${delay}ms`, ...style },
    },
    children
  );
}

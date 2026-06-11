"use client";

import {
  CSSProperties,
  ReactNode,
  createElement,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Milliseconds delay before the element animates in. */
  delay?: number;
  /** Tag to render as. Defaults to "div". */
  as?: "div" | "section" | "article" | "p" | "span" | "h1" | "h2" | "h3" | "h4" | "li" | "a" | "figure" | "blockquote";
  className?: string;
  style?: CSSProperties;
  href?: string;
};

/**
 * Lightweight scroll-reveal. IntersectionObserver based.
 * Motion intent: confirm content has entered view — nothing decorative.
 * prefers-reduced-motion fallback lives in globals.css.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  style,
  href,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

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
      ref,
      href,
      className: `reveal ${visible ? "is-visible" : ""} ${className}`.trim(),
      style: { transitionDelay: `${delay}ms`, ...style },
    },
    children
  );
}

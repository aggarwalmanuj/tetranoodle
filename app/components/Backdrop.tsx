"use client";

import { useEffect, useRef } from "react";

type BackdropProps = {
  /** Visual variant — light field or dark field. */
  tone?: "light" | "dark";
  /** Enable subtle pointer parallax on the blobs. */
  parallax?: boolean;
  className?: string;
};

/**
 * Living background field for glass to refract against.
 *
 * Why this exists: glass over a flat color reads as plastic. Soft,
 * slow-drifting emerald blobs + a faint noise grain give the surfaces
 * something to bend light through. The blobs also ease toward the
 * pointer (parallax) so the page feels alive without distracting.
 *
 * Accessibility: parallax + drift are CSS-driven and disabled under
 * prefers-reduced-motion (see globals.css). The pointer listener
 * additionally bails out for reduced-motion users, so no work runs.
 */
export default function Backdrop({
  tone = "light",
  parallax = false,
  className = "",
}: BackdropProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parallax) return;
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const { innerWidth: w, innerHeight: h } = window;
        // -1 … 1, scaled to a gentle pixel offset per layer
        const dx = (e.clientX / w - 0.5) * 2;
        const dy = (e.clientY / h - 0.5) * 2;
        node.style.setProperty("--px", `${dx * 18}px`);
        node.style.setProperty("--py", `${dy * 18}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parallax]);

  return (
    <div ref={ref} className={`field ${className}`} aria-hidden="true">
      {tone === "light" ? (
        <>
          <span
            className="blob blob-a"
            style={{ width: "46vw", height: "46vw", top: "-12vw", left: "-6vw" }}
          />
          <span
            className="blob blob-b"
            style={{ width: "40vw", height: "40vw", top: "8vw", right: "-10vw", opacity: 0.42 }}
          />
          <span
            className="blob blob-c"
            style={{ width: "30vw", height: "30vw", bottom: "-12vw", left: "20vw", opacity: 0.3 }}
          />
        </>
      ) : (
        <>
          <span
            className="blob blob-c"
            style={{ width: "44vw", height: "44vw", top: "-10vw", right: "-8vw", opacity: 0.22 }}
          />
          <span
            className="blob blob-a"
            style={{ width: "36vw", height: "36vw", bottom: "-14vw", left: "-8vw", opacity: 0.18 }}
          />
        </>
      )}
      <span className="noise" />
    </div>
  );
}

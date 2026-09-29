"use client";

import { useEffect, useSyncExternalStore } from "react";
import { UI_STORAGE_KEY, type Ui } from "../lib/ui";

const read = (): Ui =>
  document.documentElement.getAttribute("data-ui") === "classic"
    ? "classic"
    : "m3";

const subscribe = (onChange: () => void) => {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-ui"],
  });
  return () => mo.disconnect();
};

function setUi(next: Ui) {
  const root = document.documentElement;
  if (next === "classic") root.setAttribute("data-ui", "classic");
  else root.removeAttribute("data-ui");
  try {
    localStorage.setItem(UI_STORAGE_KEY, next);
  } catch {
    // Private mode / blocked storage: the switch still works for this view.
  }
}

const OPTIONS: { value: Ui; label: string }[] = [
  { value: "m3", label: "New" },
  { value: "classic", label: "Classic" },
];

/**
 * Floating A/B switch for comparing the Material 3 redesign against the
 * original UI on any page. Deliberately styled the same in both modes
 * (inverse surface) so it reads as review tooling, not site chrome.
 */
export default function UiToggle() {
  const ui = useSyncExternalStore(subscribe, read, () => "m3" as Ui);

  // M3 touch ripple — one delegated listener for every button, tab and
  // nav pill. Only active in the new UI; skipped for reduced motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onDown = (e: PointerEvent) => {
      if (read() !== "m3" || reduce.matches || e.button !== 0) return;
      const host = (e.target as Element | null)?.closest<HTMLElement>(
        ".btn, [role='tab'], .nav-link, .ui-toggle-option"
      );
      if (!host) return;
      const r = host.getBoundingClientRect();
      const size = Math.hypot(r.width, r.height) * 2;
      const dot = document.createElement("span");
      dot.className = "m3-ripple";
      dot.style.width = dot.style.height = `${size}px`;
      dot.style.left = `${e.clientX - r.left - size / 2}px`;
      dot.style.top = `${e.clientY - r.top - size / 2}px`;
      host.appendChild(dot);
      dot.addEventListener("animationend", () => dot.remove(), { once: true });
    };
    document.addEventListener("pointerdown", onDown, { passive: true });
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  return (
    <div className="ui-toggle" role="group" aria-label="Interface version">
      <span className="ui-toggle-label" aria-hidden>
        UI
      </span>
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={ui === o.value}
          onClick={() => setUi(o.value)}
          className="ui-toggle-option"
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

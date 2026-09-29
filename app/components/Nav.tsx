"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SCORE_CTA, SCORE_URL } from "../lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

/**
 * Primary navigation: an M3 top app bar. Flat on the page surface at rest,
 * it steps up to surface-container once content scrolls beneath it (the
 * M3 "scrolled" state) instead of casting a shadow. A linear progress bar
 * tracks scroll position as a quiet sense of place.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(Math.max(y / max, 0), 1) : 0;
        // Write the bar directly to the DOM: no React re-render per frame.
        if (progressRef.current) {
          progressRef.current.style.width = `${ratio * 100}%`;
        }
        setScrolled(y > 12);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="app-bar fixed inset-x-0 top-0 z-50"
      role="banner"
      data-scrolled={scrolled}
    >
      <nav
        aria-label="Primary"
        className="container-wide flex items-center justify-between px-6 lg:px-12 h-16"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 group rounded-md"
          aria-label="TetraNoodle home"
        >
          <Image
            src="/icons/bluelogo.png"
            alt=""
            width={28}
            height={28}
            priority
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          />
          <span className="text-[15px] font-semibold tracking-[-0.015em]">
            TetraNoodle
          </span>
          <span className="hidden sm:inline text-[13px] text-[color:var(--color-body-faint)] font-semibold">
            AI Merge
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active =
              pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link block ${active ? "nav-link-active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <a
            href={SCORE_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-primary btn-sm"
          >
            Get Your Score
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-[color:var(--color-ink)] hover:bg-[color:var(--color-accent)]/[0.08] transition-colors"
          >
            <span
              aria-hidden
              className={`block w-4 h-[1.5px] bg-current relative transition-all duration-300 ${
                open
                  ? "rotate-45 before:rotate-90 before:top-0 after:opacity-0"
                  : ""
              } before:absolute before:left-0 before:-top-[5px] before:w-4 before:h-[1.5px] before:bg-current before:transition-all after:absolute after:left-0 after:top-[5px] after:w-4 after:h-[1.5px] after:bg-current after:transition-all`}
            />
          </button>
        </div>
      </nav>

      <span ref={progressRef} aria-hidden className="scroll-progress" />

      {/* Mobile sheet: slides open on a height spring. */}
      <div
        id="mobile-nav"
        data-open={open}
        inert={!open}
        className="mobile-tray lg:hidden"
      >
        <div className="mobile-tray-clip">
          <ul className="mobile-sheet px-6 py-4 flex flex-col gap-1">
            {links.map((l) => {
              const active =
                pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block px-3 py-3.5 text-[16px] border-b border-[color:var(--color-hairline-soft)] transition-colors ${
                      active
                        ? "text-[color:var(--color-accent)] font-medium"
                        : "text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <a
                href={SCORE_URL}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                {SCORE_CTA}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

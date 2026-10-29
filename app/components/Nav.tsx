"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GOAL_CTA, GOAL_URL } from "../lib/site";

const links = [
  { href: "/process", label: "How it works" },
  { href: "/services", label: "What we do" },
  { href: "/#editions", label: "Who we help" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

/**
 * Primary navigation. Transparent over the paper at rest; once content
 * scrolls beneath it, it frosts and gains a hairline. A thin indigo bar
 * tracks reading progress.
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
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      className="app-bar fixed inset-x-0 top-0 z-50"
      data-scrolled={scrolled || open}
    >
      <nav
        aria-label="Primary"
        className="container-wide flex items-center justify-between gap-6 px-5 sm:px-6 lg:px-8 h-[72px]"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="TetraNoodle home"
        >
          <Image
            src="/icons/bluelogo.png"
            alt=""
            width={30}
            height={30}
            priority
            className="w-[30px] h-[30px] transition-transform duration-500 ease-[var(--ease-spring)] group-hover:rotate-[18deg]"
          />
          <span className="text-[17px] font-semibold tracking-[-0.02em]">
            TetraNoodle
          </span>
        </Link>

        <ul className="hidden lg:flex items-center">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link ${active ? "nav-link-active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href={GOAL_URL} className="btn btn-primary btn-sm hidden sm:inline-flex">
            {GOAL_CTA}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[var(--radius-sm)] border border-[color:var(--color-hairline)] bg-[color:var(--color-pearl)] text-[color:var(--color-ink)]"
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

      <div
        id="mobile-nav"
        data-open={open}
        inert={!open}
        className="mobile-tray lg:hidden"
      >
        <div className="mobile-tray-clip">
          <ul className="mobile-sheet px-5 sm:px-6 pt-2 pb-6 flex flex-col">
            {links.map((l, i) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-baseline justify-between py-4 text-[22px] font-semibold tracking-[-0.02em] border-b border-[color:var(--color-hairline)] transition-colors ${
                      active
                        ? "text-[color:var(--color-accent)]"
                        : "text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)]"
                    }`}
                  >
                    {l.label}
                    <span className="text-[12px] font-semibold text-[color:var(--color-body-faint)] tabular-nums">
                      0{i + 1}
                    </span>
                  </Link>
                </li>
              );
            })}
            <li className="pt-6">
              <a
                href={GOAL_URL}
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                {GOAL_CTA}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

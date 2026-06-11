"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

/**
 * Primary navigation: a floating glass bar.
 * Glass lets the green field show through and refract, reinforcing
 * depth without competing with content. A thin accent bar tracks
 * scroll progress as a quiet sense of place.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 12);
        setProgress(max > 0 ? (y / max) * 100 : 0);
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
      className={`fixed inset-x-0 top-0 z-50 nav-glass transition-[box-shadow,background-color] duration-300 ${
        scrolled ? "shadow-[0_8px_30px_-12px_rgba(8,40,24,0.18)]" : ""
      }`}
      role="banner"
    >
      <nav
        aria-label="Primary"
        className="container-full flex items-center justify-between px-6 lg:px-12 h-16"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 group rounded-md"
          aria-label="TetraNoodle home"
        >
          <span className="relative w-7 h-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Image
              src="/icons/greenlogo.png"
              alt=""
              width={28}
              height={28}
              priority
              className="logo-emerald w-7 h-7"
            />
            <Image
              src="/icons/bluelogo.png"
              alt=""
              width={28}
              height={28}
              priority
              className="logo-indigo w-7 h-7"
            />
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.015em]">
            TetraNoodle
          </span>
          <span className="hidden sm:inline text-[11px] font-mono tracking-[0.14em] text-[color:var(--color-body-faint)] uppercase">
            AI Merge
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link block">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <a
            href="/#score"
            className="btn btn-primary !py-2 !px-4 !text-[13px] !min-h-0"
          >
            Get Your Score
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[color:var(--color-ink)] hover:bg-black/[0.04] transition-colors"
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

      <span aria-hidden className="scroll-progress" style={{ ["--progress" as string]: `${progress}%` }} />

      {/* Mobile tray — glass panel sliding in beneath the bar */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="lg:hidden glass glass-strong border-x-0 border-b-0 rounded-b-[var(--radius-xl)]"
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3.5 text-[16px] text-[color:var(--color-ink)] border-b border-[color:var(--color-hairline-soft)] hover:text-[color:var(--color-accent)] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="/#score"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Get Your Unfair Advantage Score
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

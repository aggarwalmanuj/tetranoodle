import Link from "next/link";
import Image from "next/image";

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "What we build", href: "/services" },
      { label: "How it works", href: "/process" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Get your score", href: "/#score" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Business leaders", href: "/#for-you" },
      { label: "Individuals", href: "/#for-you" },
      { label: "Enterprise & teams", href: "/#for-you" },
      { label: "Communities", href: "/#for-you" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Manuj", href: "/about" },
      { label: "Partnerships", href: "mailto:info@tetranoodle.com" },
      { label: "Speaking", href: "mailto:info@tetranoodle.com" },
      { label: "Contact", href: "mailto:info@tetranoodle.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="surface-parchment border-t border-[color:var(--color-hairline-soft)]">
      <div className="container-full px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-14">
          <div className="max-w-[360px]">
            <p className="text-[15px] font-semibold tracking-[-0.015em] flex items-center gap-2">
              <span className="relative w-6 h-6">
                <Image
                  src="/icons/greenlogo.png"
                  alt=""
                  width={24}
                  height={24}
                  className="logo-emerald w-6 h-6"
                />
                <Image
                  src="/icons/bluelogo.png"
                  alt=""
                  width={24}
                  height={24}
                  className="logo-indigo w-6 h-6"
                />
              </span>
              TetraNoodle
            </p>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-accent)] mt-2 mb-4">
              AI Merge · Root-cause intelligence
            </p>
            <p className="text-[14px] leading-[1.55] text-[color:var(--color-body-muted)]">
              Automation and private AI vaults for operations that can&rsquo;t
              run on commodity tools. Built on the peer-reviewed AI Merge
              protocol in Vancouver.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-body-faint)] mb-4">
                {c.title}
              </p>
              <ul className="flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline" />
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[12px] text-[color:var(--color-body-faint)] tracking-[-0.005em]">
            © {new Date().getFullYear()} TetraNoodle Technologies. AI Merge
            published in Mensa Research Journal Vol. 56, No. 2.
          </p>
          <p className="text-[12px] text-[color:var(--color-body-faint)]">
            Vancouver, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

/**
 * Credibility strip directly under the hero: one plain sentence, the four
 * marks it names, and a way to meet the team. Logos sit in monochrome so
 * they read as one calm group, lifting to colour on hover.
 */
const PARTNERS = [
  { src: "/logos/microsoft.png", alt: "Microsoft", w: 26, h: 26, name: "Microsoft" },
  { src: "/logos/ibm.png", alt: "IBM", w: 60, h: 24 },
  { src: "/logos/pearson.png", alt: "Pearson", w: 24, h: 26, name: "Pearson" },
  { src: "/logos/tmobile.png", alt: "T-Mobile", w: 26, h: 26, name: "T-Mobile" },
];

export default function Partners() {
  return (
    <section aria-label="Experience" className="px-5 sm:px-6 lg:px-8">
      <Reveal
        as="div"
        className="container-wide border-y border-[color:var(--color-hairline)] py-7 lg:py-8 grid lg:grid-cols-[minmax(0,320px)_1fr_auto] items-center gap-x-12 gap-y-6"
      >
        <p className="text-[16px] font-semibold leading-[1.45] tracking-[-0.01em] balance">
          Delivered projects with teams at Microsoft, IBM, Pearson and
          T-Mobile.
        </p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-5">
          {PARTNERS.map((p) => (
            <li key={p.alt} className="partner-logo flex items-center gap-2.5">
              <Image
                src={p.src}
                alt={p.name ? "" : p.alt}
                width={p.w}
                height={p.h}
                className="h-6 w-auto"
                style={{ width: "auto" }}
              />
              {p.name && (
                <span className="text-[16px] font-semibold tracking-[-0.02em]">
                  {p.name}
                </span>
              )}
            </li>
          ))}
        </ul>
        <Link href="/about" className="link-cta justify-self-start">
          Meet TetraNoodle
        </Link>
      </Reveal>
    </section>
  );
}

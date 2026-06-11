import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Partner / credibility logo band.
 * Logos rest in a single quiet row, monochrome at rest so they read as
 * one calm group, lifting to full color on hover. Honest, minimal trust
 * signal — no card chrome competing with the marks.
 */
const PARTNERS = [
  { src: "/logos/ibm.png", alt: "IBM", w: 80, h: 32 },
  { src: "/logos/microsoft.png", alt: "Microsoft", w: 34, h: 34 },
  { src: "/logos/pearson.png", alt: "Pearson", w: 32, h: 34 },
  { src: "/logos/tmobile.png", alt: "T-Mobile", w: 34, h: 34 },
  { src: "/logos/un.png", alt: "United Nations", w: 38, h: 34 },
];

export default function Partners() {
  return (
    <section aria-label="Partners" className="surface-canvas py-14 lg:py-20 px-6 lg:px-12">
      <div className="container-wide text-center">
        <Reveal as="p" className="t-eyebrow mb-9">
          Trusted by teams at
        </Reveal>
        <Reveal
          as="div"
          delay={80}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16"
        >
          {PARTNERS.map((p) => (
            <Image
              key={p.alt}
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              className="partner-logo h-7 sm:h-8 w-auto"
              style={{ width: "auto" }}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

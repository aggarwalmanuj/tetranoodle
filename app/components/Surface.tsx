import { CSSProperties, ElementType, ReactNode } from "react";

type SurfaceProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

/**
 * A flat M3 container: surface-container-lowest with a hairline outline on
 * light sections, a tonal dark container inside [data-on-dark]. Modifier
 * classes (media-frame, cta-card) turn it into image frames or CTA blocks.
 */
export default function Surface({
  children,
  as,
  className = "",
  style,
}: SurfaceProps) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag className={`surface-card ${className}`} style={style}>
      {children}
    </Tag>
  );
}

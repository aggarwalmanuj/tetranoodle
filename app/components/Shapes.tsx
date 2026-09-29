/**
 * Material 3 Expressive shapes that sit behind hero and CTA content: a
 * large "cookie" in primary-container and a small "flower" in tertiary.
 * They rotate slowly (paused for prefers-reduced-motion in globals.css).
 * Decorative only: hidden from assistive tech and never interactive.
 */
export default function Shapes() {
  return (
    <div className="field" aria-hidden="true">
      <span className="m3-shape m3-shape-cookie" />
      <span className="m3-shape m3-shape-flower" />
    </div>
  );
}

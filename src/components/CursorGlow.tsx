import { useEffect, useRef } from "react";

/**
 * Soft cursor halo — updates a single element's transform via rAF.
 * Only active on fine pointers with motion allowed. No React state.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = -999;
    let ty = -999;
    let x = tx;
    let y = ty;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(step);
    };
    const step = () => {
      raf = 0;
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x - 260}px, ${y - 260}px, 0)`;
      el.style.opacity = "1";
      if (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5)
        raf = requestAnimationFrame(step);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 h-[520px] w-[520px] opacity-0 transition-opacity duration-500"
      style={{
        background: "radial-gradient(circle, rgba(79,127,255,0.09), transparent 60%)",
      }}
    />
  );
}

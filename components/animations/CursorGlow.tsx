"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle radial glow that follows the cursor across the whole page.
 * Purely CSS/canvas — no framer-motion overhead.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tx = -999, ty = -999;
    let cx = -999, cy = -999;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      // Smooth lerp
      cx += (tx - cx) * 0.1;
      cy += (ty - cy) * 0.1;
      el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[400px] w-[400px] rounded-full opacity-[0.06]"
      style={{
        background:
          "radial-gradient(circle, rgba(0,229,255,1) 0%, rgba(139,92,246,0.4) 50%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}

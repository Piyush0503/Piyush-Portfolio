"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin accent-colored progress bar fixed at the very top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00e5ff 0%, #8b5cf6 50%, #c084fc 100%)",
        boxShadow: "0 0 12px rgba(0,229,255,0.6)",
      }}
    />
  );
}

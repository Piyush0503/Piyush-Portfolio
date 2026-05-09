"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** "fade" (default) | "blur" — blur adds a defocus effect on entry */
  variant?: "fade" | "blur";
};

/** Fades/slides in when the element enters the viewport (once). */
export function Reveal({ children, className, delay = 0, y = 28, variant = "fade" }: RevealProps) {
  const reduce = useReducedMotion();

  const initial =
    reduce
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : variant === "blur"
        ? { opacity: 0, y: y * 0.6, filter: "blur(10px)" }
        : { opacity: 0, y };

  const animate =
    reduce
      ? undefined
      : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-48px 0px" }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay: reduce ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

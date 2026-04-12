"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroCodeShell({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: 36, y: 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: reduce ? 0 : 0.65,
        delay: reduce ? 0 : 0.4,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

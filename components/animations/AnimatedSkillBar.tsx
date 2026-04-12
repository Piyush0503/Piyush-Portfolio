"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  percent: number;
  barFrom: string;
  barTo: string;
};

export function AnimatedSkillBar({ percent, barFrom, barTo }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800/80">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, ${barFrom}, ${barTo})`,
        }}
        initial={{ width: reduce ? `${percent}%` : "0%" }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, margin: "-24px 0px" }}
        transition={{ duration: reduce ? 0 : 0.95, ease }}
      />
    </div>
  );
}

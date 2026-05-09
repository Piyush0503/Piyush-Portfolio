"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";

interface Props {
  value: string; // e.g. "12+", "99%", "3"
  duration?: number;
}

function parseValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

/**
 * Animates a numeric string from 0 to its target when it enters the viewport.
 */
export function CountUp({ value, duration = 1.8 }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const [display, setDisplay] = useState("0");
  const { num, suffix } = parseValue(value);

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const ms = duration * 1000;
    const isFloat = num % 1 !== 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / ms, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setDisplay((isFloat ? current.toFixed(2) : Math.floor(current).toString()) + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, reduce, num, suffix, duration, value]);

  return <span ref={ref}>{display}</span>;
}

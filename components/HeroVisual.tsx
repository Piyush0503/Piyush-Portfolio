"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── mouse parallax hook ─── */
function useParallax(strength = 1) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth  - 0.5) * strength;
      const ny = (e.clientY / window.innerHeight - 0.5) * strength;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my, strength]);

  return { sx, sy };
}

/* ─── Central glowing sphere ─── */
function GlowSphere() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer halo rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[var(--color-accent)]/20"
          style={{ width: 80 + i * 44, height: 80 + i * 44 }}
          animate={reduce ? {} : {
            scale:   [1, 1.08, 1],
            opacity: [0.3, 0.08, 0.3],
          }}
          transition={{
            duration: 2.4 + i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Spinning conic ring */}
      <motion.div
        className="absolute h-[168px] w-[168px] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 60%, #00e5ff 80%, #8b5cf6 90%, transparent 100%)",
        }}
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner sphere */}
      <div
        className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #1e3a5f 0%, #0a0f1a 60%, #030712 100%)",
          boxShadow:
            "0 0 40px 8px rgba(0,229,255,0.25), 0 0 80px 16px rgba(139,92,246,0.15), inset 0 0 30px rgba(0,229,255,0.08)",
        }}
      >
        {/* Specular highlight */}
        <div
          className="absolute left-[22%] top-[18%] h-8 w-8 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
          }}
        />
        <span
          className="font-mono text-2xl font-bold"
          style={{ color: "#00e5ff", textShadow: "0 0 20px rgba(0,229,255,0.8)" }}
        >
          &lt;/&gt;
        </span>
      </div>
    </div>
  );
}

/* ─── Particle trail ─── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  angle: (i / 28) * 360,
  radius: 90 + Math.random() * 40,
  size:   Math.random() * 3 + 1,
  speed:  18 + Math.random() * 14,
  color:  i % 3 === 0 ? "#00e5ff" : i % 3 === 1 ? "#8b5cf6" : "#c084fc",
  opacity: Math.random() * 0.5 + 0.2,
}));

function ParticleField() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            opacity: p.opacity,
          }}
          animate={{
            rotate: [p.angle, p.angle + 360],
          }}
          transition={{
            duration: p.speed,
            repeat: Infinity,
            ease: "linear",
          }}
          // orbit via translateX
          transformTemplate={({ rotate }) =>
            `rotate(${rotate}) translateX(${p.radius}px) rotate(-${rotate})`
          }
        />
      ))}
    </div>
  );
}

/* ─── Floating code blocks ─── */
const CODE_BLOCKS = [
  {
    lines: [
      { t: "const",    c: "#c084fc" },
      { t: " dev",     c: "#e2e8f0" },
      { t: " = {",     c: "#94a3b8" },
    ],
    lines2: [
      { t: "  stack:", c: "#7dd3fc" },
      { t: " [...]",   c: "#94a3b8" },
    ],
    pos: { top: "8%",  left: "0%" },
    delay: 0.4,
    floatY: [-6, 6],
    floatDur: 4.2,
  },
  {
    lines: [
      { t: "async",    c: "#c084fc" },
      { t: " fetch",   c: "#7dd3fc" },
      { t: "(url)",    c: "#e2e8f0" },
    ],
    lines2: [
      { t: "  .then",  c: "#34d399" },
      { t: "(res)",    c: "#94a3b8" },
    ],
    pos: { top: "8%",  right: "0%" },
    delay: 0.7,
    floatY: [6, -6],
    floatDur: 5.1,
  },
  {
    lines: [
      { t: "npm",      c: "#f87171" },
      { t: " run",     c: "#e2e8f0" },
      { t: " build",   c: "#7dd3fc" },
    ],
    lines2: [
      { t: "✓ ",       c: "#34d399" },
      { t: "compiled", c: "#94a3b8" },
    ],
    pos: { bottom: "12%", left: "2%" },
    delay: 1.0,
    floatY: [-4, 8],
    floatDur: 3.8,
  },
  {
    lines: [
      { t: "git",      c: "#f97316" },
      { t: " push",    c: "#e2e8f0" },
    ],
    lines2: [
      { t: "✓ main",   c: "#34d399" },
    ],
    pos: { bottom: "14%", right: "2%" },
    delay: 1.3,
    floatY: [8, -4],
    floatDur: 4.6,
  },
];

function CodeBlock({
  lines,
  lines2,
  pos,
  delay,
  floatY,
  floatDur,
}: (typeof CODE_BLOCKS)[0]) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="absolute rounded-xl border border-white/[0.08] bg-[#0a0f1a]/90 px-3 py-2.5 shadow-2xl backdrop-blur-md"
      style={{ ...pos, minWidth: 110 }}
      initial={reduce ? false : { opacity: 0, scale: 0.7, y: 20 }}
      animate={
        reduce
          ? { opacity: 1 }
          : {
              opacity: 1,
              scale: 1,
              y: floatY,
            }
      }
      transition={
        reduce
          ? { duration: 0 }
          : {
              opacity: { duration: 0.5, delay, ease },
              scale:   { duration: 0.5, delay, ease },
              y: {
                duration: floatDur,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay + 0.5,
              },
            }
      }
      whileHover={{ scale: 1.06, borderColor: "rgba(0,229,255,0.3)" }}
    >
      {/* Dot row */}
      <div className="mb-1.5 flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="font-mono text-[10px] leading-relaxed">
        <div className="flex flex-wrap">
          {lines.map((l, i) => (
            <span key={i} style={{ color: l.c }}>{l.t}</span>
          ))}
        </div>
        <div className="flex flex-wrap">
          {lines2.map((l, i) => (
            <span key={i} style={{ color: l.c }}>{l.t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Skill arc badges ─── */
const SKILL_BADGES = [
  { label: "React",      color: "#61dafb", angle: -60 },
  { label: "Next.js",    color: "#ffffff", angle: 0   },
  { label: "Spring",     color: "#6db33f", angle: 60  },
  { label: "TypeScript", color: "#3178c6", angle: 120 },
  { label: "MongoDB",    color: "#47a248", angle: 180 },
  { label: "Node.js",    color: "#339933", angle: 240 },
];

function SkillBadges() {
  const reduce = useReducedMotion();
  const R = 148;

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {SKILL_BADGES.map((s, i) => {
        const rad = ((s.angle - 90) * Math.PI) / 180;
        const x = 50 + (R / 2) * Math.cos(rad);
        const y = 50 + (R / 2) * Math.sin(rad);

        return (
          <motion.div
            key={s.label}
            className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 cursor-default"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={reduce ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease }}
            whileHover={{ scale: 1.2, zIndex: 20 }}
          >
            <div
              className="flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-semibold shadow-lg backdrop-blur-sm"
              style={{
                borderColor: `${s.color}40`,
                background: `${s.color}12`,
                color: s.color,
                boxShadow: `0 0 12px ${s.color}30`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: s.color }}
              />
              {s.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── Main export ─── */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const { sx, sy } = useParallax(30);

  const rotateX = useTransform(sy, [-15, 15], [8, -8]);
  const rotateY = useTransform(sx, [-15, 15], [-8, 8]);

  return (
    <motion.div
      className="relative flex h-[380px] w-full max-w-[420px] items-center justify-center"
      initial={reduce ? false : { opacity: 0, scale: 0.85, filter: "blur(16px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.3, ease }}
    >
      {/* 3-D tilt wrapper */}
      <motion.div
        className="relative h-full w-full"
        style={{
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
          transformStyle: "preserve-3d",
          perspective: 900,
        }}
      >
        {/* Floating code blocks */}
        {CODE_BLOCKS.map((b, i) => (
          <CodeBlock key={i} {...b} />
        ))}

        {/* Particle field */}
        <ParticleField />

        {/* Skill badges on arc */}
        <SkillBadges />

        {/* Central sphere */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <GlowSphere />
        </div>
      </motion.div>
    </motion.div>
  );
}

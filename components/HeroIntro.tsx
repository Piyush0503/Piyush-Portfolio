"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { site } from "@/data/site";
import { TypeWriter } from "@/components/animations/TypeWriter";
import { MagneticButton } from "@/components/animations/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const ROLES = [
  "Full-Stack Web Developer",
  "React & Next.js Developer",
  "Java Spring Boot Developer",
  "TypeScript Enthusiast",
  "PostgreSQL & MongoDB Developer",
];

export function HeroIntro() {
  const reduce = useReducedMotion();
  const hasTwoNames = site.lastName.trim().length > 0;

  const base = reduce ? { duration: 0 } : { duration: 0.55, ease };

  return (
    <div>
      {/* Status badge */}
      <motion.p
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: reduce ? 0 : 0.05 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Available for work
      </motion.p>

      {/* Greeting */}
      <motion.p
        className="text-lg text-slate-400 sm:text-xl"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: reduce ? 0 : 0.18 }}
      >
        Hello, I&apos;m
      </motion.p>

      {/* Name */}
      <h1 className="mt-1 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        {hasTwoNames ? (
          <>
            <motion.span
              className="inline-block text-white"
              initial={reduce ? false : { opacity: 0, x: -28, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ ...base, delay: reduce ? 0 : 0.32 }}
            >
              {site.firstName}
            </motion.span>{" "}
            <motion.span
              className="text-gradient inline-block"
              initial={reduce ? false : { opacity: 0, x: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ ...base, delay: reduce ? 0 : 0.5 }}
            >
              {site.lastName}
            </motion.span>
          </>
        ) : (
          <motion.span
            className="text-gradient inline-block"
            initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...base, delay: reduce ? 0 : 0.35 }}
          >
            {site.firstName}
          </motion.span>
        )}
      </h1>

      {/* Typewriter role */}
      <motion.div
        className="mt-3 h-8 text-lg font-semibold sm:text-xl"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: reduce ? 0 : 0.58 }}
      >
        <TypeWriter
          words={ROLES}
          className="text-[var(--color-accent)]"
        />
      </motion.div>

      {/* Intro */}
      <motion.p
        className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: reduce ? 0 : 0.72 }}
      >
        End-to-end product work with{" "}
        <span className="text-slate-200">React JS</span>,{" "}
        <span className="text-slate-200">Next.js</span>,{" "}
        <span className="text-slate-200">Node.js</span>,{" "}
        <span className="text-slate-200">Java Spring Boot</span>,{" "}
        <span className="text-slate-200">PostgreSQL</span>, and{" "}
        <span className="text-slate-200">MongoDB</span> — from UI polish to reliable APIs.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="mt-7 flex flex-wrap gap-3"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: reduce ? 0 : 0.88 }}
      >
        <MagneticButton>
          <Link
            href="#projects"
            className="inline-block rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_-4px_rgba(0,229,255,0.55)] transition hover:bg-[var(--color-accent-dim)] hover:shadow-[0_0_36px_-4px_rgba(0,229,255,0.7)]"
          >
            View My Work
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link
            href="#contact"
            className="inline-block rounded-xl border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-accent)]/50 hover:bg-white/[0.04]"
          >
            Get In Touch
          </Link>
        </MagneticButton>
      </motion.div>
    </div>
  );
}

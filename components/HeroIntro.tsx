"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroIntro() {
  const reduce = useReducedMotion();
  const hasTwoNames = site.lastName.trim().length > 0;

  const base = reduce
    ? { duration: 0 }
    : { duration: 0.55, ease };

  return (
    <div>
      <motion.p
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400"
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

      <motion.p
        className="text-lg text-slate-400 sm:text-xl"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: reduce ? 0 : 0.18 }}
      >
        Hello, I&apos;m
      </motion.p>

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

      <motion.p
        className="mt-4 max-w-xl text-md leading-relaxed text-slate-200 sm:text-base"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: reduce ? 0 : 0.68 }}
      >
        {site.heroIntro}
      </motion.p>

      <motion.p
        className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: reduce ? 0 : 0.82 }}
      >
        End-to-end product work with{" "}
        <span className="text-slate-200">React js</span>,{" "}
        <span className="text-slate-200">Next js</span>,{" "}
        <span className="text-slate-200">Node.js</span>,{" "}
        <span className="text-slate-200">Java Spring Boot</span>,{" "}
        <span className="text-slate-200">PostgreSQL</span>, and{" "}
        <span className="text-slate-200">MongoDB</span>—from UI polish to reliable APIs.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap gap-4"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: reduce ? 0 : 0.95 }}
      >
        <motion.div whileHover={{ scale: reduce ? 1 : 1.03 }} whileTap={{ scale: reduce ? 1 : 0.98 }}>
          <Link
            href="#projects"
            className="inline-block rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_-4px_rgba(0,229,255,0.5)] transition hover:bg-[var(--color-accent-dim)]"
          >
            View My Work
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: reduce ? 1 : 1.03 }} whileTap={{ scale: reduce ? 1 : 0.98 }}>
          <Link
            href="#contact"
            className="inline-block rounded-xl border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-accent)]/50 hover:bg-white/[0.03]"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

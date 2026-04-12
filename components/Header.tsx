"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const sections = [
  { id: "home", href: "#home", label: "Home" },
  { id: "about", href: "#about", label: "About" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "contact", href: "#contact", label: "Contact" },
] as const;

const displayBrand =
  site.lastName.trim().length > 0
    ? `${site.firstName} ${site.lastName}`.trim()
    : site.firstName;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (nodes.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.2, 0.45, 0.75] },
    );

    nodes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-surface-0)]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
        <Link href="#home" className="flex items-center gap-2.5 justify-self-start">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-accent)]/35 bg-white/[0.04] font-mono text-xs font-semibold text-[var(--color-accent)]"
            aria-hidden
          >
            &lt;/&gt;
          </span>
          <span className="text-base font-semibold tracking-tight text-white">
            {displayBrand}
            <span className="text-[var(--color-accent)]">.</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 md:flex"
          aria-label="Primary"
        >
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <Link
                key={s.id}
                href={s.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[var(--color-accent)]/15 text-[var(--color-accent)] shadow-[0_0_20px_-4px_rgba(0,229,255,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {s.label}
              </Link>
            );
          })}
        </nav>

        <div className="justify-self-end">
          <Link
            href="#contact"
            className="rounded-lg border border-[var(--color-accent)]/60 bg-transparent px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent)]/10"
          >
            Hire Me
          </Link>
        </div>
      </div>

      <nav
        className="flex justify-center gap-2 border-t border-[var(--color-border)] bg-[var(--color-surface-0)]/95 px-4 py-2 md:hidden"
        aria-label="Mobile primary"
      >
        {sections.map((s) => (
          <Link
            key={s.id}
            href={s.href}
            className={`rounded-full px-3 py-1.5 text-xs font-medium ${
              active === s.id ? "text-[var(--color-accent)]" : "text-slate-400"
            }`}
          >
            {s.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

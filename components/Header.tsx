"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const sections = [
  { id: "home",       href: "#home",       label: "Home" },
  { id: "about",      href: "#about",      label: "About" },
  { id: "education",  href: "#education",  label: "Education" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "skills",     href: "#skills",     label: "Skills" },
  { id: "projects",   href: "#projects",   label: "Projects" },
  { id: "contact",    href: "#contact",    label: "Contact" },
] as const;

const displayBrand =
  site.lastName.trim().length > 0
    ? `${site.firstName} ${site.lastName}`.trim()
    : site.firstName;

export function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState<string>("home");
  const [menuOpen, setMenuOpen]   = useState(false);
  const menuRef                   = useRef<HTMLDivElement>(null);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section tracker ── */
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

  /* ── close menu on outside click ── */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  /* ── lock body scroll when menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-surface-0)]/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* ── Brand ── */}
          <Link href="#home" className="flex items-center gap-2.5" onClick={closeMenu}>
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

          {/* ── Desktop nav ── */}
          <nav
            className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 lg:flex"
            aria-label="Primary"
          >
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
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

          {/* ── Right side ── */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden rounded-lg border border-[var(--color-accent)]/60 bg-transparent px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent)]/10 sm:inline-flex"
            >
              Hire Me
            </Link>

            {/* ── Hamburger button (mobile / tablet) ── */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-white/[0.08] bg-white/[0.04] transition hover:bg-white/[0.08] lg:hidden"
            >
              <span
                className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer overlay ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          aria-hidden
          onClick={closeMenu}
        />
      )}

      {/* ── Mobile drawer panel ── */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col bg-[var(--color-surface-1)] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex h-16 items-center justify-between border-b border-[var(--color-border)] px-5">
          <span className="text-sm font-semibold text-white">
            {displayBrand}<span className="text-[var(--color-accent)]">.</span>
          </span>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <Link
                key={s.id}
                href={s.href}
                onClick={closeMenu}
                className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                    : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {s.label}
              </Link>
            );
          })}
        </nav>

        {/* Hire Me CTA */}
        <div className="border-t border-[var(--color-border)] px-5 py-5">
          <Link
            href="#contact"
            onClick={closeMenu}
            className="flex w-full items-center justify-center rounded-lg border border-[var(--color-accent)]/60 bg-transparent px-4 py-2.5 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent)]/10"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </>
  );
}

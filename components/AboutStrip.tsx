import { Reveal } from "@/components/animations/Reveal";

export function AboutStrip() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-[var(--color-border)] bg-[var(--color-surface-1)]/80 py-band sm:py-band-lg"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="glass-panel cta-glow-border rounded-2xl px-5 py-6 sm:px-8 sm:py-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              About
            </h2>
            <p className="mt-4 w-full max-w-none text-base leading-relaxed text-slate-400 sm:text-base">
              I am a dedicated software developer who focuses on building reliable, user-friendly,
              and well-structured digital solutions. I enjoy solving real-world problems through
              thoughtful design, clean architecture, and efficient workflows. My approach emphasizes
              clarity, performance, and long-term maintainability while delivering applications that
              provide a smooth and meaningful experience for users.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

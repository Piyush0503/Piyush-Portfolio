import { Reveal } from "@/components/animations/Reveal";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface-0)] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              className={`flex flex-col items-center justify-center text-center ${
                i > 0 ? "md:border-l md:border-[var(--color-border)]" : ""
              }`}
            >
              <span className="stat-glow text-3xl font-bold tabular-nums text-[var(--color-accent)] sm:text-4xl">
                {s.value}
              </span>
              <span className="mt-1 text-sm text-slate-500">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

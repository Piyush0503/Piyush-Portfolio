import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { projects } from "@/data/projects";

function isExternal(href: string) {
  return href.startsWith("http");
}

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface-1)] py-section sm:py-section-lg"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            A snapshot of the kind of systems I ship—swap in your own links and copy.
          </p>
        </Reveal>
        <ul className="mt-stack grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.1}>
                <article className="glass-panel flex h-full flex-col rounded-2xl p-5 transition-transform duration-300 hover:scale-[1.01] hover:shadow-[0_0_0_1px_rgba(0,229,255,0.1)]">
                <span className="inline-flex w-fit rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  {p.category}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-0)]/90 px-2.5 py-0.5 font-mono text-[11px] text-slate-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-6 border-t border-[var(--color-border)] pt-4">
                  {p.sourceUrl ? (
                    <Link
                      href={p.sourceUrl}
                      target={isExternal(p.sourceUrl) ? "_blank" : undefined}
                      rel={isExternal(p.sourceUrl) ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition hover:gap-2"
                    >
                      Source →
                    </Link>
                  ) : null}
                  {p.liveUrl ? (
                    <Link
                      href={p.liveUrl}
                      target={isExternal(p.liveUrl) ? "_blank" : undefined}
                      rel={isExternal(p.liveUrl) ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 transition hover:text-white"
                    >
                      Live Demo →
                    </Link>
                  ) : null}
                  {!p.sourceUrl && !p.liveUrl ? (
                    <span className="text-sm text-slate-600">Private / NDA</span>
                  ) : null}
                </div>
              </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

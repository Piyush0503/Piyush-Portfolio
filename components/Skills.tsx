import { AnimatedSkillBar } from "@/components/animations/AnimatedSkillBar";
import { Reveal } from "@/components/animations/Reveal";
import { techStack } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-section sm:py-section-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="mt-3 text-slate-400">Technologies I work with daily.</p>
        </Reveal>
        <ul className="mt-stack grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, i) => (
            <li key={tech.name}>
              <Reveal delay={i * 0.07}>
                <article className="glass-panel group rounded-xl p-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(0,229,255,0.12)]">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-semibold text-white">{tech.name}</h3>
                    <span className="font-mono text-sm font-medium text-[var(--color-accent)]">
                      {tech.percent}%
                    </span>
                  </div>
                  <AnimatedSkillBar
                    percent={tech.percent}
                    barFrom={tech.barFrom}
                    barTo={tech.barTo}
                  />
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

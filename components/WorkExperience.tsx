import { Reveal } from "@/components/animations/Reveal";

const experiences = [
  {
    role: "Software Developer",
    company: "BISAG - MeitY",
    period: "11/2024 – Present",
    location: "Gandhinagar, Gujarat",
    tasks: [
      "Contributed to multiple government projects under the Ministry of Electronics & Information Technology, playing a key role in the development and maintenance of scalable, secure, and high-performance applications. Actively collaborated with cross-functional teams to deliver reliable solutions aligned with organizational standards, ensuring quality, efficiency, and timely project execution",
    ],
  },
  {
    role: "MERN Stack Trainee",
    company: "TECHMICRA IT SOLUTIONS",
    period: "02/2024 – 04/2024",
    location: "Ahmedabad, Gujarat",
    tasks: [
      "Acquired hands-on experience in MERN Stack Software Development, progressing from foundational concepts to practical application.",
      "Successfully executed an end-to-end eCommerce project, demonstrating proficiency in frontend and backend development within the MERN stack ecosystem.",
    ],
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="scroll-mt-24 py-section sm:py-section-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400">Where I&apos;ve built things that matter.</p>
        </Reveal>

        <div className="mt-stack flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="glass-panel rounded-2xl px-6 py-6 sm:px-8 sm:py-7 transition-transform duration-300 hover:scale-[1.01] hover:shadow-[0_0_0_1px_rgba(0,229,255,0.12)]">
                {/* Header row */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-base font-semibold text-[var(--color-accent)]">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-1 text-right sm:mt-0 sm:shrink-0">
                    <p className="text-sm italic text-slate-400">{exp.period}</p>
                    <p className="text-sm italic text-slate-500">{exp.location}</p>
                  </div>
                </div>

                {/* Tasks */}
                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Achievements / Tasks
                  </p>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

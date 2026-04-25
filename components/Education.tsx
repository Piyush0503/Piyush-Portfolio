import { Reveal } from "@/components/animations/Reveal";

const education = [
  {
    degree: "B.E. in Information Technology",
    institution: "L. D. College Of Engineering, Ahmedabad",
    period: "10/2020 – 06/2024",
    location: "Ahmedabad, Gujarat",
    label: "Courses",
    details: ["8.44 CGPA"],
  },
  {
    degree: "HSC",
    institution: "Sheth B. M. High School, Patan",
    period: "04/2019 – 03/2020",
    location: "Patan, Gujarat",
    label: "Science",
    details: ["78.61%"],
  },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-section sm:py-section-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="mt-3 text-slate-400">Academic background and qualifications.</p>
        </Reveal>

        <div className="mt-stack flex flex-col gap-6">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="glass-panel rounded-2xl px-6 py-6 sm:px-8 sm:py-7 transition-transform duration-300 hover:scale-[1.01] hover:shadow-[0_0_0_1px_rgba(0,229,255,0.12)]">
                {/* Header row */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-base font-semibold text-[var(--color-accent)]">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="mt-1 text-left sm:mt-0 sm:shrink-0 sm:text-right">
                    <p className="text-sm italic text-slate-400">{edu.period}</p>
                    <p className="text-sm italic text-slate-500">{edu.location}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {edu.label}
                  </p>
                  <ul className="space-y-2">
                    {edu.details.map((detail, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {detail}
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

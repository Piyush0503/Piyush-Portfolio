"use client";

import { Reveal } from "@/components/animations/Reveal";
import { motion } from "framer-motion";

const techIcons = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#ffffff",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "#ffffff",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "#ED8B00",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    color: "#6DB33F",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#4169E1",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-section sm:py-section-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl" variant="blur">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="mt-3 text-slate-400">Technologies I work with daily.</p>
        </Reveal>

        <div className="mt-stack grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {techIcons.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ scale: 1.12, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-panel group flex flex-col items-center gap-3 rounded-2xl p-4 cursor-default"
              >
                {/* glow ring on hover */}
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-xl transition-shadow duration-300 group-hover:shadow-[0_0_18px_4px_var(--glow)]"
                  style={{ "--glow": `${tech.color}55` } as React.CSSProperties}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain drop-shadow-md"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors duration-200 text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

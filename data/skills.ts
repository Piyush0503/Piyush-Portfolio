export type TechSkill = {
  name: string;
  percent: number;
  /** Tailwind gradient for the progress fill */
  barFrom: string;
  barTo: string;
};

export const techStack: TechSkill[] = [
  { name: "React js", percent: 92, barFrom: "#00E5FF", barTo: "#06b6d4" },
  { name: "Next js", percent: 90, barFrom: "#00E5FF", barTo: "#06b6d4" },
  { name: "Express js", percent: 80, barFrom: "#22c55e", barTo: "#15803d" },
  { name: "Node.js", percent: 80, barFrom: "#22c55e", barTo: "#15803d" },
  { name: "Java Spring Boot", percent: 90, barFrom: "#4ade80", barTo: "#166534" },
  { name: "PostgreSQL", percent: 90, barFrom: "#3b82f6", barTo: "#1d4ed8" },
  { name: "MongoDB", percent: 70, barFrom: "#10b981", barTo: "#047857" },
  { name: "TypeScript", percent: 93, barFrom: "#60a5fa", barTo: "#7c3aed" },
];

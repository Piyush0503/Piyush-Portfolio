export type Project = {
  title: string;
  description: string;
  stack: string[];
  category: "FULLSTACK" | "BACKEND" | "FRONTEND";
  sourceUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full checkout flow, inventory sync, and admin analytics with real-time order updates.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    category: "FULLSTACK",
    sourceUrl: "https://github.com",
    liveUrl: "https://vercel.com",
  },
  {
    title: "API Gateway Service",
    description:
      "Spring Boot microservice with JWT auth, rate limits, and OpenAPI documentation.",
    stack: ["Spring Boot", "PostgreSQL", "Docker"],
    category: "BACKEND",
    sourceUrl: "https://github.com",
  },
  {
    title: "Realtime Dashboard",
    description:
      "Role-aware React UI with secure APIs, charts, and optimistic updates.",
    stack: ["React", "Next.js", "MongoDB"],
    category: "FRONTEND",
    liveUrl: "#contact",
  },
  {
    title: "Design System",
    description:
      "Accessible components, dark theme tokens, and Tailwind-based documentation site.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "FRONTEND",
    sourceUrl: "https://github.com",
    liveUrl: "#contact",
  },
];

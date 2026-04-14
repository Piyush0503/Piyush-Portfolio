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
    stack: ["React js", "Express js", "Node.js", "MongoDB"],
    category: "FULLSTACK",
    sourceUrl: "https://github.com/Piyush0503/Ecommerce-App",
    // liveUrl: "https://vercel.com",
  },
  {
    title: "Food Delivery App",
    description:
      "Food Delivery App with features like order tracking, payment integration, and real-time notifications.",
    stack: ["React js", "Express js", "Node.js", "MongoDB"],
    category: "FRONTEND",
    sourceUrl: "https://github.com/Piyush0503/Tasty-Treat",
    liveUrl:"https://tasty-treat-91y1.vercel.app"
  },
  {
    title: "Realtime Dashboard",
    description:
      "Role-aware React UI with secure APIs, charts, and optimistic updates.",
    stack: ["React", "Next.js", "javaScript"],
    category: "FRONTEND",
    sourceUrl: "https://github.com/Piyush0503/pulse-dashboard",
    liveUrl: "https://pulse-dashboard-mauve.vercel.app",
  },
  // {
  //   title: "Design System",
  //   description:
  //     "Accessible components, dark theme tokens, and Tailwind-based documentation site.",
  //   stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   category: "FRONTEND",
  //   sourceUrl: "https://github.com",
  //   liveUrl: "#contact",
  // },
];

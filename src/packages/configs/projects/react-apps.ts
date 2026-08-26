import type { Project } from "@/types/projects";
import appConfig from "../app.config";

const reactApps = [
  {
    key: "learn-advanced-react",
    title: "Learn Advanced React",
    role: "React Developer",
    description:
      "A React course designed to help you learn the advanced features of React, including hooks, context, and concurrent mode.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    href: "https://learn-advance-react.vercel.app/",
    createdAt: "23/04/2026",
    updatedAt: "03/07/2026",
    client: "self",
    keywords: [
      "react",
      "typescript",
      "nextjs",
      "tailwindcss",
      "hooks",
      "context",
      "concurrent mode",
    ],
  },
  {
    key: "create-next-template",
    title: "Create Next Template",
    role: "React Developer",
    description:
      "A production-grade Next.js starter used as the base for all client projects — auth system, Vitest test suite, proxy middleware, dynamic OG image generation, and a theme-palette system.",
    tags: ["Next.js", "TypeScript", "Vitest", "Tailwind CSS"],
    href: `${appConfig.social.github}/create-next-template`,
    createdAt: "12/06/2026",
    updatedAt: "24/08/2026",
    client: "self",
    keywords: ["react", "nextjs", "typescript", "vitest", "tailwindcss"],
  },
  {
    key: "create-next-navigations",
    title: "Create Next Navigations",
    role: "React Developer",
    description:
      "A namespaced NavigationProvider architecture with a collapsible dashboard sidebar, mega-menu desktop nav, and mobile drawer, driven entirely by a single navigation config.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    href: `${appConfig.social.github}/create-next-navigations`,
    createdAt: "12/06/2026",
    updatedAt: "24/08/2026",
    client: "self",
    keywords: ["react", "nextjs", "typescript", "tailwindcss"],
  },
] satisfies Project[];

export default reactApps;

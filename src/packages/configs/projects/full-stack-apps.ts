import type { Project } from "@/types/projects";

const fullStackApps = [
  {
    key: "sparkverse",
    title: "Sparkverse",
    role: "Full Stack Developer",
    description:
      "A modern full stack application for latest tech trends and innovations.",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "GSAP",
      "Vercel",
    ],
    createdAt: "12/06/2026",
    updatedAt: "24/08/2026",
    client: "team",
    keywords: [
      "full-stack",
      "nextjs",
      "supabase",
      "postgres",
      "tailwind",
      "gsap",
      "vercel",
    ],
    href: `sparkverse.in`,
  },
] satisfies Project[];

export default fullStackApps;

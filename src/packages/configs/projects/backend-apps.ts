import type { Project } from "@/types/projects";
import appConfig from "../app.config";

const backendApps = [
  {
    key: "create-hono-app",
    title: "Hono App",
    role: "Backend Developer",
    client: "open-source",
    description:
      "A Hono/Bun backend template with a full Authentication service, custom Axios client, and production-ready error handling conventions.",
    tags: ["Hono", "Bun", "TypeScript", "Razorpay"],
    keywords: ["backend", "hono", "bun", "typescript", "razorpay"],
    href: `${appConfig.social.github}/create-hono-app`,
    createdAt: "30/07/2026",
    updatedAt: "05/08/2026",
  },
  {
    key: "create-fastify-app",
    title: "Fastify App",
    role: "Backend Developer",
    client: "open-source",
    description:
      "A Fastify backend template with a full Authentication service, custom Axios client, and production-ready error handling conventions.",
    tags: ["Fastify", "TypeScript", "Razorpay"],
    keywords: ["backend", "fastify", "typescript", "razorpay"],
    href: `https://fastify-auth.vercel.app/`,
    createdAt: "02/09/2025",
    updatedAt: "08/09/2025",
  },
] satisfies Project[];

export default backendApps;

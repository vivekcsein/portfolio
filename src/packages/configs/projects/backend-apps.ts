import type { Project } from "@/types/projects";
import appConfig from "../app.config";

const backendApps = [
  {
    key: "create-hono-app",
    title: "Create Hono App",
    role: "Backend Developer",
    client: "open-source",
    description:
      "A Hono/Bun backend template with a full Razorpay payment integration service, custom Axios client, and production-ready error handling conventions.",
    tags: ["Hono", "Bun", "TypeScript", "Razorpay"],
    keywords: ["backend", "hono", "bun", "typescript", "razorpay"],
    href: `${appConfig.social.github}/create-hono-app`,
    createdAt: "12/06/2026",
    updatedAt: "24/08/2026",
  },
] satisfies Project[];

export default backendApps;

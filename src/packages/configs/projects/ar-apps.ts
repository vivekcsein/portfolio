import type { Project } from "@/types/projects";
import appConfig from "../app.config";

const arApps = [
  {
    key: "create-ar-experience",
    title: "Create AR Experience",
    role: "Augmented Reality Developer",
    description:
      "A Next.js template with a full AR experience, including a custom AR canvas, AR-powered 3D models, and a production-ready error handling conventions.",
    tags: ["Next.js", "TypeScript", "AR", "Three.js"],
    href: `${appConfig.social.github}/create-ar-experience`,
    createdAt: "12/06/2026",
    updatedAt: "24/08/2026",
    client: "open-source",
    keywords: ["ar", "nextjs", "threejs", "typescript"],
  },
] satisfies Project[];

export default arApps;

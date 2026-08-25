import type { Project } from "@/types/projects";
import appConfig from "../app.config";

const otherProject = [
  {
    key: "3d-models",
    title: "3d models",
    description: "A collection of 3D models I've built",
    role: "software engineer",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
    href: `${appConfig.social.github}/frenzz-official`,
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    client: "self",
    keywords: [
      "3d",
      "models",
      "3d models",
      "glb",
      "three.js",
      "react-three-fiber",
    ],
  },
  {
    key: "ad-monetization",
    title: "Ad Monetization Platform",
    role: "software engineer",
    description:
      "A Next.js advertising integration focused on SSR/SSG compatibility, ad placement, performance, SEO, and monetization.",
    tags: ["Next.js", "AdSense", "Media.net", "SEO"],
    href: `${appConfig.social.github}/ad-monetization`,
    createdAt: "08/08/2026",
    updatedAt: "18/08/2026",
    client: "self",
    keywords: [
      "adsense",
      "media.net",
      "advertising",
      "monetization",
      "seo",
      "next.js",
      "ssr",
      "performance",
    ],
  },
] satisfies Project[];

export default otherProject;

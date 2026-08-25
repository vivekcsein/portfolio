import type { Project } from "@/types/projects";

const webApps = [
  {
    key: "lifeinvader-ads-studio",
    title: "LifeInvader Ads Studio",
    role: "Web Developer",
    description:
      "A GTA RP ad management tool with lazy-loaded ad panels, server-side JSON obfuscation, Media.net and AdSense integration, and a full blog/SEO section.",
    tags: ["Next.js", "TypeScript", "AdSense", "SEO"],
    href: `the-role-player.vercel.app`,
    createdAt: "12/06/2026",
    updatedAt: "24/08/2026",
    client: "team",
    keywords: ["nextjs", "typescript", "adsense", "seo"],
  },
] satisfies Project[];

export default webApps;

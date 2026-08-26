import type { Project } from "@/types/projects";

const webApps = [
  {
    key: "lifeinvader-ads-studio",
    title: "LifeInvader Ads Studio",
    role: "Web Developer",
    description:
      "A GTA RP ad management tool with lazy-loaded ad panels, server-side JSON obfuscation, Media.net and AdSense integration, and a full blog/SEO section.",
    tags: ["Next.js", "TypeScript", "AdSense", "SEO"],
    href: "https://the-role-player.vercel.app",
    createdAt: "12/06/2026",
    updatedAt: "24/08/2026",
    client: "team",
    keywords: ["nextjs", "typescript", "adsense", "seo"],
  },
  {
    key: "ad-monetization",
    title: "Ad Monetization Platform",
    role: "software engineer",
    description:
      "A Next.js advertising integration focused on SSR/SSG compatibility, ad placement, performance, SEO, and monetization.",
    tags: ["Next.js", "AdSense", "Media.net", "SEO"],
    href: "https://my-daily-blogs-app.vercel.app/",
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

export default webApps;

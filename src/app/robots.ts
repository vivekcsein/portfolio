import type { MetadataRoute } from "next";
import { seo } from "@/packages/seo/index.seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = seo.metadataBase.toString().replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}

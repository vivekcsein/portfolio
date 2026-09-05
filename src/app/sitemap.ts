import type { MetadataRoute } from "next";
import { docsConfig } from "@/packages/configs/docs.config";
import projectsConfig from "@/packages/configs/projects.config";
import servicesConfig from "@/packages/configs/services.config";
import { seo } from "@/packages/seo/index.seo";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about",
  "/tech-stack",
  "/journey",
  "/services",
  "/contact",
  "/blogs",
  "/projects",
  "/docs",
];

/**
 * Generated at build time (required for `output: "export"`) into a
 * static sitemap.xml. Pulls every real route from the same config files
 * that drive navigation, so a new doc/project/service is automatically
 * included — nothing to update here by hand.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = seo.metadataBase.toString().replace(/\/$/, "");

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const docEntries: MetadataRoute.Sitemap = docsConfig.categories.flatMap(
    (category) => [
      { url: `${base}/docs/${category.key}`, lastModified: new Date() },
      ...category.children.map((doc) => ({
        url: `${base}/docs/${category.key}/${doc.slug}`,
        lastModified: doc.updatedAt,
      })),
    ],
  );

  const projectEntries: MetadataRoute.Sitemap = projectsConfig.projects.map(
    (category) => ({
      url: `${base}/projects/${category.key}`,
      lastModified: new Date(),
    }),
  );

  const serviceEntries: MetadataRoute.Sitemap = servicesConfig.items.map(
    (service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date(),
    }),
  );

  return [
    ...staticEntries,
    ...docEntries,
    ...projectEntries,
    ...serviceEntries,
  ];
}

import fs from "node:fs";
import type { ContentConfig } from "@/types/content";

export type ContentCategory<T extends ContentConfig> = T["categories"][number];

export type ContentEntry<T extends ContentConfig> =
  ContentCategory<T>["children"][number];

// Get all content entries
export const getAllContent = <T extends ContentConfig>(
  config: T,
): ContentEntry<T>[] => {
  return config.categories.flatMap((category) => category.children);
};

// Get content entry by slug
export const getContentBySlug = <T extends ContentConfig>(
  config: T,
  slug: string[],
): ContentEntry<T> | undefined => {
  const requestedSlug = slug.at(-1);

  if (!requestedSlug) {
    return undefined;
  }

  return getAllContent(config).find(
    (content) => content.slug === requestedSlug,
  );
};

// Get markdown content
export const getContent = <T extends ContentConfig>(
  _config: T,
  content: ContentEntry<T>,
): string => {
  try {
    return fs.readFileSync(content.file, "utf-8");
  } catch {
    return `> **Content not available yet.**\n>\n> The markdown file for "${content.title}" is missing from the repository. Expected at: \`${content.file}\`.`;
  }
};

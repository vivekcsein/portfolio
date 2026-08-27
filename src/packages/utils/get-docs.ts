import fs from "node:fs";

import { docsConfig } from "@/packages/configs/docs.config";

export type DocsCategory = (typeof docsConfig.categories)[number];

export type DocEntry = DocsCategory["children"][number];

export const getAllDocs = (): DocEntry[] => {
  return docsConfig.categories.flatMap((category) => category.children);
};

export const getDocBySlug = (slug: string[]): DocEntry | undefined => {
  const requestedSlug = slug.at(-1);

  if (!requestedSlug) {
    return undefined;
  }

  return getAllDocs().find((doc) => doc.slug === requestedSlug);
};

export const getDocContent = (doc: DocEntry): string => {
  try {
    return fs.readFileSync(doc.file, "utf-8");
  } catch {
    // Don't let one missing markdown file take down the whole build —
    // surface it clearly on the page instead. See docs config: the
    // referenced file for this entry doesn't exist on disk.
    return `> **Content not available yet.**\n>\n> The markdown file for "${doc.title}" is missing from the repository. Expected at: \`${doc.file}\`.`;
  }
};

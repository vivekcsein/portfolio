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
  return fs.readFileSync(doc.file, "utf-8");
};

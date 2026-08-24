import { useMemo } from "react";

import { docsConfig } from "@/packages/configs/docs.config";

export type DocsCategory = (typeof docsConfig.categories)[number];
export type DocEntry = DocsCategory["children"][number];

export const useDocs = () => {
  const categories = docsConfig.categories;

  const documents = useMemo(
    () =>
      categories.flatMap((category) =>
        category.children.map((document) => ({
          ...document,
          category: category.key,
          categoryTitle: category.title,
        })),
      ),
    [],
  );

  const getCategory = (category: string): DocsCategory | undefined => {
    return categories.find((item) => item.key === category);
  };

  const getDocumentsByCategory = (category: string): DocEntry[] => {
    return getCategory(category)?.children ?? [];
  };

  const getDocBySlug = (slug: string | string[]): DocEntry | undefined => {
    const requestedSlug = Array.isArray(slug) ? slug.join("/") : slug;

    return documents.find((document) => document.slug === requestedSlug);
  };

  const searchDocs = (query: string) => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return documents;
    }

    return documents.filter((document) => {
      const searchableContent = [
        document.title,
        document.description,
        document.slug,
        ...(document.keywords ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(normalizedQuery);
    });
  };

  return {
    config: docsConfig,
    categories,
    documents,
    getCategory,
    getDocumentsByCategory,
    getDocBySlug,
    searchDocs,
  };
};

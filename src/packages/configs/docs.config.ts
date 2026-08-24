import {
  businessDocs,
  developmentDocs,
  othersDocs,
  personalDocs,
  technologyDocs,
} from "./docs";

export { getFilePath } from "../utils/get-file";

export type DocsCategory =
  | "business"
  | "development"
  | "technology"
  | "personal"
  | "others";

export type DocsItem = {
  key: string;
  title: string;
  description?: string;
  slug: string;
  path: string;
  file: string;
  createdAt: string;
  updatedAt: string;
  keywords?: string[];
};

export type DocsCategoryConfig = {
  key: DocsCategory;
  title: string;
  description?: string;
  children: DocsItem[];
};

export const docsConfig = {
  key: "DOCS",
  title: "Docs",
  description: "Documentation",
  slug: "docs",
  path: "docs",

  categories: [
    {
      key: "business",
      title: "Business",
      description: "Business-related documentation",
      children: businessDocs,
    },

    {
      key: "development",
      title: "Development",
      description: "Software development documentation and guides",
      children: developmentDocs,
    },

    {
      key: "technology",
      title: "Technology",
      description: "Technical documentation and technology guides",
      children: technologyDocs,
    },

    {
      key: "personal",
      title: "Personal",
      description: "Personal documentation",
      children: personalDocs,
    },

    {
      key: "others",
      title: "Others",
      description: "Miscellaneous documentation",
      children: othersDocs,
    },
  ],
} satisfies {
  key: string;
  title: string;
  description: string;
  slug: string;
  path: string;
  categories: DocsCategoryConfig[];
};

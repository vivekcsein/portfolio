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
  href: string;
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
  title: "Documentation",
  description:
    "Explore organized guides, references, tutorials, and resources to help you learn, build, and work more effectively.",
  slug: "docs",
  path: "docs",

  categories: [
    {
      key: "business",
      title: "Business & Strategy",
      description:
        "Guides, resources, and practical documentation covering business operations, strategy, planning, productivity, and professional growth.",
      children: businessDocs,
    },

    {
      key: "development",
      title: "Software Development",
      description:
        "Technical guides and references for building software, including programming, frameworks, APIs, architecture, tools, testing, and development workflows.",
      children: developmentDocs,
    },

    {
      key: "technology",
      title: "Technology & Engineering",
      description:
        "Documentation covering modern technologies, platforms, infrastructure, systems, developer tools, and emerging technical concepts.",
      children: technologyDocs,
    },

    {
      key: "personal",
      title: "Personal & Productivity",
      description:
        "Practical guides for personal organization, productivity, learning, workflows, planning, digital tools, and everyday improvement.",
      children: personalDocs,
    },

    {
      key: "others",
      title: "Other Resources",
      description:
        "Additional guides, references, tutorials, and useful resources that do not fit into the primary documentation categories.",
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

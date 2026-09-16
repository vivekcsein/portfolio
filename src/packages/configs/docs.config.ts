import type { ContentConfig } from "@/types/content";
import {
  bestDocs,
  businessDocs,
  developmentDocs,
  interviewDocs,
  othersDocs,
  personalDocs,
  technologyDocs,
} from "./docs";

export { getFilePath } from "../utils/get-file";

export type DocsCategory =
  | "business"
  | "best"
  | "development"
  | "technology"
  | "personal"
  | "interview"
  | "others";

export const docsConfig: ContentConfig<DocsCategory> = {
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
      key: "best",
      title: "Best Practices",
      description:
        "Guides, resources, and practical documentation covering best practices, tips, and tricks for various aspects of software development, engineering, and business.",
      children: bestDocs,
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
      key: "interview",
      title: "Interview Questions",
      description: "Top 1% questions asked by the community on various topics.",
      children: interviewDocs,
    },

    {
      key: "others",
      title: "Other Resources",
      description:
        "Additional guides, references, tutorials, and useful resources that do not fit into the primary documentation categories.",
      children: othersDocs,
    },
  ],
};

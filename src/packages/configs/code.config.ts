import { arrayInJsCode } from "./code";

export { getFilePath } from "../utils/get-file";

export type CodeCategory = "arrayInJs" | "others";

export type CodeItem = {
  key: string;
  title: string;
  description?: string;
  slug: string;
  /** Category/slug composite string — reference-only metadata, not a navigable route.
   * The real in-site link is computed from `slug` — see normalizeDocsList() in
   * packages/utils/content-normalize.ts. */
  docPath: string;
  file: string;
  createdAt: string;
  updatedAt: string;
  keywords?: string[];
};

export type CodeCategoryConfig = {
  key: CodeCategory;
  title: string;
  description?: string;
  children: CodeItem[];
};

export const codeConfig = {
  key: "CODE",
  title: "Code",
  description:
    "Explore organized guides, references, tutorials, and resources to help you learn, build, and work more effectively.",
  slug: "code",
  path: "code",
  categories: [
    {
      key: "arrayInJs",
      title: "Array in JavaScript",
      description:
        "Guides, references, tutorials, and resources to help you learn, build, and work more effectively.",
      children: arrayInJsCode,
    },
  ],
} satisfies {
  key: string;
  title: string;
  description: string;
  slug: string;
  path: string;
  categories: CodeCategoryConfig[];
};

import { type DocsItem, getFilePath } from "../docs.config";

const path = "/src/docs/personal";
export const personalDocs = [
  // Add personal documentation here.
  {
    key: "personal-1",
    title: "Personal Documentation",
    description: "Documentation related to personal projects",
    slug: "personal-documentation",
    path: "personal/personal-documentation",
    file: getFilePath(`${path}/personal-documentation.md`),
    createdAt: "04/08/2026",
    updatedAt: "04/08/2026",
    keywords: ["personal", "project"],
  },
] satisfies DocsItem[];

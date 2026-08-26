import { type DocsItem, getFilePath } from "../docs.config";

const path = "/src/docs/others";
export const othersDocs = [
  // Add miscellaneous documentation here.
  {
    key: "others-1",
    title: "Others Documentation",
    description: "Documentation related to other projects",
    slug: "others-documentation",
    href: "others/others-documentation",
    file: getFilePath(`${path}/others-documentation.md`),
    createdAt: "04/08/2026",
    updatedAt: "04/08/2026",
    keywords: ["others", "project"],
  },
] satisfies DocsItem[];

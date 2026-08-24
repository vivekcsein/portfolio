import { type DocsItem, getFilePath } from "../docs.config";

const path = "/src/docs/dev";
export const developmentDocs = [
  {
    key: "folder-structure-guide",
    title: "Folder Structure Guide",
    description: "Top 1% best practices for backend and frontend projects",
    slug: "folder-structure-guide",
    path: "development/folder-structure-guide",
    file: getFilePath(`${path}/developer/folder-structure-guide.md`),
    createdAt: "05/08/2026",
    updatedAt: "06/08/2026",
    keywords: ["development", "backend", "frontend", "folder", "structure"],
  },
  {
    key: "vs-code-setup-guide",
    title: "VS Code Setup Guide",
    description:
      "The highest-impact keyboard shortcuts every developer should memorize first.",
    slug: "vs-code-setup-guide",
    path: "development/vs-code-setup-guide",
    file: getFilePath(`${path}/developer/vs-code-setup-guide.md`),
    createdAt: "05/08/2026",
    updatedAt: "06/08/2026",
    keywords: ["development", "developer", "vs-code", "keyboard", "shortcuts"],
  },
  {
    key: "secure-client-side-data-handling-nextjs",
    title: "Securing Data on Client Side in Next.js",
    description:
      "Role Based access and secure client side data handling in next.js",
    slug: "secure-client-side-data",
    path: "development/secure-client-side-data-handling",
    file: getFilePath(`${path}/frontend/secure-cs-data-handling-next.md`),
    createdAt: "09/08/2026",
    updatedAt: "09/08/2026",
    keywords: [
      "development",
      "frontend",
      "nextjs",
      "security",
      "data",
      "handling",
    ],
  },
] satisfies DocsItem[];

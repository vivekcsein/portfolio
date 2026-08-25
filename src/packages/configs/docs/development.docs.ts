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
    createdAt: "15/08/2026",
    updatedAt: "16/08/2026",
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
    createdAt: "23/08/2026",
    updatedAt: "24/08/2026",
    keywords: [
      "development",
      "frontend",
      "nextjs",
      "security",
      "data",
      "handling",
    ],
  },
  {
    key: "3d-models-setup-guide",
    title: "Setting Up 3D Elements (GLB Models)",
    description:
      "Reusable component setup for loading, auto-sizing, placing, and animating .glb models from your 3D designer",
    slug: "3d-models-setup-guide",
    path: "development/3d-models-setup-guide",
    file: getFilePath(`${path}/frontend/3d-models-setup-guide.md`),
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    keywords: [
      "development",
      "frontend",
      "3d",
      "glb",
      "three.js",
      "react-three-fiber",
      "models",
      "animation",
    ],
  },
] satisfies DocsItem[];

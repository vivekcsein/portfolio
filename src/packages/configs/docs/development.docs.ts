import { type DocsItem, getFilePath } from "../docs.config";

const path = "/src/docs/dev";

export const developmentDocs = [
  {
    key: "folder-structure-guide",
    title: "How to Organize Your Project Folders",
    description:
      "Learn how to structure frontend and backend projects so your code stays clean, organized, and easy to maintain as the project grows.",
    slug: "folder-structure-guide",
    path: "development/folder-structure-guide",
    file: getFilePath(`${path}/developer/folder-structure-guide.md`),
    createdAt: "15/08/2026",
    updatedAt: "16/08/2026",
    keywords: [
      "development",
      "backend",
      "frontend",
      "folder",
      "structure",
      "project organization",
    ],
  },

  {
    key: "vs-code-setup-guide",
    title: "VS Code Setup & Essential Shortcuts",
    description:
      "Set up VS Code for a smoother development workflow and learn the most useful keyboard shortcuts every developer should know.",
    slug: "vs-code-setup-guide",
    path: "development/vs-code-setup-guide",
    file: getFilePath(`${path}/developer/vs-code-setup-guide.md`),
    createdAt: "05/08/2026",
    updatedAt: "06/08/2026",
    keywords: [
      "development",
      "developer",
      "vs-code",
      "keyboard",
      "shortcuts",
      "editor",
      "productivity",
    ],
  },

  {
    key: "secure-client-side-data-handling-nextjs",
    title: "Handling Client-Side Data Securely in Next.js",
    description:
      "Understand how to protect client-side data in Next.js applications, including role-based access, permissions, and safer data-handling patterns.",
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
      "client-side",
      "data",
      "role-based-access",
      "permissions",
    ],
  },

  {
    key: "3d-models-setup-guide",
    title: "Adding 3D Models to Your Website",
    description:
      "Learn how to load and use GLB 3D models in your frontend with reusable components, automatic sizing, positioning, and animations.",
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
      "web-3d",
    ],
  },
] satisfies DocsItem[];

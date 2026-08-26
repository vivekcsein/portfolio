import { type DocsItem, getFilePath } from "../docs.config";

const path = "/src/docs/personal";
export const personalDocs = [
  // Add personal documentation here.
  {
    key: "personal-3d-models-python",
    title: "Creating 3D Models with Python Prompts in Blender",
    description:
      "Creating 3D models in Blender using natural-language prompts for personal use in portfolio.",
    slug: "personal-3d-models-python",
    href: "personal/personal-3d-models-python",
    file: getFilePath(`${path}/blender/personal-3d-models-python.md`),
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    keywords: ["personal", "blender", "3d", "models", "python", "prompts"],
  },
] satisfies DocsItem[];

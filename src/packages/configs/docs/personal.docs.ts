import { type DocsItem, getFilePath } from "../docs.config";

const path = "/personal";
export const personalDocs = [
  // Add personal documentation here.
  {
    key: "personal-3d-models-python",
    title: "Creating 3D Models with Python Prompts in Blender",
    description:
      "Creating 3D models in Blender using natural-language prompts for personal use in portfolio.",
    slug: "personal-3d-models-python",
    docPath: "personal/personal-3d-models-python",
    file: getFilePath(`${path}/blender/personal-3d-models-python.md`),
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    keywords: ["personal", "blender", "3d", "models", "python", "prompts"],
  },
  {
    key: "personal-portfolio-image-generation",
    title: "Perfect Portfolio Image Generation Prompt",
    description:
      "A detailed AI image-generation prompt for producing the portfolio's premium, futuristic visual design direction.",
    slug: "perfect-portfolio-image-generation",
    docPath: "personal/perfect-portfolio-image-generation",
    file: getFilePath(
      `${path}/portfolio-images/perfect-portfolio-image-generation.md`,
    ),
    createdAt: "26/08/2026",
    updatedAt: "26/08/2026",
    keywords: ["personal", "design", "image-generation", "prompt", "portfolio"],
  },
] satisfies DocsItem[];

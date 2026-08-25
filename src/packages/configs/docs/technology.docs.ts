import { type DocsItem, getFilePath } from "../docs.config";

const path = "/src/docs/technology";
export const technologyDocs = [
  // Add technology-specific documentation here.
  {
    key: "vercel-subdomain-deployment",
    title: "Vercel Subdomain Deployment",
    description: "How to deploy a Next.js app to a Vercel subdomain",
    slug: "vercel-subdomain-deployment",
    path: "technology/vercel-subdomain-deployment",
    file: getFilePath(
      `${path}/vercel/Vercel-subdomain-indexing-ads-monetization-guide.md`,
    ),
    createdAt: "09/08/2026",
    updatedAt: "09/08/2026",
    keywords: ["technology", "vercel", "deployment", "subdomain"],
  },

  {
    key: "blender-create-3d-models-python",
    title: "Creating 3D Models with Python Prompts in Blender",
    description:
      "Learn how to create 3D models in Blender using natural-language prompts.",
    slug: "blender-create-3d-models-python",
    path: "technology/blender/create-3d-models-python",
    file: getFilePath(`${path}/blender/create-3d-models-python.md`),
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    keywords: ["technology", "blender", "3d", "models", "python", "prompts"],
  },
] satisfies DocsItem[];

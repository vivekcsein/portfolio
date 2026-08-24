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
    file: getFilePath(`${path}/vercel-subdomain-deployment.md`),
    createdAt: "09/08/2026",
    updatedAt: "09/08/2026",
    keywords: ["technology", "vercel", "deployment", "subdomain"],
  },
] satisfies DocsItem[];

import { type DocsItem, getFilePath } from "../docs.config";

const path = "/business";

export const businessDocs = [
  {
    key: "ai-nextjs-playbook",
    title: "AI & Next.js Playbook",
    description:
      "Client Advisory & Technical Playbook: Next.js AI Integration & LLM Architecture",
    slug: "ai-nextjs-playbook",
    docPath: "business/ai-nextjs-playbook",
    file: getFilePath(`${path}/ai-nextjs-playbook.md`),
    createdAt: "22/08/2026",
    updatedAt: "22/08/2026",
    keywords: ["business", "ai", "client", "machine learning", "llm", "openai"],
  },
  {
    key: "baas-supabase-firebase",
    title: "BaaS & Supabase/Firebase Playbook",
    description:
      "Client Advisory & Technical Playbook: Supabase/Firebase Backend & Next.js App Router",
    slug: "baas-supabase-firebase",
    docPath: "business/baas-supabase-firebase",
    file: getFilePath(`${path}/baas-supabase-firebase.md`),
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    keywords: ["business", "baas", "supabase", "firebase", "client", "nextjs"],
  },
  {
    key: "nextjs-performance-playbook",
    title: "Next.js Performance Playbook",
    description:
      "Client Advisory & Technical Playbook: Next.js App Router, RSC & Performance Engineering",
    slug: "nextjs-performance-playbook",
    docPath: "business/nextjs-performance-playbook",
    file: getFilePath(`${path}/nextjs-performance-playbook.md`),
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    keywords: ["business", "performance", "nextjs", "client", "app router"],
  },
  {
    key: "seo-optimization-suite",
    title: "SEO Optimization Suite",
    description:
      "Client Advisory & Technical Playbook: Next.js App Router, SEO & Performance Engineering",
    slug: "seo-optimization-suite",
    docPath: "business/seo-optimization-suite",
    file: getFilePath(`${path}/seo-optimization-suite.md`),
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    keywords: ["business", "seo", "nextjs", "client", "app router"],
  },
] satisfies DocsItem[];

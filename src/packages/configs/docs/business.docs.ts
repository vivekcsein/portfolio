import { type DocsItem, getFilePath } from "../docs.config";

const path = "/business";

export const businessDocs = [
  {
    key: "how-to-approach-creating-app",
    title: "How to Approach Creating a Web-App from Scratch",
    description:
      "A detailed guide to creating a web app from scratch, with the exact AI prompts we use.",
    slug: "how-to-approach-creating-app",
    docPath: "business/how-to-approach-creating-app",
    file: getFilePath(`${path}/how-to-approach-creating-app.md`),
    createdAt: "09/09/2026",
    updatedAt: "09/09/2026",
    keywords: ["business", "ai", "client", "app", "nextjs"],
  },
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
    key: "how-website-live-works-hosting-live",
    title: "How Your Website Works Free: Hosting, Live Data & User Login",
    description:
      "A free guide for non-technical stakeholders on how to build a fast, secure, and scalable website with live data and user login.",
    slug: "how-website-live-works-hosting-live",
    docPath: "business/how-website-live-works-hosting-live",
    file: getFilePath(`${path}/how-website-live-works-hosting-live.md`),
    createdAt: "12/09/2026",
    updatedAt: "12/09/2026",
    keywords: [
      "business",
      "website",
      "hosting",
      "live",
      "data",
      "user",
      "login",
    ],
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

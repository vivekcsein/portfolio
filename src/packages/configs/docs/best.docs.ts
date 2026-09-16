import { type DocsItem, getFilePath } from "../docs.config";

const path = "/best";

export const bestDocs = [
  {
    key: "best-freelance-platforms-for-dev-teams-2026",
    title: "Best Freelance Platforms for Dev Teams 2026",
    description: "A list of the best freelance platforms for dev teams in 2026",
    slug: "best-freelance-platforms-for-dev-teams-2026",
    docPath: "best/best-freelance-platforms-for-dev-teams-2026",
    file: getFilePath(`${path}/best-freelance-platforms-for-dev-teams-2026.md`),
    createdAt: "",
    updatedAt: "",
    keywords: ["best", "freelance", "platform", "dev", "team", "2026"],
  },
  {
    key: "best-job-websites-for-developers-india-and-global-2026",
    title: "Best Job Websites for Developers India and Global 2026",
    description:
      "A list of the best job websites for developers in India and the world in 2026",
    slug: "best-job-websites-for-developers-india-and-global-2026",
    docPath: "best/best-job-websites-for-developers-india-and-global-2026",
    file: getFilePath(
      `${path}/best-job-websites-for-developers-india-and-global-2026.md`,
    ),
    createdAt: "",
    updatedAt: "",
    keywords: ["best", "job", "website", "india", "global", "2026"],
  },
] satisfies DocsItem[];

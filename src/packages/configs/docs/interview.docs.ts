import { type DocsItem, getFilePath } from "../docs.config";

const path = "/";

export const interviewDocs = [
  {
    key: "logical-js-interview",
    title: "Logical.js Interview",
    description: "Top 1% Logical.js Interview Questions asked by the community",
    slug: "logical-js-interview",
    docPath: "interview/logical-js-interview",
    file: getFilePath(`${path}/interview/logical-js-interview.md`),
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    keywords: ["interview", "logical.js", "interview"],
  },
  {
    key: "react-js-interview",
    title: "React.js Interview",
    description: "Top 1% React.js Interview Questions asked by the community",
    slug: "react-js-interview",
    docPath: "interview/react-js-interview",
    file: getFilePath(`${path}/interview/react-js-interview.md`),
    createdAt: "24/08/2026",
    updatedAt: "24/08/2026",
    keywords: ["interview", "react.js", "interview"],
  },
  {
    key: "next-js-interview",
    title: "Next.js Interview",
    description: "Top 100 Next.js Interview Questions asked by the community",
    slug: "next-js-interview",
    docPath: "interview/next-js-interview",
    file: getFilePath(`${path}/interview/next-js-interview.md`),
    createdAt: "07/09/2026",
    updatedAt: "07/09/2026",
    keywords: ["interview", "next.js", "interview"],
  },
] satisfies DocsItem[];

import { type CodeItem, getFilePath } from "../code.config";

const path = "/code";

export const arrayInJsCode = [
  {
    key: "array-in-js",
    title: "Array in JavaScript",
    description: "Array in JavaScript",
    slug: "array-in-js",
    docPath: "code/array-in-js",
    file: getFilePath(`${path}/array-in-js.md`),
    createdAt: "04/08/2026",
    updatedAt: "04/08/2026",
    keywords: ["array", "javascript"],
  },
] satisfies CodeItem[];

import { type DocsItem, getFilePath } from "../docs.config";

const path = "/business";

export const businessDocs = [
  {
    key: "business-1",
    title: "Client Documentation",
    description: "Documentation related to clients and projects",
    slug: "client-documentation",
    docPath: "business/client-documentation",
    file: getFilePath(`${path}/client-documentation.md`),
    createdAt: "04/08/2026",
    updatedAt: "04/08/2026",
    keywords: ["business", "client"],
  },
] satisfies DocsItem[];

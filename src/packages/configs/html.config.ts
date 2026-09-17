import path from "node:path";

export const basePath = "./src/assets/html";

export type HtmlFileConfig = {
  name: string;
  slug: string;
  folderName: string;
  fileName: string;
};

export type HtmlConfig = {
  name: string;
  description: string;
  basePath: string;
  files: HtmlFileConfig[];
};

export const htmlConfig: HtmlConfig = {
  name: "HTML",
  description: "HTML templates",
  basePath,

  files: [
    {
      name: "Tax Guru Landing Page",
      slug: "the-tax-guru",
      folderName: "the-tax-guru",
      fileName: "index.html",
    },
    {
      name: "Bill Buddy Landing Page",
      slug: "bill-buddy",
      folderName: "bill-buddy",
      fileName: "index.html",
    },
  ],
};

export function getHtmlFilePath(file: HtmlFileConfig): string {
  return path.join(basePath, file.folderName, file.fileName);
}

export function getHtmlBySlug(slug: string): HtmlFileConfig | undefined {
  return htmlConfig.files.find((file) => file.slug === slug);
}

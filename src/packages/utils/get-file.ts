import path from "node:path";

export const getFilePath = (filePath: string, fileName?: string) => {
  return path.join(process.cwd(), filePath, ...(fileName ? [fileName] : []));
};

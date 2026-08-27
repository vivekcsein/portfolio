import path from "node:path";

/** Every doc's markdown file lives under this fixed folder — kept as a
 * literal so bundlers (Turbopack/webpack) can statically scope file
 * tracing to this subfolder instead of the whole project. See the
 * "Dynamic filesystem access" build warning this fixes. */
const DOCS_ROOT = "src/docs";

/**
 * Resolves a path relative to `src/docs/`. `relativePath` should look
 * like "/development/folder-structure-guide.md" — do NOT include the
 * "src/docs" prefix, it's added here.
 */
export const getFilePath = (relativePath: string, fileName?: string) => {
  return path.join(
    process.cwd(),
    DOCS_ROOT,
    relativePath,
    ...(fileName ? [fileName] : []),
  );
};

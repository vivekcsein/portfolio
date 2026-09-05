import type { NextConfig } from "next";

// Set this to your repo name (only needed for a *project* page like
// username.github.io/rastaa — leave both empty if this repo IS your
// username.github.io root site).
const useProjectPagesBasePath =
  process.env.NEXT_PUBLIC_GH_PROJECT_PAGES === "true";
const repoName = "portfolio";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "i.ibb.co" },
    ],
    unoptimized: true,
  },

  output: "export", // static HTML export -> ./out
  basePath: useProjectPagesBasePath ? `/${repoName}` : "",
  assetPrefix: useProjectPagesBasePath ? `/${repoName}/` : "",
  trailingSlash: true, // GitHub Pages serves /route/index.html cleanly
};

export default nextConfig;

import ContentIndexPage from "@/components/features/docs-content-app/ContentIndexPage";
import { docsConfig } from "@/packages/configs/docs.config";

const DocsPage = () => {
  return (
    <ContentIndexPage
      config={docsConfig}
      badge="Developer Documentation"
      sectionHeading="Browse my Research & Development"
    />
  );
};

export default DocsPage;

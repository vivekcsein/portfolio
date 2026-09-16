import ContentIndexPage from "@/components/features/docs-content-app/ContentIndexPage";
import { codeConfig } from "@/packages/configs/code.config";

const CodePage = () => {
  return (
    <ContentIndexPage
      config={codeConfig}
      badge="Code & Snippets"
      sectionHeading="Browse my Code and Resources"
    />
  );
};

export default CodePage;

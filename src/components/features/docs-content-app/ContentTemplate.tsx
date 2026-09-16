import { notFound } from "next/navigation";

import Markdown from "@/components/ui/markdown/Markdown";
import { getContent, getContentBySlug } from "@/packages/utils/get-content";

import "@/styles/ui/content-heading.css";
import ContentHeading from "./ContentHeading";

interface ContentTemplateProps {
  slug: string[];
  config: Parameters<typeof getContentBySlug>[0];
}

const ContentTemplate = async ({ slug, config }: ContentTemplateProps) => {
  const content = getContentBySlug(config, slug);

  if (!content) {
    notFound();
  }

  const markdown = getContent(config, content);

  return (
    <article className="content-simple-page">
      <ContentHeading content={content} config={config} />

      <div className="content-simple-content">
        <Markdown content={markdown} />
      </div>
    </article>
  );
};

export default ContentTemplate;

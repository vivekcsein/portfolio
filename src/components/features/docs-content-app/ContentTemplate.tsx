import { notFound } from "next/navigation";

import AdSlot from "@/components/features/ads-live/AdSlot";
import Markdown from "@/components/ui/markdown/Markdown";
import { getContent, getContentBySlug } from "@/packages/utils/get-content";

import "@/styles/features/content/content-heading.css";
import "@/styles/features/content/content-reading-layout.css";
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
    <div className="content-reading-layout">
      <aside
        className="content-reading-rail content-reading-rail-left"
        aria-hidden="true"
      >
        <AdSlot slotId="content-rail-left" />
      </aside>

      <article className="content-simple-page">
        <ContentHeading content={content} config={config} />

        <div className="content-simple-content">
          <Markdown content={markdown} />
        </div>
      </article>

      <aside
        className="content-reading-rail content-reading-rail-right"
        aria-hidden="true"
      >
        <AdSlot slotId="content-rail-right" />
      </aside>
    </div>
  );
};

export default ContentTemplate;

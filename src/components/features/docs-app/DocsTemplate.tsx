import { notFound } from "next/navigation";
import Markdown from "@/components/ui/markdown/Markdown";
import { getDocBySlug, getDocContent } from "@/packages/utils/get-docs";
import DocsHeading from "./DocsHeading";
import "@/styles/ui/docs-heading.css";

interface DocsTemplateProps {
  slug: string[];
}

const DocsTemplate = async ({ slug }: DocsTemplateProps) => {
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const markdown = getDocContent(doc);

  return (
    <article className="content-simple-page">
      <DocsHeading doc={doc} />

      <div className="content-simple-content">
        <Markdown content={markdown} />
      </div>
    </article>
  );
};

export default DocsTemplate;

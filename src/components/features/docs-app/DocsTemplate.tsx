import Link from "next/link";
import { notFound } from "next/navigation";

import Markdown from "@/components/ui/markdown/Markdown";
import { docsConfig } from "@/packages/configs/docs.config";
import { getDocBySlug, getDocContent } from "@/packages/utils/get-docs";

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
    <article className="docs-page">
      <header className="docs-page-header">
        <Link href={`/${docsConfig.path}`} className="docs-back-link">
          ← Back to Docs
        </Link>

        <p> {doc.createdAt} </p>

        <h1>{doc.title}</h1>

        {doc.description && (
          <p className="docs-page-description">{doc.description}</p>
        )}
      </header>

      <div className="docs-page-content">
        <Markdown content={markdown} />
      </div>
    </article>
  );
};

export default DocsTemplate;

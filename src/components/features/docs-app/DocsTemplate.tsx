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
    <article className="hub-simple-page">
      <header className="hub-simple-header">
        <Link href={`/${docsConfig.path}`} className="hub-back-link">
          ← Back to Docs
        </Link>

        <p> {doc.createdAt} </p>

        <h1>{doc.title}</h1>

        {doc.description && (
          <p className="hub-simple-description">{doc.description}</p>
        )}
      </header>

      <div className="hub-simple-content">
        <Markdown content={markdown} />
      </div>
    </article>
  );
};

export default DocsTemplate;

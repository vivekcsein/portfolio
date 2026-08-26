import { notFound } from "next/navigation";
import { Link } from "@/components/ui";
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
    <article className="content-simple-page">
      <header className="content-simple-header">
        <Link
          href={`/${docsConfig.path}`}
          className="text-md"
          variant={"primary"}
        >
          ← Back to Docs
        </Link>

        <p> {doc.createdAt} </p>

        <h1>{doc.title}</h1>

        {doc.description && (
          <p className="content-simple-description">{doc.description}</p>
        )}
      </header>

      <div className="content-simple-content">
        <Markdown content={markdown} />
      </div>
    </article>
  );
};

export default DocsTemplate;

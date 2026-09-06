import { Link } from "@/components/ui";
import { docsConfig } from "@/packages/configs/docs.config";
import type { getDocBySlug } from "@/packages/utils/get-docs";

interface DocsHeadingProps {
  doc: ReturnType<typeof getDocBySlug>;
}

const DocsHeading = ({ doc }: DocsHeadingProps) => {
  if (!doc) {
    return null;
  }

  return (
    <header className="docs-heading">
      <div className="docs-heading__back">
        <Link
          href={`/${docsConfig.path}`}
          variant="primary"
          className="docs-heading__back-link"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Docs</span>
        </Link>
      </div>

      <div className="docs-heading__content">
        <h1 className="docs-heading__title">{doc.title}</h1>

        {doc.description && (
          <p className="docs-heading__description">{doc.description}</p>
        )}

        <div className="docs-heading__meta">
          {doc.updatedAt && <p>updated on : {doc.updatedAt}</p>}
        </div>
      </div>
    </header>
  );
};

export default DocsHeading;

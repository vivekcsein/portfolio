import { Link } from "@/components/ui";
import type { ContentEntry } from "@/packages/utils/get-content";
import type { ContentConfig } from "@/types/content";

interface ContentHeadingProps {
  content: ContentEntry<ContentConfig>;
  config: ContentConfig;
}

const ContentHeading = ({ content, config }: ContentHeadingProps) => {
  return (
    <header className="content-heading">
      <div className="content-heading__back">
        <Link
          href={`/${config.path}`}
          variant="primary"
          className="content-heading__back-link"
        >
          <span aria-hidden="true">←</span>
          <span>Back to {config.title}</span>
        </Link>
      </div>

      <div className="content-heading__content">
        <h1 className="content-heading__title">{content.title}</h1>

        {content.description && (
          <p className="content-heading__description">{content.description}</p>
        )}

        <div className="content-heading__meta">
          {content.updatedAt && <p>updated on : {content.updatedAt}</p>}
        </div>
      </div>
    </header>
  );
};

export default ContentHeading;

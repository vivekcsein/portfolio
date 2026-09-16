import { Link } from "@/components/ui";
import ContentTimeline from "@/components/ui/timeline/ContentTimeline";
import { normalizeCategoryContentList } from "@/packages/utils/content-card";
import type { ContentCategoryConfig, ContentConfig } from "@/types/content";

interface ContentCategoryPageProps {
  config: ContentConfig;
  category: ContentCategoryConfig;
}

/**
 * Shared "browse one category's documents" page — used by both
 * /docs/[category] and /code/[category]. Config-driven: pass the
 * section's config (docsConfig/codeConfig) and the resolved category,
 * and every label (badge, back-link, heading) adapts automatically.
 */
const ContentCategoryPage = ({
  config,
  category,
}: ContentCategoryPageProps) => {
  const contentList = normalizeCategoryContentList(
    config.path,
    category.key,
    category.children,
  );

  return (
    <main className="content-page">
      {/* Background decoration */}
      <div className="content-background" aria-hidden="true">
        <div className="content-glow content-glow-primary" />
        <div className="content-glow content-glow-secondary" />
        <div className="content-grid-pattern" />
      </div>

      <div className="content-container">
        {/* Back navigation */}
        <nav className="content-navigation">
          <Link href={`/${config.path}`} variant="primary" className="text-md">
            <span aria-hidden="true">←</span>
            <span>Back to {config.title}</span>
          </Link>
        </nav>

        {/* Hero */}
        <header className="content-hero">
          <div className="content-badge">
            <span className="content-badge-dot" />
            <span>{config.title}</span>
          </div>

          <h1 className="content-title">{category.title}</h1>

          {category.description && (
            <p className="content-description">{category.description}</p>
          )}

          <div className="content-meta">
            <span>
              {category.children.length}{" "}
              {category.children.length === 1 ? "document" : "documents"}
            </span>

            <span className="content-meta-separator">•</span>

            <span>Everything you need to get started</span>
          </div>
        </header>

        {/* Documents */}
        <ContentTimeline
          heading={`Explore our best ${category.title} ${config.slug}`}
          contentList={contentList}
        />
      </div>
    </main>
  );
};

export default ContentCategoryPage;

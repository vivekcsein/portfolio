import Link from "next/link";
import { notFound } from "next/navigation";
import KeywordsButtons from "@/components/ui/keywords/KeywordsCopy";
import { docsConfig } from "@/packages/configs/docs.config";

interface DocsCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return docsConfig.categories.map((category) => ({
    category: category.key,
  }));
}

const DocsCategoryPage = async ({ params }: DocsCategoryPageProps) => {
  const { category: categoryKey } = await params;

  const category = docsConfig.categories.find(
    (item) => item.key === categoryKey,
  );

  if (!category) {
    notFound();
  }

  return (
    <main className="docs-category-page">
      {/* Background decoration */}
      <div className="docs-category-background" aria-hidden="true">
        <div className="docs-category-glow docs-category-glow-primary" />
        <div className="docs-category-glow docs-category-glow-secondary" />
        <div className="docs-category-grid-pattern" />
      </div>

      <div className="docs-category-container">
        {/* Back navigation */}
        <nav className="docs-category-navigation">
          <Link href={`/${docsConfig.path}`} className="docs-back-link">
            <span aria-hidden="true">←</span>
            <span>Back to Docs</span>
          </Link>
        </nav>

        {/* Hero */}
        <header className="docs-category-hero">
          <div className="docs-category-badge">
            <span className="docs-category-badge-dot" />
            <span>Documentation</span>
          </div>

          <h1 className="docs-category-title">{category.title}</h1>

          {category.description && (
            <p className="docs-category-description">{category.description}</p>
          )}

          <div className="docs-category-meta">
            <span>
              {category.children.length}{" "}
              {category.children.length === 1 ? "document" : "documents"}
            </span>

            <span className="docs-category-meta-separator">•</span>

            <span>Everything you need to get started</span>
          </div>
        </header>

        {/* Documents */}
        <section
          className="docs-document-section"
          aria-labelledby="docs-document-heading"
        >
          <div className="docs-document-section-header">
            <div>
              <p className="docs-document-eyebrow">Explore</p>

              <h2 id="docs-document-heading">{category.title} documentation</h2>
            </div>

            <span className="docs-document-count">
              {String(category.children.length).padStart(2, "0")}
            </span>
          </div>

          <div className="docs-document-grid">
            {category.children.map((child, index) => (
              <Link
                key={child.key}
                href={`/${docsConfig.path}/${category.key}/${child.slug}`}
                className="docs-document-card"
                style={
                  {
                    "--docs-card-index": index,
                  } as React.CSSProperties
                }
              >
                <div className="docs-document-card-content">
                  <div className="docs-document-card-top">
                    <div className="docs-document-number">
                      {String(index + 1).padStart(2, "0")} • updated on{" "}
                      <span> {child.updatedAt}</span>
                    </div>

                    <span className="docs-document-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <div className="docs-document-card-body">
                    <h3>{child.title}</h3>

                    {child.description && <p>{child.description}</p>}

                    {child.keywords && (
                      <KeywordsButtons keywords={child.keywords} />
                    )}
                  </div>

                  <div className="docs-document-card-footer">
                    <span>Read documentation</span>

                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default DocsCategoryPage;

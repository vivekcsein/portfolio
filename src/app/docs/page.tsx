import Link from "next/link";
import { docsConfig } from "@/packages/configs/docs.config";

const DocsPage = () => {
  const totalDocuments = docsConfig.categories.reduce(
    (total, category) => total + category.children.length,
    0,
  );

  return (
    <main className="docs-category-page">
      {/* Background decoration */}
      <div className="docs-category-background" aria-hidden="true">
        <div className="docs-category-glow docs-category-glow-primary" />
        <div className="docs-category-glow docs-category-glow-secondary" />
        <div className="docs-category-grid-pattern" />
      </div>

      <div className="docs-category-container">
        {/* Hero */}
        <header className="docs-category-hero">
          <div className="docs-category-badge">
            <span className="docs-category-badge-dot" />
            <span>Developer Documentation</span>
          </div>

          <h1 className="docs-category-title">{docsConfig.title}</h1>

          <p className="docs-category-description">{docsConfig.description}</p>

          <div className="docs-category-meta">
            <span>
              {docsConfig.categories.length}{" "}
              {docsConfig.categories.length === 1 ? "category" : "categories"}
            </span>

            <span className="docs-category-meta-separator">•</span>

            <span>
              {totalDocuments} {totalDocuments === 1 ? "document" : "documents"}
            </span>

            <span className="docs-category-meta-separator">•</span>

            <span>Everything you need to build</span>
          </div>
        </header>

        {/* Categories */}
        <section
          className="docs-document-section"
          aria-labelledby="docs-category-heading"
        >
          <div className="docs-document-section-header">
            <div>
              <p className="docs-document-eyebrow">Explore</p>

              <h2 id="docs-category-heading">Browse documentation</h2>
            </div>

            <span className="docs-document-count">
              {String(docsConfig.categories.length).padStart(2, "0")}
            </span>
          </div>

          <ol
            className="docs-document-grid"
            aria-label="Documentation categories"
          >
            {docsConfig.categories.map((category, index) => (
              <Link
                key={category.key}
                href={`/${docsConfig.path}/${category.key}`}
                className="docs-document-card"
                style={
                  {
                    "--docs-card-index": index,
                  } as React.CSSProperties
                }
              >
                <div className="docs-document-card-content">
                  <div className="docs-document-card-top">
                    <span className="docs-document-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="docs-document-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <div className="docs-document-card-body">
                    <h3>{category.title}</h3>

                    {category.description && <p>{category.description}</p>}
                  </div>

                  <div className="docs-document-card-footer">
                    <span>
                      {category.children.length}{" "}
                      {category.children.length === 1
                        ? "document"
                        : "documents"}
                    </span>

                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
};

export default DocsPage;

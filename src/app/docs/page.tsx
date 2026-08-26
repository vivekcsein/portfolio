import Link from "next/link";
import { docsConfig } from "@/packages/configs/docs.config";

const DocsPage = () => {
  const totalDocuments = docsConfig.categories.reduce(
    (total, category) => total + category.children.length,
    0,
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
        {/* Hero */}
        <header className="content-hero">
          <div className="content-badge">
            <span className="content-badge-dot" />
            <span>Developer Documentation</span>
          </div>

          <h1 className="content-title">{docsConfig.title}</h1>

          <p className="content-description">{docsConfig.description}</p>

          <div className="content-meta">
            <span>
              {docsConfig.categories.length}{" "}
              {docsConfig.categories.length === 1 ? "category" : "categories"}
            </span>

            <span className="content-meta-separator">•</span>

            <span>
              {totalDocuments} {totalDocuments === 1 ? "document" : "documents"}
            </span>

            <span className="content-meta-separator">•</span>

            <span>Everything you need to build</span>
          </div>
        </header>

        {/* Categories */}
        <section className="content-section" aria-labelledby="content-heading">
          <div className="content-section-header">
            <div>
              <p className="content-eyebrow">Explore</p>

              <h2 id="content-heading">Browse my Research & Development</h2>
            </div>

            <span className="content-count">
              {String(docsConfig.categories.length).padStart(2, "0")}
            </span>
          </div>

          <ol className="content-grid" aria-label="Documentation categories">
            {docsConfig.categories.map((category, index) => (
              <Link
                key={category.key}
                href={`/${docsConfig.path}/${category.key}`}
                className="content-card"
                style={
                  {
                    "--content-card-index": index,
                  } as React.CSSProperties
                }
              >
                <div className="content-card-content">
                  <div className="content-card-top">
                    <span className="content-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="content-card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <div className="content-card-body">
                    <h3>{category.title}</h3>

                    {category.description && <p>{category.description}</p>}
                  </div>

                  <div className="content-card-footer">
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

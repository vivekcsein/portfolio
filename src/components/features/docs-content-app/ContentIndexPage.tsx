import Link from "next/link";
import type { ContentConfig } from "@/types/content";

interface ContentIndexPageProps {
  config: ContentConfig;
  badge: string;
  sectionHeading: string;
}

/**
 * Shared "browse every category" landing page — used by both /docs and
 * /code. Config-driven: pass the section's config plus the two bits of
 * copy that genuinely differ between sections (badge label, section
 * heading) and everything else (counts, cards, links) follows the
 * config automatically.
 */
const ContentIndexPage = ({
  config,
  badge,
  sectionHeading,
}: ContentIndexPageProps) => {
  const totalDocuments = config.categories.reduce(
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
            <span>{badge}</span>
          </div>

          <h1 className="content-title">{config.title}</h1>

          <p className="content-description">{config.description}</p>

          <div className="content-meta">
            <span>
              {config.categories.length}{" "}
              {config.categories.length === 1 ? "category" : "categories"}
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

              <h2 id="content-heading">{sectionHeading}</h2>
            </div>

            <span className="content-count">
              {String(config.categories.length).padStart(2, "0")}
            </span>
          </div>

          <ol
            className="content-grid"
            aria-label={`${config.title} categories`}
          >
            {config.categories.map((category, index) => (
              <Link
                key={category.key}
                href={`/${config.path}/${category.key}`}
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

export default ContentIndexPage;

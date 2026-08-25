import Link from "next/link";
import { notFound } from "next/navigation";
import KeywordsButtons from "@/components/ui/keywords/KeywordsCopy";
import projectsConfig from "@/packages/configs/projects.config";

interface ProjectsCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsConfig.projects.map((category) => ({
    category: category.key,
  }));
}

const ProjectsCategoryPage = async ({ params }: ProjectsCategoryPageProps) => {
  const { category: categoryKey } = await params;

  const project = projectsConfig.projects.find(
    (item) => item.key === categoryKey,
  );

  if (!project) {
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
          <Link href={`/${projectsConfig.cta.href}`} className="docs-back-link">
            <span aria-hidden="true">←</span>
            <span>Back to Projects</span>
          </Link>
        </nav>

        {/* Hero */}
        <header className="docs-category-hero">
          <div className="docs-category-badge">
            <span className="docs-category-badge-dot" />
            <span>Documentation</span>
          </div>

          <h1 className="docs-category-title">{project.title}</h1>

          {project.description && (
            <p className="docs-category-description">{project.description}</p>
          )}

          <div className="docs-category-meta">
            <span>{project.projectList.length} </span>

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

              <h2 id="docs-document-heading">{project.title} documentation</h2>
            </div>

            <span className="docs-document-count">
              {String(project.projectList.length).padStart(2, "0")}
            </span>
          </div>

          <div className="docs-document-grid">
            {project.projectList.map((child, index) => (
              <Link
                key={child.key}
                href={`/${projectsConfig.cta.href}/${project.key}/${child.href}`}
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

export default ProjectsCategoryPage;

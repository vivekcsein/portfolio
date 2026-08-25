import Link from "next/link";
import projectsConfig from "@/packages/configs/projects.config";

const ProjectsPage = () => {
  const totalProjects = projectsConfig.projects.reduce(
    (total, category) => total + category.projectList.length,
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

          <h1 className="docs-category-title">{projectsConfig.title}</h1>

          <p className="docs-category-description">
            {projectsConfig.description}
          </p>

          <div className="docs-category-meta">
            <span>{projectsConfig.projects.length} Projects</span>

            <span className="docs-category-meta-separator">•</span>

            <span>
              {totalProjects} {totalProjects === 1 ? "document" : "documents"}
            </span>

            <span className="docs-category-meta-separator">•</span>

            <span>Everything you need to build</span>
          </div>
        </header>

        {/* projects */}
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
              {String(projectsConfig.projects.length).padStart(2, "0")}
            </span>
          </div>

          <ol
            className="docs-document-grid"
            aria-label="Documentation projects"
          >
            {projectsConfig.projects.map((project, index) => (
              <Link
                key={project.key}
                href={`/${project.cta.href}`}
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
                    <h3>{project.title}</h3>

                    {project.description && <p>{project.description}</p>}
                  </div>

                  <div className="docs-document-card-footer">
                    <span>
                      {project.projectList.length}{" "}
                      {project.projectList.length === 1
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

export default ProjectsPage;

import Link from "next/link";
import projectsConfig from "@/packages/configs/projects.config";

const ProjectsPage = () => {
  const totalProjects = projectsConfig.projects.reduce(
    (total, category) => total + category.projectList.length,
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
            <span>Projects</span>
          </div>

          <h1 className="content-title">{projectsConfig.title}</h1>

          <p className="content-description">{projectsConfig.description}</p>

          <div className="content-meta">
            <span>{projectsConfig.projects.length} Tech Stack</span>

            <span className="content-meta-separator">•</span>

            <span>
              {totalProjects} {totalProjects === 1 ? "Project" : "Projects"}
            </span>

            <span className="content-meta-separator">•</span>

            <span>Everything you need to build</span>
          </div>
        </header>

        {/* projects */}
        <section className="content-section" aria-labelledby="content-heading">
          <div className="content-section-header">
            <div>
              <p className="content-eyebrow">Explore</p>

              <h2 id="content-heading">Browse projects</h2>
            </div>

            <span className="content-count">
              {String(projectsConfig.projects.length).padStart(2, "0")}
            </span>
          </div>

          <ol className="content-grid" aria-label="Documentation projects">
            {projectsConfig.projects.map((project, index) => (
              <Link
                key={project.key}
                href={project.cta.href}
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
                    <h3>{project.title}</h3>

                    {project.description && <p>{project.description}</p>}
                  </div>

                  <div className="content-card-footer">
                    <span>
                      {project.projectList.length}{" "}
                      {project.projectList.length === 1
                        ? "Project"
                        : "Projects"}
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

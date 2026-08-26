import Link from "next/link";
import { notFound } from "next/navigation";
import ContentTimeline from "@/components/ui/timeline/ContentTimeline";
import projectsConfig from "@/packages/configs/projects.config";

interface ProjectsCategoryPageProps {
  params: Promise<{ category: string }>;
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

  if (!project) notFound();

  return (
    <main className="content-page">
      <div className="content-background" aria-hidden="true">
        <div className="content-glow content-glow-primary" />
        <div className="content-glow content-glow-secondary" />
        <div className="content-grid-pattern" />
      </div>

      <div className="content-container">
        <nav className="content-navigation">
          <Link href={projectsConfig.cta.href} className="content-back-link">
            <span aria-hidden="true">←</span>
            <span>Back to Projects</span>
          </Link>
        </nav>

        <header className="content-hero">
          <div className="content-badge">
            <span className="content-badge-dot" />
            <span>Documentation</span>
          </div>
          <h1 className="content-title">{project.title}</h1>
          {project.description && (
            <p className="content-description">{project.description}</p>
          )}
          <div className="content-meta">
            <span>{project.projectList.length}</span>
            <span className="content-meta-separator">•</span>
            <span>Everything you need to get started</span>
          </div>
        </header>

        {/* Client-side animated timeline — data passed in, no client fetching */}
        <ContentTimeline
          title={project.title}
          contentList={project.projectList}
        />
      </div>
    </main>
  );
};

export default ProjectsCategoryPage;

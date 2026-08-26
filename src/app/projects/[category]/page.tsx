import { notFound } from "next/navigation";
import { Link } from "@/components/ui";
import ContentTimeline from "@/components/ui/timeline/ContentTimeline";
import projectsConfig from "@/packages/configs/projects.config";
import { normalizeProjectsList } from "@/packages/utils/content-normlize";

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

  const contentList = normalizeProjectsList(project.projectList);

  return (
    <main className="content-page">
      <div className="content-background" aria-hidden="true">
        <div className="content-glow content-glow-primary" />
        <div className="content-glow content-glow-secondary" />
        <div className="content-grid-pattern" />
      </div>

      <div className="content-container">
        <nav className="content-navigation">
          <Link
            href={projectsConfig.cta.href}
            variant={"primary"}
            className="text-md"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Projects</span>
          </Link>
        </nav>

        <header className="content-hero">
          <div className="content-badge">
            <span className="content-badge-dot" />
            <span>Projects</span>
          </div>
          <h2 className="content-title">{project.title}</h2>
          {project.description && (
            <p className="content-description">{project.description}</p>
          )}
          <div className="content-meta">
            <span>
              {project.projectList.length}{" "}
              {project.projectList.length === 1 ? "project" : "projects"}
            </span>
            <span className="content-meta-separator">•</span>
            <span>Explore the repositories below</span>
          </div>
        </header>

        {/* Client-side animated timeline — data passed in, no client fetching */}
        <ContentTimeline
          heading={`Explore our best ${project.title} projects`}
          contentList={contentList}
        />
      </div>
    </main>
  );
};

export default ProjectsCategoryPage;

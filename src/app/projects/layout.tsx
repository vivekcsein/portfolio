import "@/styles/features/content/content-timeline.css";

interface ProjectsLayoutPageProps {
  children: React.ReactNode;
}
const ProjectsLayoutPage = ({ children }: ProjectsLayoutPageProps) => {
  return <div className="content-layout">{children}</div>;
};

export default ProjectsLayoutPage;

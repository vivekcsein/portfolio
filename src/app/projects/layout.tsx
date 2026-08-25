import "@/styles/ui/docs.css";

interface ProjectsLayoutPageProps {
  children: React.ReactNode;
}
const ProjectsLayoutPage = ({ children }: ProjectsLayoutPageProps) => {
  return <div> {children}</div>;
};

export default ProjectsLayoutPage;

import "@/styles/ui/content-timeline.css";

interface ProjectsCategoryLayoutPageProps {
  children: React.ReactNode;
}

const ProjectsCategoryLayoutPage = ({
  children,
}: ProjectsCategoryLayoutPageProps) => {
  return <div> {children} </div>;
};

export default ProjectsCategoryLayoutPage;

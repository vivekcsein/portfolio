import "@/styles/ui/content-timeline.css";

interface CodeCateoryLayoutPageProps {
  children: React.ReactNode;
}

const CodeCategoryLayoutPage = ({ children }: CodeCateoryLayoutPageProps) => {
  return <div className="docs-layout">{children}</div>;
};

export default CodeCategoryLayoutPage;

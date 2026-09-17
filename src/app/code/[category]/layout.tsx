import "@/styles/features/content/content-timeline.css";

interface CodeCategoryLayoutProps {
  children: React.ReactNode;
}

const CodeCategoryLayout = ({ children }: CodeCategoryLayoutProps) => {
  return <div className="hub-layout">{children}</div>;
};

export default CodeCategoryLayout;

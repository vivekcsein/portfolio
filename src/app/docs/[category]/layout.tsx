import "@/styles/features/content/content-timeline.css";

interface DocsCategoryLayoutProps {
  children: React.ReactNode;
}

const DocsCategoryLayout = ({ children }: DocsCategoryLayoutProps) => {
  return <div className="hub-layout">{children}</div>;
};

export default DocsCategoryLayout;

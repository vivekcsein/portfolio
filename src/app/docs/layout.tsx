import "@/styles/ui/docs.css";
interface DocsLayoutPageProps {
  children: React.ReactNode;
}

const DocsLayoutPage = ({ children }: DocsLayoutPageProps) => {
  return <div className="docs-layout">{children}</div>;
};

export default DocsLayoutPage;

import "@/styles/ui/content.css";
interface DocsLayoutPageProps {
  children: React.ReactNode;
}

const DocsLayoutPage = ({ children }: DocsLayoutPageProps) => {
  return <div className="hub-layout">{children}</div>;
};

export default DocsLayoutPage;

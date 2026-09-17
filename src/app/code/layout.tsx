import "@/styles/features/content/content.css";
interface CodeLayoutProps {
  children: React.ReactNode;
}

const CodeLayout = ({ children }: CodeLayoutProps) => {
  return <div className="hub-layout">{children}</div>;
};

export default CodeLayout;

interface DocsCateoryLayoutPageProps {
  children: React.ReactNode;
}

const DocsCategoryLayoutPage = ({ children }: DocsCateoryLayoutPageProps) => {
  return <div className="docs-layout">{children}</div>;
};

export default DocsCategoryLayoutPage;

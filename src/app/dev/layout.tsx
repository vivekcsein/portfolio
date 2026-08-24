interface DevLayoutPageProps {
  children: React.ReactNode;
}

const DevLayoutPage = ({ children }: DevLayoutPageProps) => {
  return <div>{children}</div>;
};

export default DevLayoutPage;

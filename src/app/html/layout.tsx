interface HTMLLayoutPageProps {
  children: React.ReactNode;
}

const HTMLLayoutPage = ({ children }: HTMLLayoutPageProps) => {
  return <div> {children} </div>;
};

export default HTMLLayoutPage;

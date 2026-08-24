"use client";

import ThemeProvider from "../providers/ThemeProvider";
import Footer from "./Footer";
import Header from "./Header";

interface AppClientLayoutProps {
  children: React.ReactNode;
}
const AppClientLayout = ({ children }: AppClientLayoutProps) => {
  return (
    <ThemeProvider>
      <Header />
      <main className="main screen-height">{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default AppClientLayout;

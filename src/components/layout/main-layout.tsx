import type { FunctionComponent, ReactNode } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
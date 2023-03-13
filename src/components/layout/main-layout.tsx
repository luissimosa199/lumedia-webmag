import { FunctionComponent, ReactNode, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleToggle = () => {
    if (toggleMenu) {
      setToggleMenu(false);
      return;
    }
    setToggleMenu(true);
    return;
  };

  return (
    <>
      <Header handleToggle={() => {handleToggle()}} toggleMenu={toggleMenu} />
      {toggleMenu && (
        <div className="absolute -right-0 flex h-screen w-[70%] flex-col bg-white p-4 text-xl font-semibold">
          <button
            className="mb-2 self-end"
            onClick={handleToggle}
          >
            X
          </button>
          <ul className="flex flex-col gap-1">
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Trabaja con nosotros</li>
            <li>Publicidad</li>
            <li>Contacto</li>
          </ul>
        </div>
      )}
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

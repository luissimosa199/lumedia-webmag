import { type FunctionComponent } from "react";

interface AsideMenuProps {
  handleToggle: () => void;
}

const AsideMenu: FunctionComponent<AsideMenuProps> = ({ handleToggle }) => {
  return (
    <div className="fixed -top-0 -right-0 z-10 flex h-screen w-[70%] flex-col overflow-y-auto bg-white p-4 text-xl font-semibold">
      <button className="mb-2 self-end" onClick={handleToggle}>
        X
      </button>
      <ul className="mb-8 flex flex-col gap-1">
        <li>Inicio</li>
        <li>Sobre Nosotros</li>
        <li>Trabaja con nosotros</li>
        <li>Publicidad</li>
        <li>Contacto</li>
      </ul>

      <div>
        <h2 className="mb-2">Publicaciones recientes</h2>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2">
            <div className="h-20 w-20 flex-shrink-0 border-2"></div>
            <h3 className="text-lg">Lorem, ipsum dolor.</h3>
          </li>
          <li className="flex gap-2">
            <div className="h-20 w-20 flex-shrink-0 border-2"></div>
            <h3 className="text-lg">Lorem ipsum dolor sit.</h3>
          </li>
          <li className="flex gap-2">
            <div className="h-20 w-20 flex-shrink-0 border-2"></div>
            <h3 className="text-lg">Lorem ipsum dolor sit ipsum dolor.</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AsideMenu;
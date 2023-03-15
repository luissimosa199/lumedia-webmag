import { type FunctionComponent } from "react";
import Logo from "../logo/logo";

interface FooterProps {
    toggleMenu: boolean
  }

const Footer: FunctionComponent<FooterProps> = ({toggleMenu}) => {
  return (
    <footer className={toggleMenu ? "p-3 blur-sm" : "p-3"}>
      <Logo />
    <div className="md:flex md:gap-4 md:justify-around">

    
      <div className="mt-4 mb-4 text-gray-400">
        <div className="mb-4 flex gap-4 md:flex-col">
          <h3 className="font-semibold">Política de Privacidad</h3>
          <h3 className="font-semibold">Publicidad</h3>
        </div>
        <p className="text-xs">© Copyright ©2023 | Luis Simosa</p>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">Sobre Nosotros</h2>
        <ul className="font-semibold text-gray-400">
          <li>Sobre nosotros</li>
          <li>Trabaja con nosotros</li>
          <li>Contacto</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">Categorías</h2>
        <ul className="font-semibold text-gray-400">
          <li>Noticias</li>
          <li>Internacionales</li>
          <li>Economía</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">
          Únete a nuestra lista de mensajes
        </h2>
        <form
          onSubmit={(e) => {
            void e.preventDefault();
            void alert("Suscrito!");
          }}
          className="relative"
        >
          <input
            type="text"
            className="w-full border-2 px-2 py-1 text-gray-400"
            placeholder="Introduce tu email"
          />
          <button
            type="submit"
            className="absolute -right-0 -top-1 mr-2 mt-2 rounded bg-yellow-300 px-2 py-1 text-sm uppercase transition-all hover:opacity-75"
          >
            Suscribete!
          </button>
        </form>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

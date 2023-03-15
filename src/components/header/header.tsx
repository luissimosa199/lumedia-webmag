import { type FunctionComponent } from "react";
import Logo from "../logo/logo";
import useIsDekstop from "~/utils/isDesktop";
import NavBar from "../navBar/navBar";

interface HeaderProps {
  handleToggle: () => void;
  toggleMenu: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({
  handleToggle,
  toggleMenu,
}) => {
  const isDekstop = useIsDekstop();

  return (
    <header className="flex h-16 items-center justify-between border-b">
      <div className="ml-4">
        <Logo />
      </div>
      {isDekstop && <NavBar />}
      <nav className="flex justify-around p-2">
        <button
          className="mr-12"
          onClick={() => {
            handleToggle();
          }}
        >
          {toggleMenu ? "X" : "|||"}
        </button>
        <button className="mr-6">0</button>
      </nav>
    </header>
  );
};

export default Header;

import { type FunctionComponent } from "react";
import Logo from "../logo/logo";
import useIsDekstop from "~/utils/isDesktop";
import NavBar from "../navBar/navBar";
import Image from "next/image";

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
      <div className="flex justify-around p-2">
        <button
          className="mr-12"
          onClick={() => {
            handleToggle();
          }}
        >
          {toggleMenu ? (
            <Image
              width={24}
              height={24}
              src="https://img.icons8.com/material-outlined/24/null/multiply--v1.png"
              alt="Close Menu Button"
            />
          ) : (
            <Image
              width={24}
              height={24}
              src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/null/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png"
              alt="Open Menu Button"
            />
          )}
        </button>
        <button className="mr-6">
          <Image
            width={24}
            height={24}
            src="https://img.icons8.com/material-outlined/24/null/search--v1.png"
            alt="Search Button"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;

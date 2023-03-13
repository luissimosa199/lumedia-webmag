import { type Dispatch, type FunctionComponent, type SetStateAction } from "react";
import Logo from "../logo/logo";

interface HeaderProps {
  handleToggle: () => void,
  toggleMenu: boolean
}

const Header: FunctionComponent<HeaderProps> = ({ handleToggle, toggleMenu }) => {
  return (
    <header className="flex justify-between items-center border-b p-2 h-16">
      <Logo/>

      <nav className='flex justify-around p-2'>
        <button className='mr-12' onClick={() => { handleToggle() }}>{toggleMenu ? "X" : "|||"}</button>
        <button className='mr-6'>0</button>
      </nav>
    </header>
  );
};

export default Header;

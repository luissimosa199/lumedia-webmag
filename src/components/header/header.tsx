import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header className="flex justify-between items-center border-b p-2 h-16">
      <h1 className='text-2xl'>WEBMAG</h1>

      <nav className='flex justify-around p-2'>
        <button className='mr-12'>|||</button>
        <button className='mr-6'>0</button>
      </nav>
    </header>
  );
};

export default Header;

const NavBar = () => {
  return (
    <nav className="h-full">
      <ul className="flex h-full">
        <li className="border border-collapse px-3 leading-[3.5rem] cursor-pointer hover:opacity-75">
          Novedades
        </li>
        <li className="border border-collapse px-3 leading-[3.5rem] cursor-pointer hover:opacity-75">
          Popular
        </li>
        <li className="border border-collapse px-3 leading-[3.5rem] cursor-pointer border-b-4 border-b-yellow-300 hover:opacity-75">
          Categoria 1
        </li>
        <li className="border border-collapse px-3 leading-[3.5rem] cursor-pointer border-b-4 border-b-emerald-600 hover:opacity-75">
          Categoria 2
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

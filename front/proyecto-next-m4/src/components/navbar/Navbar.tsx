

function Navbar() {
  return (
    <nav className="h-16 shadow-md bg-customColorPrimary flex flex-row justify-between items-center">
      <img src="firma.svg" alt="Tiendi" className="h-12 m-1" />
      <ul className="flex text-white flex-row gap-4  ">
        <li>Todo</li>
        <li>Tablets</li>
        <li>Celulares</li>
        <li>Televisores</li>
        <li>Radios</li>
        <li>Otros</li>
      </ul>
      <ul className="flex space-x-2 text-white text-sm p-2 items-center">
        <li>Sign in</li>
        <li><img src="carrito.svg" alt="carrito" /></li>
      </ul>
    </nav>
  );
}

export default Navbar;

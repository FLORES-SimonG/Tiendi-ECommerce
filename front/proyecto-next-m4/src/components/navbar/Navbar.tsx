

function Navbar() {
  return (
    <nav className="h-16 bg-customColorPrimary flex flex-row justify-between items-center">
      <img src="firma.png" alt="Tiendi" className="h-12 p-2" />
      <ul className="flex space-x-4 text-white text-md font-bold">
        <li>Todo</li>
        <li>Tablets</li>
        <li>Celulares</li>
        <li>Televisores</li>
        <li>Radios</li>
        <li>Otros</li>
      </ul>
      <ul className="flex space-x-4 text-white text-sm p-2">
        <li>Sign in</li>
        <li><img src="carrito.svg" alt="carrito" /></li>
      </ul>
    </nav>
  );
}

export default Navbar;

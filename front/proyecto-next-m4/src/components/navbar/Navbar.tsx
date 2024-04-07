import { LuMenuSquare } from "react-icons/lu";
// import { IoIosSearch } from "react-icons/io";

function Navbar() {
  return (
    <nav className="h-16 shadow-md bg-customColorPrimary flex flex-row justify-between items-center p-4">
        <div className="flex bg-customColorSecondary text-white flex-row items-center p-2 h-8 rounded-md  gap-1">
          <button className="">
            <LuMenuSquare />
          </button>
          {/* <p>Categorías</p> */}
        </div>
      <ul className="flex flex-row text-white">
        {/* <li className="cursor-pointer m-2">Sobre Mi</li>
        <li className="cursor-pointer m-2">Ofertas</li>
        <li className="cursor-pointer m-2">Historial</li> */}
        {/* <li>
        <input 
        type="text"
        placeholder="Buscar productos"
        className="h-10 w-10/12 bg-white p-2 rounded-md"/> 
        </li> 
        <li className="cursor-pointer">Headphones</li>
        <li className="cursor-pointer">Cameras</li>
        <li className="cursor-pointer">Printers</li>
        <li className="cursor-pointer">Monitors</li>
        <li className="cursor-pointer">Storage</li>
      <li className="cursor-pointer">Accesories</li> */}
      </ul>
      <img src="Tiendi.svg" alt="Tiendi" className="h-12 cursor-pointer" />
      <ul className="flex flex-row text-white">
        {/* <li className="cursor-pointer m-2">Sobre Mi</li>
        <li className="cursor-pointer m-2">Ofertas</li>
        <li className="cursor-pointer m-2">Historial</li> */}
        {/* <li>
        <input 
          type="text"
          placeholder="Buscar productos"
          className="h-10 w-10/12 bg-white p-2 rounded-md"/> 
          </li> 
         <li className="cursor-pointer">Headphones</li>
        <li className="cursor-pointer">Cameras</li>
        <li className="cursor-pointer">Printers</li>
        <li className="cursor-pointer">Monitors</li>
        <li className="cursor-pointer">Storage</li>
        <li className="cursor-pointer">Accesories</li> */}
      </ul>
      <ul className="flex space-x-2 text-white text-sm  items-center">
        <li className="cursor-pointer">Ingresa</li>
        <li className="cursor-pointer ">
          <img src="carritoBlanco.svg" alt="carrito" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

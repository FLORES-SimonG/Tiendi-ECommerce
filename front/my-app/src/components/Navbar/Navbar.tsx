"use client";
import Link from "next/link";


function Navbar() {
  return (
    <nav className=" flex justify-center items-center bg-gradient-to-b from-customColorSecondary to-white
     px-4 py-4 flex-row flex-nowrap content-center">
      <ul className=" hidden md:flex lg:flex flex-row flex-wrap list-none p-0 mt-1 gap-4  content-center justify-center items-center">
       
        <Link href="/home">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-customColorPrimary transition-colors hover:bg-customColorTertiary  font-semibold">Home</li>
        </Link>
        <Link href="/register">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-customColorPrimary transition-colors hover:bg-customColorTertiary  font-semibold">Registrate</li>
        </Link>
        <Link href="/store">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-customColorPrimary transition-colors hover:bg-customColorTertiary  font-semibold">Productos</li>
        </Link>
        <Link href="/login">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-customColorPrimary transition-colors hover:bg-customColorTertiary  font-semibold">Ingresa</li>
        </Link>
        <Link href="/aboutus">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-customColorPrimary transition-colors hover:bg-customColorTertiary  font-semibold">Nosotros</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;

"use client";
// import { LuMenuSquare } from "react-icons/lu";
import { ShoppingCart } from "../cart/ShoppingCart";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";
import Link from "next/link";

function Header() {
  const context: any = useContext(ShoppingCartContext);
  return (
    <nav
      className="h-3 p-8 bg-gradient-to-b from-customColorPrimary via-customColorPrimary to-gray-300 
    flex justify-between items-center flex-row flex-nowrap "
    >
      <div className=" flex md:hidden lg:hidden  absolute left-36 top-9">
        <p className="text-black font-bold text-xs">v 2.0.24</p>
      </div>
      <Link href="/store">
      <img
        className=" h-11 cursor-pointer  m-0"
        src="/Tiendi.svg"
        alt="Tiendi"
      />
      </Link>
      <div className="flex justify-center items-center m-0 p-0 list-none">
        <div
          onClick={() => context.openMenuCheckoutProducts()}
          className="flex justify-center cursor-pointer m-0 bg-transparent w-12 h-12 flex-row flex-nowrap content-center items-center"
        >
          <img
            className=" h-7 hover:shadow-xl  "
            src="/carritoBlanco.svg"
            alt="carrito"
          />
          <span className=" absolute   top-2 right-10  p-0.5 rounded-full text-xs bg-customColorTertiary text-white">
            <ShoppingCart />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;

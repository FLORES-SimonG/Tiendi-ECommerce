"use client";
import { GiExitDoor } from "react-icons/gi";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
import Link from "next/link.js";

const BurgerMenu = () => {
  const context = useContext(ShoppingCartContext);
  const logOutUser = () => {
    router.push("/")
    context.setUserData({})

  }
  const actionMenuBurger = () => {
    if (context.isBurgerMenuOpen) {
      context.closeBurgerMenu();
    } else {
      context.openBurgerMenu();
    }
  };

  return (
    <div>
      <div
        onClick={actionMenuBurger}
        className="md:hidden lg:hidden flex flex-col items-center justify-center bg-customColorPrimary w-16 h-16 rounded-full fixed bottom-4 right-4 z-10 "
      >
        <div className="w-8 h-1 bg-white rounded-full mb-1"></div>
        <div className="w-8 h-1 bg-white rounded-full mb-1"></div>
        <div className="w-8 h-1 bg-white rounded-full mb-1"></div>
      </div>
      <aside
        className={`${
          context.isBurgerMenuOpen ? "flex" : "hidden"
        } md:hidden lg:hidden flex-col fixed right-0 bg-gradient-to-b from-customColorPrimary from-10%  via-white via-50% to-customColorPrimary to-100% z-10  border-black border h-fit rounded-lg flex flex-nowrap justify-stretch w-56 transition-all`}
      >
        <div className="flex justify-between items-center p-4  ">
          <h2 className="text-2xl font-bold text-white">Menu</h2>
          <div
            onClick={actionMenuBurger}
            className="text-white text-3xl transition-colors  font-bold cursor-pointer hover:text-customColorTertiary"
          >
            X
          </div>
        </div>
        <hr className="border-white" />
        <div className="flex flex-col justify-stretch text-center p-6">
          <Link href="/home" className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorPrimary to-60% transition-colors hover:bg-customColorTertiary  font-semibold">
            Home
          </Link>
          <Link href="/about" className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorPrimary to-60% transition-colors hover:bg-customColorTertiary  font-semibold">
            Nosotros
          </Link>
          <Link href="/login" className={`${context.userData.login !== true ? "block" : "hidden"}`}>
          <li className="cursor-pointer list-none p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorPrimary to-60% transition-colors hover:bg-customColorTertiary  font-semibold">
            Ingresa</li>
          </Link>
          <Link href="/register" className={`${context.userData.login !== true ? "block" : "hidden"}`}>
          <li className=" list-none cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorPrimary to-60% transition-colors hover:bg-customColorTertiary  font-semibold">
            Regístrate</li>
          </Link>
          <Link href="/store" className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorPrimary to-60% transition-colors hover:bg-customColorTertiary  font-semibold">
            Productos
          </Link>
          <Link href="/orders" className={`${context.userData.login == true ? "block" : "hidden"} cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorTertiary to-60% hover:scale-105 transition-all  font-semibold`}>
            Comprobantes
          </Link>
          <Link href="/checkout" className={`${context.userData.login == true ? "block" : "hidden"} cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorTertiary to-60% hover:scale-105 transition-all  font-semibold`}>
            Carrito de Compras
          </Link>
        </div>
        <div className=" justify-center">

          <Link href="/" className={`${context.userData.login == true ? "block" : "hidden"}  cursor-pointer text-xl  p-5  
          text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorTertiary to-60% flex flex-row items-center content-center justify-center h-16   transition-all  font-semibold`} onClick={logOutUser}>
            <GiExitDoor className="text-3xl" />
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default BurgerMenu;

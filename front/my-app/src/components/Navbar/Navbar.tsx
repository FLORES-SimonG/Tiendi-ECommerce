"use client";
import Link from "next/link";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";
import { GiExitDoor } from "react-icons/gi";
import { useRouter } from "next/navigation";


function Navbar() {
  const context = useContext(ShoppingCartContext);
  // console.log(localStorage.getItem("token"));
  const router = useRouter()
  const logOutUser = () => {
    localStorage.removeItem("token");
    // context.setUserData({})
    router.push("/")

  }

  return (
    <nav
      className=" flex justify-center items-center bg-gradient-to-b from-customColorSecondary to-white
     px-4 py-4 flex-row flex-nowrap content-center"
    >
      <ul className=" hidden md:flex lg:flex flex-row flex-wrap list-none p-0 mt-1 gap-4  content-center justify-center items-center">
        <Link href="/home">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorPrimary to-60% transition-colors hover:bg-customColorTertiary  font-semibold">
            Home
          </li>
        </Link>
        <Link href="/register" 
        className={`${!localStorage.getItem("token") ? "block" : "hidden"}`}> 
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorPrimary to-60% transition-colors hover:bg-customColorTertiary  font-semibold">
            Registrate
          </li>
        </Link>
        <Link href="/store">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorPrimary to-60% transition-colors hover:bg-customColorTertiary  font-semibold">
            Productos
          </li>
        </Link>
        <Link href="/login" className={`${!localStorage.getItem("token")  ? "block" : "hidden"}`}>
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorPrimary to-60% transition-colors hover:bg-customColorTertiary  font-semibold">
            Ingresa
          </li>
        </Link>
        <Link href="/about">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorPrimary to-60% transition-colors hover:bg-customColorTertiary  font-semibold">
            Nosotros
          </li>
        </Link>
        <Link href="/orders" className={`${localStorage.getItem("token")  ? "block" : "hidden"}`}> 
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorTertiary to-60% hover:scale-105 transition-all  font-semibold">
            Orden de Compras
          </li>
        </Link>
        <Link href="/checkout" className={`${localStorage.getItem("token")  ? "block" : "hidden"}`}> 
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorTertiary to-60% hover:scale-105 transition-all  font-semibold">
            Carrito de Compras
          </li>
        </Link>
        <Link href="/ " className={`${localStorage.getItem("token")  ? "block" : "hidden"}`} onClick={logOutUser}>
          <li className={`${localStorage.getItem("token")? "block" : "hidden"} cursor-pointer text-xl  p-3 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorTertiary to-60% hover:scale-105 transition-all  font-semibold`} onClick={logOutUser}>
            <GiExitDoor />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;

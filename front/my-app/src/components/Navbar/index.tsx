"use client";
import Link from "next/link";

// import { GiExitDoor } from "react-icons/gi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function Navbar() {
  const [tokenStorage, setTokenStorage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    //! Esto se ejecuta solo en el lado del cliente
    setTokenStorage(localStorage.getItem("token"));
  }, []);

  const logOutUser = () => {
    localStorage.removeItem("token");
    setTokenStorage(null);
    router.push("/");
    return toast.success("Sesión cerrada con éxito");
  };

  return (
    <nav
      className=" flex justify-center items-center 
     px-4 py-4 flex-row flex-nowrap content-center"
    >
      <ul className=" hidden md:flex lg:flex flex-row flex-wrap list-none p-0 mt-1 gap-4  content-center justify-center items-center">
        <Link href="/home">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-customColorPrimary  transition-colors hover:bg-customColorTertiary  font-semibold">
            Home
          </li>
        </Link>
        <Link
          href="/register"
          className={`${!tokenStorage ? "block" : "hidden"}`}
        >
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-customColorPrimary  transition-colors hover:bg-customColorTertiary  font-semibold">
            Registrate
          </li>
        </Link>
        <Link href="/store">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-customColorPrimary  transition-colors hover:bg-customColorTertiary  font-semibold">
            Productos
          </li>
        </Link>
        <Link href="/login" className={`${!tokenStorage ? "block" : "hidden"}`}>
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-customColorPrimary  transition-colors hover:bg-customColorTertiary  font-semibold">
            Ingresa
          </li>
        </Link>
        <Link href="/about">
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-customColorPrimary  transition-colors hover:bg-customColorTertiary  font-semibold">
            Nosotros
          </li>
        </Link>
        <Link href="/orders" className={`${tokenStorage ? "block" : "hidden"}`}>
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorTertiary to-60% hover:scale-105 transition-all  font-semibold">
            Orden de Compras
          </li>
        </Link>
        <Link
          href="/checkout"
          className={`${tokenStorage ? "block" : "hidden"}`}
        >
          <li className="cursor-pointer  p-2 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorTertiary to-60% hover:scale-105 transition-all  font-semibold">
            Carrito de Compras
          </li>
        </Link>
        <Link
          href="/ "
          className={`${tokenStorage ? "block" : "hidden"}`}
          onClick={logOutUser}
        >
          <li
            className={`${
              tokenStorage ? "block" : "hidden"
            } cursor-pointer text-xl  p-3 rounded-3xl text-gray-100 bg-gradient-to-b from-transparent from-5% to-customColorTertiary to-60% hover:scale-105 transition-all  font-semibold`}
          >
            {/* <GiExitDoor /> */}
            Salir
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;

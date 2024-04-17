"use client";

import BurgerMenu from "@/components/BurgerMenu";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { useContext } from "react";
import { ShoppingCartContext } from "@/Context";
import Link from "next/link";

export default function Login() {
  const context = useContext(ShoppingCartContext);

  console.log("este es el context=>", context);

  return (
    <div className="font-sans">
      <Header />
      <BurgerMenu />
      <Navbar />
      <div className=" flex flex-row items-center content-center justify-center my-6">
        <div
          className="
          bg-gradient-to-b from-customColorPrimary from-10% via-customColorPrimary via-25% to-transparent 
          rounded-lg shadow-xl overflow-hidden"
        >
          <div className="pt-8 px-8">
            <h2 className="text-center text-3xl font-bold text-white">
              ¡ Bienvenido/a !
            </h2>

            <form className="mt-8 space-y-6 ">
              <div className="rounded-md flex flex-col gap-4 shadow-sm">
                <div>
                  <input
                    placeholder="Tu Nombre"
                    className="  w-full px-3 py-3 rounded-md bg-slate-50 focus:outline-none focus:bg-white transition-colors sm:text-sm"
                    required
                    
                    type="string"
                    name="nombre"
                    id="name"
                  />
                </div>
                <div>
                  <input
                    placeholder="Tu Usuario"
                    className="  w-full px-3 py-3 rounded-md bg-slate-50 focus:outline-none focus:bg-white transition-colors sm:text-sm"
                    required
                    
                    type="string"
                    name="user"
                    id="user"	
                  />
                </div>
                {/* <div>
                  <input
                    placeholder="Tu Correo Electronico"
                    className="  w-full px-3 py-3 rounded-md bg-slate-50 focus:outline-none focus:bg-white transition-colors sm:text-sm"
                    required
                    
                    type="email"
                    name="email"
                    id="email"
                  />
                </div> */}
                <div>
                  <input
                    placeholder="Tu Correo Electronico"
                    className="  w-full px-3 py-3 rounded-md bg-slate-50 focus:outline-none focus:bg-white transition-colors sm:text-sm"
                    required
                    
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="">
                  <input
                    placeholder="Contraseña"
                    className="w-full px-3 py-3 borde bg-slate-50 focus:outline-none focus:bg-white transition-colors rounded-md  sm:text-sm"
                    required
                    
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </div>

              <div>
                <button
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-customColorPrimary hover:scale-110 transition-all"
                  type="submit"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 text-center">
            <span className="text-gray-400">Tienes usuario? </span>
            <Link
              className="font-medium text-indigo-500 hover:text-indigo-400"
              href="/login"
            >
              Ingresa 😎
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

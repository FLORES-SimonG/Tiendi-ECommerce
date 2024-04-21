"use client";
import BurgerMenu from "@/components/BurgerMenu";
// import Header from "../../components/Header/index";
import Navbar from "../../components/Navbar";

import { ShoppingCartContext } from "../../Context/index";
import { useContext } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { postOrders } from "../../Context/BaseDeDatos";

export default function Checkout() {
  const context = useContext(ShoppingCartContext);

  const token = localStorage.getItem("token");
  const cancelar = () => {
    toast.error("Compra Cancelada");
    context.setCartProducts([]);
  };

  const chequeoDeUsuario = () => {
    if (context.cartProducts.length === 0) {
      toast.error("No hay productos en el carrito");
    } else {
      if (localStorage.getItem("token") !== null) {
        let productosParaBack = context.cartProducts.map((producto) => {
          return producto.id;
        });

        postOrders(productosParaBack, token);
        context.setCartProducts([]);
        toast.success("COMPRADO! 🎉🎉🎉");
      } else {
        toast.error("Compra Denegada, necesitas estar logueado");
      }
    }
  };

  const productosParaFinalizarCompra = context.cartProducts;
  let total = 0;
  productosParaFinalizarCompra.forEach((producto) => {
    total += producto.price * (10 - producto.stock);
  });

  return (
    <div className=" font-sans leading-relaxed">
 
      <BurgerMenu />
      <Navbar />

      <div className="flex flex-row flex-nowrap content-center justify-center items-center my-6">
        <div className="relative  w-96 flex-row flex-nowrap content-center justify-center items-center rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
          <div className="flex justify-between items-center p-4 ">
            <h2 className="text-2xl font-bold text-black">
              Mis Productos a Comprar
            </h2>
          </div>

          <div className="flex flex-col justify-between content-center items-stretch">
            {productosParaFinalizarCompra.map((productoEnElCarrito) => (
              <div
                className="flex flex-row bg-customColorSecondary last:rounded-b-xl gap-12 justify-between items-center p-4 border-b-2 border-black border-opacity-10"
                key={productoEnElCarrito.id}
              >
                <p className="text-black text-balance  text-sm">
                  {productoEnElCarrito.name}
                </p>

                <div className="flex flex-row items-center gap-3">
                  <p className=" text-gray-400 font-semibold">
                    {productoEnElCarrito.quantity} unid.
                  </p>
                  <p className="text-gray-400">x</p>

                  <p className="text-black font-semibold  text-sm ">
                    $ {productoEnElCarrito.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row flex-nowrap content-center items-center justify-between mx-6 my-2  gap-3">
            <p className="text-black text-base font-semibold ">TOTAL A PAGAR</p>
            <p className="text-black text-xl font-semibold">$ {total}</p>
          </div>
          <div className="flex flex-row ">
            <button
              onClick={cancelar}
              className="px-4 py-2 m-2 border-b-4 border rounded-xl bg-gradient-to-b from-white from-10%  via-white via-35% to-customColorTertiary to-100%  text-black hover:text-red-600 hover:bg-red-600 hover:border-red-300 transition-all duration-200"
            >
              Cancelar
            </button>
            <Link href={"/store"}>
              <button className="px-4 py-2 m-2 border-b-4 border rounded-xl bg-gradient-to-b from-white from-10%  via-white via-35% to-customColorTertiary to-100%  text-black hover:text-blue-500 hover:bg-blue-600 transition-all hover:border-customColorPrimary duration-200">
                Volver a Productos
              </button>
            </Link>
            <button
              onClick={chequeoDeUsuario}
              className="px-4 py-2 m-2 border-b-4 border rounded-xl bg-gradient-to-b from-white from-10%  via-white via-35% to-customColorTertiary to-100%   text-black hover:text-green-500 hover:bg-green-500 transition-all hover:border-green-300 duration-200"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

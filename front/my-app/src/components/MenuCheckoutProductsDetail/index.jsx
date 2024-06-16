"use client";

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
import Link from "next/link.js";
// import { IoIosRemove } from "react-icons/io";

// import { IoIosCard } from "react-icons/io";

export const MenuCheckoutProductsDetail = () => {
  const context = useContext(ShoppingCartContext);

  const productosParaFinalizarCompra = context.cartProducts;
  let total = 0;
  productosParaFinalizarCompra.forEach((producto) => {
    total += producto.price * (10 - producto.stock);
  });

  return (
    <aside
      className={`${context.isMenuCheckoutProductsOpen ? "flex" : "hidden"}  
      transition-all  
      lg:m-4 md:m-4 lg:w-96 md:w-96 w-80 flex flex-col fixed right-0 top-12 rounded-xl
        bg-gradient-to-b m-1 from-customColorPrimary from-10%  via-white via-50% to-customColorPrimary to-100%
         z-50
         border-white border-2
          max-h-96 overflow-y-auto
          flex-stretch
        `}
    >
      <div className="flex justify-between items-center p-4  ">
        <h2 className="text-2xl font-bold text-black">Mis Ordenes</h2>

      <p>REMOVE</p>  {/* <IoIosRemove
          className="text-white text-3xl transition-colors  font-bold cursor-pointer hover:text-customColorTertiary"
          onClick={() => {
            context.closeMenuCheckoutProducts();
          }}
        /> */}
      </div>
      <hr className="border-b-2 border-black border-opacity-10" />
      <div className="flex flex-col justify-between content-center items-stretch">
        {productosParaFinalizarCompra.map((productoEnElCarrito) => (
          <div
            className="flex flex-row justify-between items-center p-6 border-b-2 border-black border-opacity-10"
            key={productoEnElCarrito.id}
          >
            <p className="text-black text-balance  text-sm">
              {productoEnElCarrito.name}
            </p>
            <div className="flex flex-row items-center gap-3">
              <p className=" text-gray-400 font-semibold">
                {productoEnElCarrito.quantity} u.
              </p>
              <p className="text-gray-400">x</p>

              <p className="text-black text-balance  text-sm ">
                $ {productoEnElCarrito.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/checkout"} onClick={context.closeMenuCheckoutProducts}>
        <div className="flex flex-row justify-between mx-6 my-2  items-center transition-transform hover:scale-105 ">
          <div className="flex flex-row items-center gap-2 ">
           <p>IoIosCard</p>
            {/* <IoIosCard
              className="md:text-white lg:text-white text-green-600 text-3xl transition-colors  font-bold cursor-pointer hover:text-green-600"
              onClick={() => {
                context.closeMenuCheckoutProducts();
              }}
            /> */}

            <p className="text-black md:text-md lg:text-md text-sm font-semibold  hover:text-green-600">
              Finalizar compra
            </p>
          </div>
          <p className="text-black md:text-lg p-1 lg:text-lg text-md bg-customColorTertiary rounded-xl md:bg-transparent   lg:bg-transparent font-semibold hover:bg-customColorTertiary hover:rounded-lg hover:p-1">
            Total: $ {total}
          </p>
        </div>
      </Link>
    </aside>
  );
};

export default MenuCheckoutProductsDetail;

"use client";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

import { ShoppingCartContext } from "../../Context/index";
import { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Checkout() {

  const cancelar = () => toast.success('Compra Cancelada ⛔');
  const comprar = () => toast.success('COMPRADO! 🎉🎉🎉');


  const context = useContext(ShoppingCartContext);
  console.log(context);
  let total = 0;
  for (let i = 0; i < context.cartProducts.length; i++) {
    total += context.cartProducts[i].price;
  }

  return (

    <div>
      <div><Toaster/></div>
      <Header />
      <Navbar />

      <div className="flex flex-row flex-nowrap content-center justify-center items-center ">
       <div
          className="flex   
        m-4 w-80  flex-col justify-center items-center 
        bg-gradient-to-b from-customColorPrimary from-10%  via-white via-50% to-customColorPrimary to-100%
        
        h-fit
        rounded-lg"
        >
          <div className="flex justify-between items-center p-4  ">
            <h2 className="text-2xl font-bold text-black">Mis Ordenes</h2>
          </div>

          <div className="flex flex-col justify-between content-center items-stretch">
            {context.cartProducts.map((productoEnElCarrito: any) => (
              <div
                className="flex flex-row  gap-12 justify-between items-center p-4 border-b-2 border-black border-opacity-10"
                key={productoEnElCarrito.id}
              >
                <p className="text-black text-balance  text-sm">
                  {productoEnElCarrito.name}
                </p>
                <p className="text-black text-balance  text-sm ">
                  $ {productoEnElCarrito.price}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-row flex-nowrap content-center items-center justify-between mx-6 my-2  gap-3">
            <p className="text-black text-base font-semibold ">TOTAL A PAGAR</p>
            <p className="text-black text-xl font-semibold">$ {total}</p>
          </div>
          <div className="flex flex-row ">
            
          <button onClick={cancelar} className="px-4 py-2 m-2 border-b-4 border rounded-xl bg-gradient-to-b from-white from-10%  via-white via-50% to-customColorPrimary to-100% border-red-500 text-black hover:text-red-600 hover:bg-red-600 transition-all duration-200">Cancelar</button>
          <button onClick={comprar} className="px-4 py-2 m-2 border-b-4 border rounded-xl bg-gradient-to-b from-white from-10%  via-white via-50% to-customColorPrimary to-100% border-green-500  text-black hover:text-green-400 hover:bg-green-400 transition-all duration-200">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

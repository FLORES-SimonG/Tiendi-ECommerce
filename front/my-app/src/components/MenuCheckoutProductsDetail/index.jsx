"use client";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
import Link from "next/link.js";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

// import { imagenDeEjemplo } from "../../../public/variablesGlobales";

export const MenuCheckoutProductsDetail = () => {
  
  const context = useContext(ShoppingCartContext);
  

  let total = 0;
  for (let i = 0; i < context.cartProducts.length; i++) {
    total += context.cartProducts[i].price;
  }
  

  return (
    <aside
      className={`${context.isMenuCheckoutProductsOpen ? "flex" : "hidden"}  
        m-4 w-80 flex flex-col fixed right-0 rounded-xl
        bg-gradient-to-b from-customColorPrimary from-10%  via-white via-50% to-customColorPrimary to-100%
         z-50
         border-customColorPrimary border
          max-h-96 overflow-y-auto
          flex-stretch
        `}
    >
      <div className="flex justify-between items-center p-4  ">
        <h2 className="text-2xl font-bold text-black">
          Mis Ordenes
        </h2>
        <IoIosCloseCircleOutline
          className="text-white text-3xl transition-colors  font-bold cursor-pointer hover:text-customColorTertiary"
          onClick={() => {
            context.closeMenuCheckoutProducts();
          }}/>
         <Link href={"/checkout"}>
        
          <IoIosCheckmarkCircleOutline className="text-white text-3xl transition-colors  font-bold cursor-pointer hover:text-green-600"
           onClick={() => {
            context.closeMenuCheckoutProducts();
            
            // context.openMenuCheckoutProducts();
          }}/>
          
       
      </Link>
      </div>
      <hr className="border-b-2 border-black border-opacity-10" />
      <div className="flex flex-col justify-between content-center items-stretch">
        {context.cartProducts.map((productoEnElCarrito) => (
          <div
            className="flex flex-row justify-between items-center p-6 border-b-2 border-black border-opacity-10"
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
      <div className="flex flex-row justify-between mx-6 my-2">
        <p className="text-black text-base font-semibold ">TOTAL</p>
        <p className="text-black text-base font-semibold">$ {total}</p>
      </div>
     
    </aside>
  );
};

export default MenuCheckoutProductsDetail;

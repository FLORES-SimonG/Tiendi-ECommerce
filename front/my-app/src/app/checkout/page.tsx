"use client";
// import Product_card from '@/components/product_card/Product_card'
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
// import Products_cards from '@/components/products_cards/Procucts_cards'
import HomeContainer from "../../components/HomeConteiner/HomeConteiner";
import PreFooter from "@/components/PreFooter/PreFooter";
// import {MenuCheckoutProductsDetail} from '@/components/MenuCheckoutProductsDetail';
import { ShoppingCartContext } from "../../Context/index";
import { useContext } from "react";

export default function Checkout() {
  const context = useContext(ShoppingCartContext);
  console.log(context);
  let total = 0;
  for (let i = 0; i < context.cartProducts.length; i++) {
    total += context.cartProducts[i].price;
  }
  return (
    <div>
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
        {/* <hr className="border-b-2 border-black border-opacity-10" /> */}
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
      </div>
          </div>

      {/* <PreFooter/> */}
      {/* <Footer /> */}
    </div>
  );
}

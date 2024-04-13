// 'use client'
// import Product_card from '@/components/product_card/Product_card'
// import Footer from '../components/footer/Footer'
// import Header from '../components/Header/Header'
// import Navbar from '../components/Navbar/Navbar'
// import Products_cards from '@/components/products_cards/Procucts_cards'
// import HomeContainer from '../components/HomeConteiner/HomeConteiner';

 import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";





export default function Welcome() {

  
  return (

    
    <div className="flex justify-center items-center flex-col h-screen w-screen transition duration-200 bg-gradient-to-b from-customColorPrimary from-10%  via-customColorPrimary via-30% to-transparent to-100%">

      <div className="p-8  border border-customColorSecondary 
      bg-gradient-to-b from-customColorPrimary from-10%  via-customColorPrimary via-30% to-transparent to-100% 
    
      rounded-lg flex flex-col items-center">
      
        <Image src="/firma.png" alt="Tiendi" width={100} height={100} className="mb-2" />
        <div className="w-full flex justify-center items-center">
          <div className="w-24 h-24 m-2 cursor-pointer rounded-full bg-gradient-to-b from-customColorPrimary from-10%  via-customColorPrimary via-30% to-transparent to-100% flex justify-center items-center text-white font-bold text-2xl transition duration-500 hover:scale-105 hover:bg-customColorTertiary shadow-md">
          <FiShoppingCart />
          </div>
        </div>
        <p className="text-lg font-bold text-center m-2">Tu Tienda Virtual</p>

        <Link href="/home">
          <button className="w-full p-2 bg-customColorTertiary py-2 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200">
            Ingresar
          </button>
        </Link>
      </div>
    </div>
  );
};
'use client';
import BurgerMenu from "@/components/BurgerMenu";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { useContext } from "react";
import { ShoppingCartContext } from "@/Context";

export default function Login() {
  const context = useContext(ShoppingCartContext);

  console.log("este es el context=>", context);
  // console.log("este es el context=>", context);
    return (
        <div>
      <Header/>
      <BurgerMenu/>
      <Navbar/>
        <h1 className="text-sm text-red-500">Login</h1>
        {/* <Footer/> */}
        </div>
    );
    }
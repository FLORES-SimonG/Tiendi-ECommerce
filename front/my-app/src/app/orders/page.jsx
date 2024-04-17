"use client";
import { ShoppingCartContext } from "@/Context";
import Image from "next/image";
import BurgerMenu from "@/components/BurgerMenu";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

import Footer from "@/components/footer/Footer";
import { useContext } from "react";
// import { imagenDeEjemplo } from "../../../../public/variablesGlobales";
import Error from "../Error"
import PreFooter from "@/components/PreFooter/PreFooter";

// interface CategoryProps {
//     params:{category: string;}
//   }

export default function Orders() {
  

  const context = useContext(ShoppingCartContext);

  //context.userData.login == true 
  const isUserActive = context.userData.login;
  
  if (isUserActive !== true) {
    return <div><Error/></div>;
  }

  

  return (
    <div>
      <Header />
      <Navbar />
      <BurgerMenu />
      
      <h1> ESTAS EN MIS ORDENES</h1>


            <PreFooter />
      <Footer />
    </div>
  );
}

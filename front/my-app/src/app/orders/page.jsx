'use client';
import React, { useContext } from "react";
import { ShoppingCartContext } from "@/Context";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import BurgerMenu from "@/components/BurgerMenu";
import Error from "../Error";
import PreFooter from "@/components/PreFooter/PreFooter";
import OrdersComponent from "../../components/OrdersComponent/index";
import { getOrders } from "@/Context/BaseDeDatos";
import Footer from "../../components/footer/Footer";

function Orders() {
  const context = useContext(ShoppingCartContext);
  // console.log("VAMOS A VER SI FUNCA",context.userData.token)
  const token = context.userData.token; // Tu token aquí
  let orders = [];

  if (token) {
    orders =  getOrders(token); // Pasar el token como parámetro
  }
  const isUserActive = context.userData.login;

  if (!isUserActive) { // Simplificado a !isUserActive
    return (
      <div>
        <Error />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Navbar />
        <BurgerMenu />
        <OrdersComponent/>
        <PreFooter />
        <Footer />
      </div>
    );
  }
}

export default Orders;

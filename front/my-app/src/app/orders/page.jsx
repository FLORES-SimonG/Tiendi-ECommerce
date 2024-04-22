"use client";
import React, { useContext } from "react";
import { ShoppingCartContext } from "@/Context";
// import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/index";
import BurgerMenu from "@/components/BurgerMenu";
import Error from "../Error";
// import PreFooter from "@/components/PreFooter/PreFooter";
import OrdersComponent from "../../components/OrdersComponent/index";
import { getUsersOrders } from "@/Context/BaseDeDatos";
// import Footer from "../../components/footer/Footer";
import { Suspense } from "react";

function Orders() {
  const context = useContext(ShoppingCartContext);
  const token = context.userData.token;
  let orders = [];
  function Loading() {
    return <h2>Cargando, espere por favor...</h2>;
  }

  if (token) {
    orders = getUsersOrders(token);
  }
  const isUserActive = localStorage.getItem("token");

  if (!isUserActive) {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <Error />
        </Suspense>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <BurgerMenu />
        <Suspense fallback={<Loading />}>
          <OrdersComponent />
        </Suspense>
      </div>
    );
  }
}

export default Orders;

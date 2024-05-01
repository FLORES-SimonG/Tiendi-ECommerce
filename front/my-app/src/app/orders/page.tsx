"use client";
import Navbar from "@/components/Navbar/index";
import BurgerMenu from "@/components/BurgerMenu";
import Error from "../Error";
import OrdersComponent from "../../components/OrdersComponent/index";
import { Suspense } from "react";
import Header from "@/components/Header";

function Orders() {
  const isUserActive = localStorage.getItem("token");

  function Loading() {
    return <h2>Cargando, espere por favor...</h2>;
  }

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
        <Suspense fallback={<Loading />}>
          <Header />
          <Navbar />
          <BurgerMenu />
          <OrdersComponent />
        </Suspense>
      </div>
    );
  }
}

export default Orders;

"use client";

import Navbar from "@/components/Navbar/index";
import BurgerMenu from "@/components/BurgerMenu";
import Error from "../Error";
import OrdersComponent from "../../components/OrdersComponent/index";
import { Suspense, useEffect, useState } from "react";
import Header from "@/components/Header";

function Orders() {
  const [isUserActive, setIsUserActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica si estás en el cliente
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsUserActive(!!token);
      setIsLoading(false);
    }
  }, []);

  function Loading() {
    return <h2>Cargando, espere por favor...</h2>;
  }

  if (isLoading) {
    return <Loading />;
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

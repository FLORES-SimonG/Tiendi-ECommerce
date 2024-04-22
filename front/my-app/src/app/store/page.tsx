"use client";

import Navbar from "@/components/Navbar";
// import Products_cards from "@/components/products_cards/Procucts_cards";
import { Suspense } from "react";

import BurgerMenu from "@/components/BurgerMenu/index";
import CarouselFilter from "@/components/CarouselFilter/index";
import dynamic from "next/dynamic";

const ProductsCardsDynamic = dynamic(
  () => import("@/components/products_cards/Procucts_cards"),
  { ssr: false }
);
function Loading() {
  return <h2>Cargando, espere por favor...</h2>;
}

export default function Store() {
  return (
    <div className="font-sans">
      <BurgerMenu />
      <Navbar />
      <Suspense fallback={<Loading />}>

      <CarouselFilter />
      <ProductsCardsDynamic />
      </Suspense>
    </div>
  );
}

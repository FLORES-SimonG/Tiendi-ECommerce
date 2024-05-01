"use client";

import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import BurgerMenu from "@/components/BurgerMenu/index";
import CarouselFilter from "@/components/CarouselFilter/index";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

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
      <Header />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <CarouselFilter />
        <ProductsCardsDynamic />
      </Suspense>
    </div>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Products_cards from "@/components/products_cards/Procucts_cards";

import BurgerMenu from "@/components/BurgerMenu/index";
import CarouselFilter from "@/components/CarouselFilter/index";

export default function Store() {
  return (
    <div className="font-sans">
      <BurgerMenu />
      <Navbar />
      <CarouselFilter />
      <Products_cards />
    </div>
  );
}

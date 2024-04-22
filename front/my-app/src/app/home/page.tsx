"use client";

import Navbar from "../../components/Navbar";

import HomeContainer from "../../components/HomeConteiner/index";

import BurgerMenu from "@/components/BurgerMenu";

export default function Home() {

  
  return (
    <div className=" font-sans leading-relaxed">
  
      <BurgerMenu />
      <Navbar />

      <HomeContainer />
    </div>
  );
}

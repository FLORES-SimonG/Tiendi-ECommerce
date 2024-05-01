// "use client";

import Navbar from "../../components/Navbar";

import HomeContainer from "../../components/HomeConteiner/index";

import BurgerMenu from "@/components/BurgerMenu";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className=" font-sans leading-relaxed">
      <BurgerMenu />
      <Header />
      <Navbar />

      <HomeContainer />
    </div>
  );
}

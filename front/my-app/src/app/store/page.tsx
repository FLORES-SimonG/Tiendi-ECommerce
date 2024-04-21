'use client';
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
// import Navbar from "@/components/Header/Header";
import Navbar from "@/components/Navbar";
import Products_cards from "@/components/products_cards/Procucts_cards";
// import ProductDetail from "../../components/ProductDetail/index";
// import MenuCheckoutProductsDetail from "../../components/MenuCheckoutProductsDetail/index";
import PreFooter from "@/components/PreFooter";
import BurgerMenu from "@/components/BurgerMenu/index";
import CarouselFilter from "@/components/CarouselFilter/index";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index"



// import Carousel from "@/components/Carousel/Carousel";

export default function Store() {
  const context = useContext(ShoppingCartContext);
  // console.log("el token furioso=>",context.userData.token)
  return (
    <div className="font-sans">
      {/* <Header /> */}
      <BurgerMenu />
      {/* <ProductDetail /> */}
      <Navbar />
      <CarouselFilter/>
     
      <Products_cards />
      
      {/* <PreFooter /> */}
      {/* <Footer /> */}
      
    </div>
  );
}

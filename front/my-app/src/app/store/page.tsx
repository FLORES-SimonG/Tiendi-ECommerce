'use client';
// import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
// import Navbar from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Products_cards from "@/components/products_cards/Procucts_cards";
// import ProductDetail from "../../components/ProductDetail/index";
// import MenuCheckoutProductsDetail from "../../components/MenuCheckoutProductsDetail/index";
import PreFooter from "@/components/PreFooter/PreFooter";
import BurgerMenu from "@/components/BurgerMenu/index";
import CarouselFilter from "@/components/CarouselFilter/index";


// import Carousel from "@/components/Carousel/Carousel";

export default function Store() {
  return (
    <div className="font-sans">
      <Header />
      <BurgerMenu />
      {/* <ProductDetail /> */}
      <Navbar />
      <CarouselFilter/>
     
      <Products_cards />
      
      <PreFooter />
      
    </div>
  );
}

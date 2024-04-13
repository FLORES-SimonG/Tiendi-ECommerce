// import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
// import Navbar from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Products_cards from "@/components/products_cards/Procucts_cards";
import ProductDetail from "../../components/ProductDetail/index";
// import MenuCheckoutProductsDetail from "../../components/MenuCheckoutProductsDetail/index";
import PreFooter from "@/components/PreFooter/PreFooter";
import Filter from "@/components/Filter/Filter";

// import Carousel from "@/components/Carousel/Carousel";

export default function Store() {
  return (
    <div>
      <Header />
      <ProductDetail />
      <Navbar />
      <Filter/>
      <h2>Store</h2>
      <Products_cards />

      <PreFooter />
      
    </div>
  );
}

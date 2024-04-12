import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
// import Navbar from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Products_cards from "@/components/products_cards/Procucts_cards";
import ProductDetail from "../../components/ProductDetail/index";
import MenuCheckoutProductsDetail from "../../components/MenuCheckoutProductsDetail/index";
import PreFooter from "@/components/PreFooter/PreFooter";



export default function Store() {
    return (
        <div>
      <Header/>

        <ProductDetail/>
        <MenuCheckoutProductsDetail/>
      <Navbar/>
        <h1>Store</h1>
        <Products_cards/>
        <Products_cards/>
        <Products_cards/>
        <Products_cards/>
        <Products_cards/>
        <PreFooter/>
        <Footer/>
        </div>
    );
    }

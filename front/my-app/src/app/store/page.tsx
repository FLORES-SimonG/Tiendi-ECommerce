import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
// import Navbar from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Products_cards from "@/components/products_cards/Procucts_cards";
import ProductDetails from "../../components/ProductDetail/index";
import PreFooter from "@/components/PreFooter/PreFooter";



export default function Store() {
    return (
        <div>
      <Header/>
        <ProductDetails/>
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

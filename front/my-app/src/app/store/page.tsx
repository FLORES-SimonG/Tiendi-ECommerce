import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
// import Navbar from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Products_cards from "@/components/products_cards/Procucts_cards";



export default function Store() {
    return (
        <div>
      <Header/>
      <Navbar/>
        <h1>Store</h1>
        <Products_cards/>
        <Products_cards/>
        <Products_cards/>
        <Products_cards/>
        <Products_cards/>
        <Footer/>
        </div>
    );
    }

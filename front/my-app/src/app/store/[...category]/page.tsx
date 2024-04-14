
import { ShoppingCartContext } from "@/Context";
import BurgerMenu from "@/components/BurgerMenu";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { ShoppingCart } from "@/components/cart/ShoppingCart";
import Footer from "@/components/footer/Footer";
import { useContext } from "react";
// import { ShoppingCart } from "@/components/cart/ShoppingCart";



interface CategoryProps {
    params:{category: string;}
  }
  
export default function Category(props: CategoryProps) {
    const { category } = props.params;

    const context = useContext(ShoppingCartContext);
    console.log(category);
    return (
        <div>
            <Header/>
            <Navbar/>
            <BurgerMenu/>
            <h1>Categoria Dinámica: {category}</h1>

            <Footer/>
        </div>
    );
    }
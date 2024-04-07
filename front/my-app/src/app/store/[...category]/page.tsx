
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";


interface CategoryProps {
    params:{category: string;}
  }
  
export default function Category(props: CategoryProps) {
    const { category } = props.params;
    return (
        <div>
            <Header/>
            <Navbar/>
            <h1>Categoria Dinámica: {category}</h1>
            <Footer/>
        </div>
    );
    }
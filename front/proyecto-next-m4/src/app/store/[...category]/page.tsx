
import Navbar from "../../../components/navbar/Navbar";

interface CategoryProps {
    params:{category: string;}
  }
  
export default function Category(props: CategoryProps) {
    const { category } = props.params;
    return (
        <div>
            <Navbar/>
            <h1>Categoria Dinámica: {category}</h1>
            
        </div>
    );
    }
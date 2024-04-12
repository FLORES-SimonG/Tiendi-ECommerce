import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";



export const ShoppingCart = () => {
    const context=useContext(ShoppingCartContext);
    

    

    return (

        <div >
            
            <span >{context.count}</span>
            
        </div>
    );



};
'use client';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
// import { imagenDeEjemplo } from "../../../public/variablesGlobales";






export const MenuCheckoutProductsDetail = ()=>{
    // alert('se ejecuto');
    const context = useContext(ShoppingCartContext);
    // console.log(context.productToShow)
    return(
        <aside 
        className={`${context.isMenuCheckoutProductsOpen? 'flex':'hidden'}  
        m-4 w-80 flex flex-col fixed right-0 
        bg-gradient-to-b from-customColorPrimary from-10%  via-white via-50% to-customColorPrimary to-100%
        z-10  border-black border
         h-fit
         rounded-lg
        `}>
           <div className="flex justify-between items-center p-4  ">
               <h2 className="text-2xl font-bold text-black">Mis Ordenes</h2>
               <IoIosCloseCircleOutline className="text-white text-3xl transition-colors  font-bold cursor-pointer hover:text-customColorTertiary" onClick={()=>{context.closeMenuCheckoutProducts()}}/>
           </div>
           
           

        </aside>
    );
}


export default MenuCheckoutProductsDetail;
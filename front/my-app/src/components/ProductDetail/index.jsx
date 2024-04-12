'use client';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";







const ProductDetail = ()=>{
    const context = useContext(ShoppingCartContext);
    return(
        <aside 
        className={`${context.isProductDetailOpen? 'flex':'hidden'} w-80 h-4/5 flex flex-col fixed right-0 bg-red-500 border border-blue-700 rounded-lg`}>
           <div className="flex justify-between items-center ">
               <h2 className="text-2xl font-bold text-white p-6">Product Detail</h2>
               <IoIosCloseCircleOutline className="text-white text-2xl font-bold m-2"/>

           </div>

        </aside>
    );
}


export default ProductDetail;
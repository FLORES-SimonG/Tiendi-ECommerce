'use client';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
import "./styles.css";
import Image from 'next/image';
import { imagenDeEjemplo } from "../../../public/variablesGlobales";





const ProductDetail = ()=>{
    const context = useContext(ShoppingCartContext);
    console.log(context.productToShow)
    return(
        <aside 
        className={`${context.isProductDetailOpen? 'flex':'hidden'} detalleProductoIndividual 
        m-4 w-80 flex flex-col fixed right-0
        bg-gradient-to-b from-customColorPrimary from-10%  via-white via-50% to-customColorPrimary to-100%
        z-10  border-black border
         rounded-lg`}>
           <div className="flex justify-between items-center p-6  ">
               <h2 className="text-2xl font-bold text-white">Product Detail</h2>
               <IoIosCloseCircleOutline className="text-white text-3xl transition-colors  font-bold cursor-pointer hover:text-customColorTertiary" onClick={()=>{context.closeProductDetail()}}/>
           </div>
           <hr className="border-white"/>
           <div className="flex flex-col items-center p-6">
               {/* <Image src={context.productToShow.image} width={300} height={300} alt="imagen" className="w-64 h-64 object-cover"/> */}
               <img src={imagenDeEjemplo} alt="imagen" className="w-64 h-64 object-cover"/>
               <h3 className="text-xl font-bold text-white">{context.productToShow.name}</h3>
               <p className="text-white">{context.productToShow.description}</p>
               <p className="text-white font-bold">$100</p>
               <button className="bg-customColorSecondary text-white p-2 rounded-lg">Add to Cart</button>
           </div>

        </aside>
    );
}


export default ProductDetail;
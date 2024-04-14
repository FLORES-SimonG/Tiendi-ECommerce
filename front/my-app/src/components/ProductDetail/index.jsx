'use client';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";

import Image from 'next/image';
import { imagenDeEjemplo } from "../../../public/variablesGlobales";
import Link from 'next/link';





const ProductDetail = ()=>{
    const context = useContext(ShoppingCartContext);

    // console.log("este es context.productToShow",context.productToShow)
    // console.log("este es context",context)
    // alert('se ejecuto')
  
    const nombreConGuiones = (linkDirection = false) => {
        if (linkDirection && context.productToShow && context.productToShow.name) {
          return context.productToShow.name.replace(/\s/g, '-');
        }
        return '';
      };
    return(
        <aside 
        className={`${context.isProductDetailOpen? 'flex':'hidden'}  
        m-4 w-80 flex flex-col fixed right-0 
        bg-gradient-to-b from-customColorPrimary from-10%  via-white via-50% to-customColorPrimary to-100%
        z-10  border-black border
         h-fit
         rounded-lg
        `}>
           <div className="flex justify-between items-center p-4  ">
               <h2 className="text-2xl font-bold text-white">Product Detail</h2>
               <IoIosCloseCircleOutline className="text-white text-3xl transition-colors  font-bold cursor-pointer hover:text-customColorTertiary" onClick={()=>{context.closeProductDetail()}}/>
           </div>
           <hr className="border-white"/>
           <div className="flex flex-col items-center p-6">
              
               <img src={imagenDeEjemplo} alt="imagen" className=" w-48 h-48 object-cover rounded-xl"/>
               <h3 className="text-xl font-bold text-black m-2">{context.productToShow.name}</h3>
               <p className="text-black text-balance  text-sm">{context.productToShow.description}</p>
               
           </div>
           <Link href={"/store/"+nombreConGuiones(true)}>
           {/* <Link href={`/store/${nombreConGuiones}`}> */}
              <button className="bg-customColorTertiary text-white p-2 rounded-lg m-2" onClick={()=>{ nombreConGuiones(true) }}>Ver más detalles</button>
           </Link>

        </aside>
    );
}


export default ProductDetail;
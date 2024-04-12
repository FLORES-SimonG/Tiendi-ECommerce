'use client';
import { createContext } from "react";
import { useState } from "react";



export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children})=>{

    const [count, setCount] = useState(0);
    // console.log('CLICK N°: '+count);

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = ()=>{setIsProductDetailOpen(true)};
    const closeProductDetail = ()=>{setIsProductDetailOpen(false)};

    const [productToShow, setProductToShow] = useState({});
    return(
        <ShoppingCartContext.Provider value={{count, setCount, openProductDetail, closeProductDetail, isProductDetailOpen, setProductToShow, productToShow}}>
            {children}
        </ShoppingCartContext.Provider>
    );
}
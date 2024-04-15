"use client";
import { createContext } from "react";
import { useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //* Contexto de la aplicación
  const [count, setCount] = useState(0);
  // console.log('CLICK N°: '+count);

  //* Contexto de la funcionalidad de los productos
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {setIsProductDetailOpen(true);};
  const closeProductDetail = () => {setIsProductDetailOpen(false);};

  //* Contexto del Carrito
  const [cartProducts, setCartProducts] = useState([]);

  //* Contexto de los productos para ver en detalle
  const [productToShow, setProductToShow] = useState({});


  //* Contexto de la funcionalidad de los productos
  const [isMenuCheckoutProductsOpen, setIsMenuCheckoutProductsOpen] =useState(false);
  const openMenuCheckoutProducts = () => {setIsMenuCheckoutProductsOpen(true)};
  const closeMenuCheckoutProducts = () => {setIsMenuCheckoutProductsOpen(false);};

  //* Contexto del BurgerMenu
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const openBurgerMenu = () => {setIsBurgerMenuOpen(true);};
  const closeBurgerMenu = () => {setIsBurgerMenuOpen(false);};

  //* Capturador de los datos del Producto:
   let [productData, setProductData] = useState({});
  


  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        setProductToShow,
        productToShow,
        cartProducts,
        setCartProducts,
        isMenuCheckoutProductsOpen,
        openMenuCheckoutProducts,
        closeMenuCheckoutProducts,
        isBurgerMenuOpen,
        openBurgerMenu,
        closeBurgerMenu,
        setProductData,
        productData
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

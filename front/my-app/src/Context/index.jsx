"use client";
import { createContext } from "react";
import { useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  //* Contexto del Carrito
  const [cartProducts, setCartProducts] = useState([]);


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


    // const [productsFromBackend, setProductsFromBackend] = useState([]); //! No borrar, puede ser de ayuda futura
  


  return (
    <ShoppingCartContext.Provider
      value={{
       
        cartProducts,
        setCartProducts,
        isMenuCheckoutProductsOpen,
        openMenuCheckoutProducts,
        closeMenuCheckoutProducts,
        isBurgerMenuOpen,
        openBurgerMenu,
        closeBurgerMenu,
        setProductData,
        productData,
        // productsFromBackend, //! No borrar, puede ser de ayuda futura
        // setProductsFromBackend, //! No borrar, puede ser de ayuda futura
       
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

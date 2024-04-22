"use client";
import { createContext } from "react";
import { useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //* Contexto del Carrito
  const [cartProducts, setCartProducts] = useState([]);

  //* Contexto de la funcionalidad de los productos
  const [isMenuCheckoutProductsOpen, setIsMenuCheckoutProductsOpen] =
    useState(false);
  const openMenuCheckoutProducts = () => {
    setIsMenuCheckoutProductsOpen(true);
  };
  const closeMenuCheckoutProducts = () => {
    setIsMenuCheckoutProductsOpen(false);
  };

  //* Contexto del BurgerMenu
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const openBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  };
  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  //* Capturador de los datos del Producto:
  let [productData, setProductData] = useState({});

  let [loginDelUsuario, setLoginDelUsuario] = useState(false);

  const [itemsFromLogin, setItemsFromLogin] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({});
  const [itemsFromRegister, setItemsFromRegister] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [token, setToken] = useState("");

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
        itemsFromLogin,
        setItemsFromLogin,
        errors,
        setErrors,
        userData,
        setUserData,
        itemsFromRegister,
        setItemsFromRegister,
        loginDelUsuario,
        setLoginDelUsuario,
        token,
        setToken
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

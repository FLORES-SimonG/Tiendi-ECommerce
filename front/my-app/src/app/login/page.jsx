"use client";

import BurgerMenu from "@/components/BurgerMenu";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "@/Context";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { validateLogin } from "../../helpers/validateLogin";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  //! http://localhost:5000/users/login => POST

  const context = useContext(ShoppingCartContext);
  const router = useRouter()

  useEffect(() => {}, [context.userData]);

  console.log("Usuario Logueado =>", context.userData);
  
  const handlerInputChangeFromLogin = (evento) => {
    const { name, value } = evento.target;
    context.setItemsFromLogin({ ...context.itemsFromLogin, [name]: value });
    
    const itemsActualizadoFromLogin = {
      ...context.itemsFromLogin,
      [name]: value,
    };
    const newErrors = validateLogin(itemsActualizadoFromLogin);
    context.setErrors(newErrors);
    
    if (newErrors[name] === true) {
      context.setErrors({ ...context.errors, [name]: newErrors[name] });
      console.log("Errores en el formulario", context.errors);
    } else {
      const { [name]: value, ...restErrors } = context.errors;
      context.setErrors(restErrors);
      console.log("Errores en el formulario", context.errors);
    }
  };
  
  const handlerSubmitFromLogin = async (evento) => {
    
    evento.preventDefault();
    
    const newErrors = validateLogin(context.itemsFromLogin);
    
    if (Object.keys(newErrors).length > 0) {
      context.setErrors(newErrors);
      // console.log(
        //   "Hay errores en el formulario, completa correctamente",
        //   newErrors
        // );
        return alert("Hay errores en el formulario, completa correctamente");
      }
      
      try {
        const response = await axios.post("http://localhost:5000/users/login", {
          email: context.itemsFromLogin.email,
          password: context.itemsFromLogin.password,
        });
        
        // console.log("Usuario a loguear", response.data.login);
        context.setUserData(response.data);
        //  console.log("Bienvenido a la tienda",context.userData);
        context.setToken(context.userData.token);
      router.push('/orders')
    } catch (error) {
      // console.error("Error al iniciar sesion", error);
      alert("Error al iniciar sesion, usuario o contraseña incorrectos.");
    }
    // console.log("Usuario Logueado con Effect =>", context.userData);
    // console.log("Token =>", context.token);
  };
  
  return (
    <div className="font-sans">
      <Header />
      <BurgerMenu />
      <Navbar />
      <div className=" flex flex-row items-center content-center justify-center my-6">
        <div
          className="
          bg-gradient-to-b from-customColorPrimary from-10% via-customColorPrimary via-25% to-transparent 
          rounded-lg shadow-xl overflow-hidden"
        >
          <div className="pt-8 px-8">
            <h2 className="text-center text-3xl font-bold text-white">
              ¡ Hola de nuevo !
            </h2>

            <form className="mt-8 space-y-6" onSubmit={handlerSubmitFromLogin}>
              <div className="rounded-md shadow-sm">
                <div>
                  <input
                    type="text"
                    value={context.itemsFromLogin.email}
                    name="email"
                    placeholder="Usuario@email.com"
                    onChange={handlerInputChangeFromLogin}
                    className={`${
                      context.errors.email === true
                        ? "bg-errorColor"
                        : "bg-white"
                    } w-full px-3 py-3 rounded-md  focus:outline-none  transition-colors sm:text-sm`}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    value={context.itemsFromLogin.password}
                    name="password"
                    placeholder="Contraseña"
                    onChange={handlerInputChangeFromLogin}
                    className={` ${
                      context.errors.password === true
                        ? "bg-errorColor"
                        : "bg-white"
                    } w-full px-3 py-3 rounded-md  focus:outline-none  transition-colors sm:text-sm`}
                  />
                </div>
              </div>

              <div>
                <button
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-customColorPrimary hover:scale-110 transition-all"
                  type="submit"
                >
                  Ingresa
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 text-center">
            <span className="text-gray-400">No tienes usuario? </span>
            <Link
              className="font-medium text-indigo-500 hover:text-indigo-400"
              href="/register"
            >
              Regístrate 😎
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

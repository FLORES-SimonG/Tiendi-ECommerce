"use client";

import BurgerMenu from "@/components/BurgerMenu";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "@/Context";
import Link from "next/link";
import { validateRegister } from "../../helpers/validateRegister";
import axios from "axios";

export default function Register() {
   //! http://localhost:5000/users/login => POST
  
  const context = useContext(ShoppingCartContext);
 
  const handlerInputChangeFromRegister = (evento) => {
    const { name, value } = evento.target;
    context.setItemsFromRegister({ ...context.itemsFromRegister, [name]: value });
    
    const itemsActualizadoFromRegister = {
      ...context.itemsFromRegister,
      [name]: value,
    };
    const newErrors = validateRegister(itemsActualizadoFromRegister);
    if (newErrors[name]){
      context.setErrors({...context.errors, [name]: newErrors[name]});
    }else{
      const {[name]: value, ...restErrors} = context.errors;
      context.setErrors(restErrors);
    }
  }

  const handleOnSubmitFromRegister = async (evento) => {
    evento.preventDefault();
    const newErrors = validateRegister(context.itemsFromRegister);
    if (Object.keys(newErrors).length > 0) {
      context.setErrors(newErrors);
      console.log(
        "Hay errores en el formulario, completa correctamente",
        newErrors
      );
      return alert("Hay errores en el formulario, completa correctamente");
    }
    try {
      const response = await axios.post("http://localhost:5000/users/register", {
        name: context.itemsFromRegister.name,
        email: context.itemsFromRegister.email,
        password: context.itemsFromRegister.password,
        address: context.itemsFromRegister.address,
        phone: context.itemsFromRegister.phone,
      });
      alert("Usuario registrado correctamente");
    
      
    } catch (error) {
      console.error("Error al registrar usuario", error);
      alert("Error al registrar usuario");
      
    }
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
              ¡ Bienvenido/a !
            </h2>

            <form className="mt-8 space-y-6 "onSubmit={handleOnSubmitFromRegister}>
              <div className="rounded-md flex flex-col gap-4 shadow-sm">
                <div>
                  <input
                  value={context.itemsFromRegister.name}
                    placeholder="Tu Nombre"
                    className="  w-full px-3 py-3 rounded-md bg-slate-50 focus:outline-none focus:bg-white transition-colors sm:text-sm"
                    // required
                    onChange={handlerInputChangeFromRegister}
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div>
                  <input
                  value={context.itemsFromRegister.email}
                    placeholder="Tu Correo Electronico"
                    className="  w-full px-3 py-3 rounded-md bg-slate-50 focus:outline-none focus:bg-white transition-colors sm:text-sm"
                    required
                    onChange={handlerInputChangeFromRegister}
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="">
                  <input
                  value={context.itemsFromRegister.password}
                    placeholder="Contraseña"
                    className="w-full px-3 py-3 borde bg-slate-50 focus:outline-none focus:bg-white transition-colors rounded-md  sm:text-sm"
                    required
                    onChange={handlerInputChangeFromRegister}
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div>
                  <input
                  value={context.itemsFromRegister.address}
                    placeholder="Tu Dirección"
                    className="  w-full px-3 py-3 rounded-md bg-slate-50 focus:outline-none focus:bg-white transition-colors sm:text-sm"
                    required
                    onChange={handlerInputChangeFromRegister}
                    type="string"
                    name="address"
                    id="address"	
                  />
                </div>
                <div>
                  <input
                  value={context.itemsFromRegister.phone}
                    placeholder="Tu número de teléfono"
                    className="  w-full px-3 py-3 rounded-md bg-slate-50 focus:outline-none focus:bg-white transition-colors sm:text-sm"
                    required
                    onChange={handlerInputChangeFromRegister}
                    type="number"
                    name="phone"
                    id="phone"
                  />
                </div>
              
                
              </div>

              <div>
                <button
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-customColorPrimary hover:scale-110 transition-all"
                  type="submit"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 text-center">
            <span className="text-gray-400">Tienes usuario? </span>
            <Link
              className="font-medium text-indigo-500 hover:text-indigo-400"
              href="/login"
            >
              Ingresa 😎
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

"use client";
import { ShoppingCartContext } from "@/Context";
import Image from "next/image";
import BurgerMenu from "@/components/BurgerMenu";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
// import { BiCartDownload } from "react-icons/bi";
// import { MdFavoriteBorder } from "react-icons/md";
// import { TbListDetails } from "react-icons/tb";

import Link from "next/link";

import Footer from "@/components/footer/Footer";
import { useContext } from "react";
import { imagenDeEjemplo } from "../../../../public/variablesGlobales";

// interface CategoryProps {
//     params:{category: string;}
//   }

export default function Category(props: any) {
  const { category } = props.params;
  const context = useContext(ShoppingCartContext);
  const detalleIndividualDelProucto = context.productData;
  // console.log('DETALLE INDIVIDUAL DEL PRODUCTO: ',detalleIndividualDelProucto);
  const llaverDelDetalle = Object.keys(detalleIndividualDelProucto);
  if (llaverDelDetalle.length === 0) {
    return new Error;
  }

  const paraCheckout = () => {
    const { id, name, stock, price } = detalleIndividualDelProucto;

    const existingProductIndex = context.cartProducts.findIndex(
      (product: any) => product.id === id
    );

    if (existingProductIndex !== -1) {
      const updatedCartProducts = [...context.cartProducts];
      const existingProduct = updatedCartProducts[existingProductIndex];
      existingProduct.quantity += 1; // Aumentar la cantidad en 1
      existingProduct.stock -= 1; // Restar 1 al stock
      // actualizo el estado del carrito
      context.setCartProducts(updatedCartProducts);
    } else {
      context.setCartProducts([
        ...context.cartProducts,
        {
          id,
          name,
          price,
          stock: stock - 1,
          quantity: 1,
        },
      ]);
    }
    context.openMenuCheckoutProducts();
  };

  return (
    <div>
      <Header />
      <Navbar />
      <BurgerMenu />
      


      <h2>Categoria Dinámica: {category}</h2>
      <div className="flex  flex-row flex-nowrap content-center justify-center items-center m-6  ">
        <div className="relative  w-80 flex-row flex-nowrap content-center justify-center items-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative  mx-4 -mt-6 h-40 flex flex-row items-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg bg-gradient-to-r from-customColorPrimary via-customColorPrimary to-gray-300">
            <Image 
              width={600}
              height={600}
              className="object-cover w-40 h-40  mr-3 rounded-full p-2"
              src={imagenDeEjemplo}
              alt="Imagen de ejemplo"
            />
            <div>
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {detalleIndividualDelProucto?.name}
              </h5>
              <h6 className="block text-xs font-sans m-2">
                En Stock: {detalleIndividualDelProucto.stock}
              </h6>
            </div>
          </div>
          <div className="p-6">
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {detalleIndividualDelProucto?.description}
            </p>
          </div>
          <div className="p-6 pt-0 flex flex-row flex-nowrap items-center justify-around content-center">
            {/* <Link href={"/checkout"}> */}
            <button
              onClick={paraCheckout}
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-customColorTertiary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-400 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Agregar
            </button>
            {/* </Link> */}
            <Link href={"/store"}>
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-customColorTertiary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-400 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Volver
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

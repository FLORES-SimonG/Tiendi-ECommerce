"use client";
import { ShoppingCartContext } from "@/Context";
import BurgerMenu from "@/components/BurgerMenu";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { BiCartDownload } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

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
  console.log(detalleIndividualDelProucto);

  return (
    <div>
      <Header />
      <Navbar />
      <BurgerMenu />
      <h2>Categoria Dinámica: {category}</h2>
      <div className="bg-red-500 flex flex-row flex-nowrap content-center justify-center items-center">
      <div className="bg-customColorSecondary border border-customColorPrimary rounded-lg shadow-lg overflow-hidden">
          <div className="w-60 h-96  rounded-xl overflow-hidden">
            <img
              src={imagenDeEjemplo}
              alt={detalleIndividualDelProucto.name}
              className="w-full h-full object-cover cursor-pointer"
              // onClick={() => showProductDetail(detalleIndividualDelProucto)}
            />
          </div>
          <div className="py-2 text-center z-10 bg-transparent">
            <h4 className="text-lg font-bold">
              {detalleIndividualDelProucto.name}
            </h4>
            <h5 className="text-sm font-semibold">
              ${detalleIndividualDelProucto.price}
            </h5>
            <h5 className="text-sm font-semibold">
              Stock: {detalleIndividualDelProucto.stock}
            </h5>
            <h5 className="text-sm font-semibold">
              Detalles: ${detalleIndividualDelProucto.description}
            </h5>
          </div>

          <div className="flex justify-center space-x-3">
            {/* //!ICONO DE CARRITO */}
            <span
              //   onClick={() => masDetalles(detalleIndividualDelProucto)}
              className=" cursor-pointer p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out"
            >
              {/* <Link href={`store/${nombreProductoSinEspacios}`}> */}
              <BiCartDownload />
              {/* </Link> */}
            </span>

            <span
              onClick={() =>console.log( "showProductDetail(detalleIndividualDelProucto")}
              className=" cursor-pointer p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out"
            >
              <TbListDetails />
            </span>

            <span className=" cursor-pointer p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out">
              <MdFavoriteBorder />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

"use client";

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";
// import { imagenDeEjemplo } from "../../../public/variablesGlobales";
import Link from "next/link";
// import { FaPlus } from "react-icons/fa";
import { Product, ProductCardProps } from "../../Context/interface";
import { toast } from "react-hot-toast";

const Product_card: React.FC<ProductCardProps> = ({
  producto,
}: ProductCardProps) => {
  const context = useContext(ShoppingCartContext);

  if (!producto || !producto.data) {
    return (
      <div>
        Estamos en mantenimiento en nuestra web, después podrás ver nuestros
        Productos!
      </div>
    );
  }

  const objetoIndividual: Product = producto.data;
  const nombreProductoSinEspacios: String = objetoIndividual.name.replace(
    /\s/g,
    "-"
  );

  const masDetalles = (productoDataIndividual: Product) => {
    const promesaGuardarDatos = new Promise((resolve, reject) => {
      try {
        context.setProductData(productoDataIndividual);
        setTimeout(() => {
          resolve(true);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promesaGuardarDatos, {
      loading: "Paciencia, estamos cargando el producto",
      success: <b>Producto seleccionado con éxito!</b>,
      error: <b>No se pudo seleccionar el producto.</b>,
    });

    
  };

  return (
    <div className="border-2 border-customColorPrimary w-44 md:w-48 lg:w-52 h-72 m-2 rounded-lg flex flex-col justify-center items-center overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg hover:bg-customColorPrimary">
      <div className="w-36 h-36 rounded-full overflow-hidden">
        <img
          src={objetoIndividual.image}
          alt={objetoIndividual.name}
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>
      <div className="py-2 text-center w-40">
        <p className="text-base font-bold">{objetoIndividual.name}</p>
        <p className="mt-1 text-md font-semibold">${objetoIndividual.price}</p>
      </div>
      <div className="flex justify-center space-x-3">
        <span className="cursor-pointer p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out">
          <Link
            onClick={() => masDetalles(objetoIndividual)}
            href={`store/${nombreProductoSinEspacios}`}
          >
            {/* <FaPlus /> */}
            FaPlus
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Product_card;

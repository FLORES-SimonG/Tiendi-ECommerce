'use client';
import { BiCartDownload } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";
import { imagenDeEjemplo } from "../../../public/variablesGlobales";
// import ProductoSeleccionado from "../ProductoSeleccionado/ProductoSeleccionado";
import Link from "next/link";


function Product_card(producto: any): any {
  const context = useContext(ShoppingCartContext);
  // console.log('este es producto: ',producto); //! PRODUCTO me trae el un OBJETO de OBJETO.... OBJETO.DATA ES MI PUNTO DE INTERES
  const objetoIndividual = producto.data;
  const nombreProductoSinEspacios = objetoIndividual.name.replace(/\s/g, '-');
  
  // const showProductDetail = (infoProduct: any) => {
  //   context.openProductDetail();
  //   context.setProductToShow(infoProduct);
  // };

  const masDetalles = (productoDataIndividual: any) => {
    console.log('este es productoDataIndividual: ',productoDataIndividual);
    console.log('este es el producto guardado en el context: ',context.productData);
    context.setProductData(()=>productoDataIndividual);
    // context.setCount(context.count + 1);
    // context.setCartProducts([...context.cartProducts, productoData]);

// console.log('este el mismo pero CON ID: ',productoDataIndividual.id);


// context.openMenuCheckoutProducts();
// productoDataIndividual?.filter((item:any)=>{return <ProductoSeleccionado key={item.id} data={item}/>})
  };

  

  return (
    <div className="border-2 border-customColorPrimary w-42 md:w-48 lg:w-52 h-72 m-2 rounded-lg flex flex-col justify-center items-center overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg hover:bg-customColorPrimary">
      <div className="w-36 h-36  rounded-full overflow-hidden">
        <img
          src={imagenDeEjemplo}
          alt={objetoIndividual.name}
          className="w-full h-full object-cover cursor-pointer"
          // onClick={() => showProductDetail(objetoIndividual)}
        />
      </div>
      <div className="py-2 text-center w-40">
        <h4 className="text-lg font-bold">{objetoIndividual.name}</h4>
        <h5 className="text-sm font-semibold">${objetoIndividual.price}</h5>
      </div>

      <div className="flex justify-center space-x-3">
        
        {/* //!ICONO DE CARRITO */}
        <span
          onClick={() => masDetalles(objetoIndividual)}
          className=" cursor-pointer p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out"
        >
          <Link href={`store/${nombreProductoSinEspacios}`}>
          <BiCartDownload />
          </Link>
        </span>
        
        
        {/* <span
          onClick={() => showProductDetail(objetoIndividual)}
          className=" cursor-pointer p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out"
        >
          <TbListDetails />
        </span> */}
        
        
        {/* <span className=" cursor-pointer p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out">
          <MdFavoriteBorder />
        </span> */}
      </div>
    </div>
  );
}

export default Product_card;
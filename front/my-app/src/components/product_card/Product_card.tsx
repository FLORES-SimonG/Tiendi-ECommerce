'use client';
import { BiCartDownload } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";
import { imagenDeEjemplo } from "../../../public/variablesGlobales";

function Product_card(producto: any): any {
  const context = useContext(ShoppingCartContext);
  
  const showProductDetail = (infoProduct: any) => {
    context.openProductDetail();
    context.setProductToShow(infoProduct);
  };

  const addProductToCart = (productoData: any) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productoData]);
    context.openMenuCheckoutProducts();
  };

  return (
    <div className="border-2 border-customColorPrimary w-52 h-72 m-2 rounded-lg flex flex-col justify-center items-center overflow-hidden cursor-pointer transition duration-200 ease-in-out transform hover:shadow-lg hover:bg-customColorPrimary">
      <div className="w-36 h-36 rounded-full overflow-hidden">
        <img
          src={imagenDeEjemplo}
          alt={producto.data.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 text-center">
        <h4 className="text-lg font-bold w-50">{producto.data.name}</h4>
        <h5 className="text-sm font-semibold">${producto.data.price}</h5>
      </div>

      <div className="flex justify-center space-x-3">
        <span
          onClick={() => addProductToCart(producto.data)}
          className="p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out"
        >
          <BiCartDownload />
        </span>
        <span
          onClick={() => showProductDetail(producto.data)}
          className="p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out"
        >
          <TbListDetails />
        </span>
        <span className="p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out">
          <MdFavoriteBorder />
        </span>
      </div>
    </div>
  );
}

export default Product_card;
import { BiCartDownload } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";

function Product_card(producto: any): any {
  return (
    <div className="border-2 border-customColorPrimary w-52 h-72 m-2 rounded-lg flex flex-col justify-center items-center overflow-hidden cursor-pointer transition duration-200 ease-in-out transform hover:shadow-lg hover:bg-customColorPrimary">
      <img
        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMkJMLIOX_xX6RMnnf5Wh_ctvqPSvvEW1dpU8vfyLUpditTJq9eMKzGPn3vObZwrbvkiX1UIOYnk6Vte_ydbGBcrrqAPX0BhXY6uTlc8Bl3ZrN3W-KeG8NMg"
        alt={producto.data.name}
        className="w-36 h-36 rounded-full object-cover"
      />
      <div className="p-2 text-center">
        <h4 className="text-lg font-bold w-50">{producto.data.name}</h4>
        <h5 className="text-sm font-semibold">${producto.data.price}</h5>
      </div>
      <div className="flex justify-center space-x-3">
        <span className="p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out">
          <BiCartDownload />
        </span>
        <span className="p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out">
          <FaRegShareSquare />
        </span>
        <span className="p-2 bg-white rounded-full text-gray-700 hover:bg-customColorQuaternary hover:text-white transition duration-200 ease-in-out">
          <MdFavoriteBorder />
        </span>
      </div>
    </div>
  );
}

export default Product_card;

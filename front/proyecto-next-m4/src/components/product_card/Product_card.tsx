
import { BiCartDownload } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";


function Product_card() {
  return (
    <div className=" border-2 border-customColorPrimary w-52 m-2 rounded flex justify-center flex-col items-center overflow-hidden cursor-pointer hover:shadow-lg transition 200 ">
        <img className="max-w-20 m-2" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMkJMLIOX_xX6RMnnf5Wh_ctvqPSvvEW1dpU8vfyLUpditTJq9eMKzGPn3vObZwrbvkiX1UIOYnk6Vte_ydbGBcrrqAPX0BhXY6uTlc8Bl3ZrN3W-KeG8NMg" alt="Celular"/>
        <div className="px-6 py-2">
            <div className="">
              <h4 className="font-bold text-sm">
                Xiaomi Example
              </h4>
              <h5 className=" font-bold text-xs">
                $19.99
              </h5>
            </div>
            <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"><BiCartDownload /></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"><FaRegShareFromSquare /></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"><MdFavoriteBorder /></span>
        </div>
    </div>
  );
}

export default Product_card;


function Product_card() {
  return (
    <div className="max-w-sm rounded flex justify-center flex-col items-center overflow-hidden cursor-pointer hover:shadow-lg transition 200 ">
        <img className="max-w-40" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMkJMLIOX_xX6RMnnf5Wh_ctvqPSvvEW1dpU8vfyLUpditTJq9eMKzGPn3vObZwrbvkiX1UIOYnk6Vte_ydbGBcrrqAPX0BhXY6uTlc8Bl3ZrN3W-KeG8NMg" alt="Celular"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
    </div>
  );
}

export default Product_card;
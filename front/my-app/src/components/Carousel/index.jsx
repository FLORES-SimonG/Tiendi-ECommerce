import Image from "next/image";

export function CarouselTransition() {
  return (
    <div className="flex w-7/8 h-72 bg-transparent m-2 rounded-full bg-customColorPrimary cursor-pointer">
      {/* Imagen 1 */}
      <div className="relative group">
        <Image
          width={600}
          height={600}
          src="https://images.pexels.com/photos/56904/pexels-photo-56904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Iphone"
          title="Iphone"
          className="rounded-s-full w-64 h-72 object-cover opacity-80 duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125 transition-all"
        />
        <div className="absolute rounded-s-full inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          iPhone
        </div>
      </div>

      {/* Imagen 2 */}
      <div className="relative group">
        <Image
          width={600}
          height={600}
          src="https://images.pexels.com/photos/129205/pexels-photo-129205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="MacBook"
          title="MacBook"
          className="rounded-sm w-64 h-72 object-cover opacity-80 transition-opacity duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          MacBook
        </div>
      </div>

      {/* Imagen 3 */}
      <div className="relative group">
        <Image
          width={600}
          height={600}
          src="https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Ipad"
          title="Ipad"
          className="rounded-sm w-64 h-72 object-cover opacity-80 transition-opacity duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          iPad
        </div>
      </div>

      {/* Imagen 4 */}
      <div className="relative group">
        <Image
          width={600}
          height={600}
          src="https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Apple Watch"
          title="Apple Watch"
          className="rounded-sm w-64 h-72 object-cover opacity-80 duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125 transition-all"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          Apple Watch
        </div>
      </div>

      {/* Imagen 5 */}
      <div className="relative group">
        <Image
          width={600}
          height={600}
          src="https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="AirPods"
          title="AirPods"
          className="rounded-sm w-64 h-72 object-cover opacity-80 transition-opacity duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          AirPods
        </div>
      </div>

      {/* Imagen 6 */}
      <div className="relative group">
        <Image
          width={600}
          height={600}
          src="https://media.istockphoto.com/id/1909175570/de/foto/nahaufnahme-eines-blauen-apple-homepod-mini-auf-einer-wei%C3%9Fen-fensterbank.jpg?s=612x612&w=0&k=20&c=VVga7HUKlHguM9EXqEU6HNzU2ALjh52tKsaUCM9BhTA="
          alt="image 3"
          title="HomePod Mini"
          className="rounded-sm w-64 h-72 object-cover opacity-80 transition-opacity duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125 rounded-e-full"
        />
        <div className="rounded-e-full absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          HomePod Mini
        </div>
      </div>
    </div>
  );
}

export default CarouselTransition;



// import Image from "next/image";

// export function CarouselTransition() {
//   return (
//     <div className=" flex w-7/8 h-72 bg-transparent m-2 rounded-full bg-customColorPrimary ">
//       <Image
//         width={600}
//         height={600}
//         src="https://images.pexels.com/photos/56904/pexels-photo-56904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         alt="Iphone"
//         className=" rounded-s-full  w-0 flex-grow object-cover opacity-80  duration-100 cursor-pointer hover:opacity-100 hover:w-96 hover:filter hover:contrast-125 transition-all"
//       />
//       <Image
//         width={600}
//         height={600}
//         src="https://images.pexels.com/photos/129205/pexels-photo-129205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         alt="MacBook"
//         className="  rounded-sm w-0 flex-grow object-cover opacity-80 transition-opacity duration-100 cursor-pointer hover:opacity-100 hover:w-96 hover:filter hover:contrast-125"
//       />
//       <Image
//         width={600}
//         height={600}
//         src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         alt="Ipad"
//         className="  rounded-sm w-0 flex-grow object-cover opacity-80 transition-opacity duration-100 cursor-pointer hover:opacity-100 hover:w-96 hover:filter hover:contrast-125"
//       />
//       <Image
//         width={600}
//         height={600}
//         src="https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         alt="Apple Watch"
//         className="  rounded-sm w-0 flex-grow object-cover opacity-80  duration-100 cursor-pointer hover:opacity-100 hover:w-96 hover:filter hover:contrast-125 transition-all"
//       />
//       <Image
//         width={600}
//         height={600}
//         src="https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         alt="AirPods"
//         className="  rounded-sm w-0 flex-grow object-cover opacity-80 transition-opacity duration-100 cursor-pointer hover:opacity-100 hover:w-96 hover:filter hover:contrast-125"
//       />
//       <Image
//         width={600}
//         height={600}
//         src="https://media.istockphoto.com/id/1909175570/de/foto/nahaufnahme-eines-blauen-apple-homepod-mini-auf-einer-wei%C3%9Fen-fensterbank.jpg?s=612x612&w=0&k=20&c=VVga7HUKlHguM9EXqEU6HNzU2ALjh52tKsaUCM9BhTA="
//         alt="image 3"
//         className="  rounded-sm w-0 flex-grow object-cover opacity-80 transition-opacity duration-100 cursor-pointer hover:opacity-100 hover:w-96 hover:filter hover:contrast-125 rounded-e-full"
//       />
//     </div>
//   );
// }

// export default CarouselTransition;

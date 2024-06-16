import Image from "next/image";
// import { IoIosSearch } from "react-icons/io";

export function CarouselTransition() {
  return (
    <div className=" hidden md:flex lg:flex w-7/8 h-48  mx-10 mb-10 border border-white rounded-full  cursor-pointer shadow-lg shadow-customColorPrimary">
      <div className="relative group">
        <Image
          width={600}
          height={600}
          src="https://images.pexels.com/photos/56904/pexels-photo-56904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Iphone"
          title="Iphone"
          loading="lazy"
          className="rounded-s-full w-64 h-48 object-cover opacity-80 duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125 transition-all"
        />
        <div className="absolute rounded-s-full inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          <div>iPhone</div>
          {/* <IoIosSearch className=" text-xl" /> */}
          +Info
        </div>
      </div>

      <div className="relative group">
        <Image
          width={750}
          height={1260}
          src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="MacBook"
          title="MacBook"
          priority={true}
          className=" w-64 h-48 object-cover opacity-80 transition-opacity duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125"
        />
        <div className="absolute  inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          <div>MacBook</div>
           {/* <IoIosSearch className=" text-xl" /> */}
           +Info
        </div>
      </div>

      <div className="relative group">
        <Image
          width={600}
          loading="lazy"
          height={600}
          src="https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Ipad"
          title="Ipad"
          className="w-64 h-48 object-cover opacity-80 transition-opacity duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125"
        />
        <div className="absolute  inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          <div>iPad</div>
           {/* <IoIosSearch className=" text-xl" /> */}
           +Info
        </div>
      </div>

      <div className="relative group">
        <Image
          width={750}
          priority={true}
          height={1260}
          src="https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Apple Watch"
          title="Apple Watch"
          className=" w-64 h-48 object-cover opacity-80 duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125 transition-all"
        />
        <div className="absolute  inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          <div>Apple Watch</div>
           {/* <IoIosSearch className=" text-xl" /> */}
           +Info
        </div>
      </div>

      <div className="relative group">
        <Image
          width={1260}
          height={750}
          priority={true}
          src="https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="AirPods"
          title="AirPods"
          className=" w-64 h-48 object-cover opacity-80 transition-opacity duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125"
        />
        <div className="absolute  inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          <div>AirPods</div>
           {/* <IoIosSearch className=" text-xl" /> */}
           +Info
        </div>
      </div>

      <div className="relative group">
        <Image
          width={600}
          height={600}
          src="https://media.istockphoto.com/id/1909175570/de/foto/nahaufnahme-eines-blauen-apple-homepod-mini-auf-einer-wei%C3%9Fen-fensterbank.jpg?s=612x612&w=0&k=20&c=VVga7HUKlHguM9EXqEU6HNzU2ALjh52tKsaUCM9BhTA="
          alt="image 3"
          title="HomePod Mini"
          loading="lazy"
          className=" w-64 h-48 object-cover opacity-80 transition-opacity duration-100 cursor-pointer group-hover:opacity-100 group-hover:w-96 group-hover:filter group-hover:contrast-125 rounded-e-full"
        />
        <div className="absolute rounded-e-full inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white">
          <div>HomePod</div>
           {/* <IoIosSearch className=" text-xl" /> */}
           +Info
        </div>
      </div>
    </div>
  );
}

export default CarouselTransition;

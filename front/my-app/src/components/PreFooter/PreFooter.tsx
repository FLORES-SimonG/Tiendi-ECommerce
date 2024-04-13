'use client';

import Image from "next/image";


function PreFooter() {

return (
    <div className="flex py-2 flex-row items-center justify-center bg-gradient-to-b from-transparent  via-customColorPrimary via-10% to-transparent to-100% h-60  w-full">
        <div className="flex flex-row flex-wrap justify-evenly items-center w-60  content-center">
          <Image
          className='transition bg-slate-200 w-12 h-12 m-4 p-1 rounded-3xl  cursor-pointer hover:scale-110  '
            width={60}
            height={60}
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/facebook-messenger.png"
            alt="facebook-messenger"
          />
          <Image
          className='transition bg-slate-200 w-12 h-12 m-4 p-1 rounded-3xl  cursor-pointer hover:scale-110  '
            width={60}
            height={60}
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/whatsapp.png"
            alt="whatsapp"
          />
        </div>
        <div className="flex m-0 flex-col flex-nowrap content-center text-center items-center w-96 justify-center">
          <h2 className="text-xl font-bold m-2">¡Descarga nuestra aplicación!</h2>
          <p className=" mx-6 hidden md:block lg:block ">
            Explora la App y descubre todas las ofertas y promociones que tenemos para vos.
          </p>
            <p className="hidden md:block lg:block">¡No te lo pierdas!</p>
            <p className="font-bold">¡Cupones exlusivos
            semanales!</p>
            
          
        </div>
        <div className="flex flex-row flex-wrap justify-evenly items-center w-60  content-center">
        <Image
        className='transition bg-slate-200 w-12 h-12 m-4 p-1 rounded-3xl  cursor-pointer hover:scale-110  '
            width={60}
            height={60}
            src="https://img.icons8.com/nolan/64/apple-app-store--v2.png"
            alt="apple-app-store--v2"
          />
          <Image
          className='transition bg-slate-200 w-12 h-12 m-4 p-1 rounded-3xl  cursor-pointer hover:scale-110  '
            width={60}
            height={60}
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/google-play.png"
            alt="google-play"
          />
        </div>
      </div>
)

}





export default PreFooter;


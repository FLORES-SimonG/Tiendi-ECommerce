"use client";
import Image from "next/image";

// import { LuPin } from "react-icons/lu";

function HomeConteiner() {
  return (
    // esto es una ecommerce que se llama Tiendi
    <div className="bg-transparent">
      <h2 className="p-3 font-sans bg-transparent text-center  text-xl ">
        ¡Bienvenido/a a nuestra Home! Dirígete a Productos para descubrir lo que
        tenemos para ti.
      </h2>
      <div className=" text-base font-light leading-relaxed my-6 gap-6 flex flex-row flex-wrap content-center justify-center items-center">
        <div className="transparent flex flex-col my-0  ">
          <ul className=" transition w-96 h-40 p-3 m-0 bg-slate-100 rounded-3xl cursor-pointer flex flex-row flex-nowrap content-center justify-center items-center hover:scale-105">
            <li className="  p-3 m-2 inline-flex items-center rounded-2xl mt-1   text-white bg-black bg-opacity-70 ">
              {/* <li className="p-3 m-2 inline-flex items-center rounded-2xl mt-1   text-white bg-black bg-opacity-70"> */}
              {/* <LuPin /> */}
              <p>
                LuPin
              </p>
            </li>

            <li className="p-1 list-none text-xs">
              Nos preocupamos por el medio ambiente, trae tu telefono viejo y te
              damos un descuento en tu compra.
            </li>
            <Image
              src="https://images.pexels.com/photos/3850587/pexels-photo-3850587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="celu"
              height={300}
              width={300}
              className="w-36 h-36 object-cover rounded-full transition-all"
            />
          </ul>
        </div>

        <div>
          <ul className=" transition w-96 h-40 p-3 m-0 bg-slate-100 rounded-3xl cursor-pointer flex flex-row flex-nowrap content-center justify-center items-center hover:scale-105">
            <li className="p-3 m-2 inline-flex items-center rounded-2xl mt-1   text-white bg-black bg-opacity-70">
              {/* <LuPin /> */}
              <p>
                LuPin
              </p>
            </li>

            <li className="p-1 list-none text-xs">
              Compras en cuotas sin interes con tarjeta de Crédito MasterCard,
              Visa y American Express.
            </li>
            <Image
              src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="TarjetaDeCrédito"
              height={300}
              width={300}
              className="w-36 h-36 object-cover rounded-full transition-all"
            />
          </ul>
        </div>

        <div>
          <ul className=" transition w-96 h-40 p-3 m-0 bg-slate-100 rounded-3xl cursor-pointer flex flex-row flex-nowrap content-center justify-center items-center hover:scale-105">
            <li className="p-3 m-2 inline-flex items-center rounded-2xl mt-1   text-white bg-black bg-opacity-70">
              {/* <LuPin /> */}
              <p>
                LuPin
              </p>
            </li>

            <li className="p-1 list-none text-xs">
              Aceptamos pagos con Bitcoin, Ethereum y Litecoin.
            </li>
            <Image
              src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="cripto"
              height={300}
              width={300}
              className=" w-36 h-36 object-cover rounded-full transition-all"
            />
          </ul>
        </div>

        <div>
          <ul className=" transition w-96 h-40 p-3 m-0 bg-slate-100 rounded-3xl cursor-pointer flex flex-row flex-nowrap content-center justify-center items-center hover:scale-105">
            <li className="p-3 m-2 inline-flex items-center rounded-2xl mt-1   text-white bg-black bg-opacity-70">
              {/* <LuPin /> */}
              <p>
                LuPin
              </p>
            </li>

            <li className="p-1 list-none text-xs">
              Vendemos tecnologías usadas en optimas condiciones con garantía de
              6 meses posteriores a la compra.
            </li>
            <Image
              src="https://images.pexels.com/photos/2582931/pexels-photo-2582931.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="reparacion"
              height={300}
              width={300}
              className="w-36 h-36 object-cover rounded-full transition-all"
            />
          </ul>
        </div>

        <div>
          <ul className=" transition w-96 h-40 p-3 m-0 bg-slate-100 rounded-3xl cursor-pointer flex flex-row flex-nowrap content-center justify-center items-center hover:scale-105">
            <li className="p-3 m-2 inline-flex items-center rounded-2xl mt-1   text-white bg-black bg-opacity-70">
              {/* <LuPin /> */}
              <p>
                LuPin
              </p>
            </li>

            <li className="p-1 list-none text-xs">
              Contamos con la atención personalizada de nuestros vendedores,
              para que puedas elegir el producto que mejor se adapte a tus
              necesidades.
            </li>
            <Image
              src="https://images.pexels.com/photos/8867262/pexels-photo-8867262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="service"
              height={300}
              width={300}
              className=" w-36 h-36 object-cover rounded-full transition-all"
            />
          </ul>
        </div>

        <div>
          <ul className=" transition w-96 h-40 p-3 m-0 bg-slate-100 rounded-3xl cursor-pointer flex flex-row flex-nowrap content-center justify-center items-center hover:scale-105">
            <li className="p-3 m-2 inline-flex items-center rounded-2xl mt-1   text-white bg-black bg-opacity-70">
              {/* <LuPin /> */}
              <p>
                LuPin
              </p>
            </li>

            <li className="p-1 list-none text-xs">
              Envío gratis a todo el país en compras mayores a $5000.
            </li>
            <Image
              src="https://media.istockphoto.com/id/1218449770/es/foto/obtenci%C3%B3n-de-paquete-s-desde-el-concepto-de-oficina-de-correos-perfil-lateral-foto-de-cerca-de.jpg?b=1&s=612x612&w=0&k=20&c=t5Pb9iyTjPUWssEoYZCatrN1HxEQpy8dxDp-tlJ-yaQ="
              alt="celu"
              height={300}
              width={300}
              className="w-36 h-36 object-cover rounded-full transition-all"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeConteiner;

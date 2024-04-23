import React, { useEffect, useState } from "react";
import { getUsersOrders } from "../../Context/BaseDeDatos";
import Image from "next/image";
import Link from "next/link";

function OrdersComponent() {
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDataOrders = async () => {
      const responseOrders = await getUsersOrders(token);
      setOrders(responseOrders);
    };
    fetchDataOrders();
  }, []);

  return (
    <div className=" font-sans">
      <h2 className="mb-4 text-white text-ssxl font-bold px-6 py-3 bg-gradient-to-r from-customColorPrimary via-customColorPrimary via-10% to-transparent">
        TUS COMPROBANTES DE COMPRA
      </h2>
      {orders.length === 0 ? (
        <div className="flex flex-col justify-center items-center mb-10 w-full h-full">
          <Link href={"/store"}>
            <p className="relative top-14 text-white font-bold hover:scale-105 cursor-pointer transition-all ">
              NO HAY ORDENES DISPONIBLES PARA MOSTRAR
            </p>
          </Link>

          <Image
            src="https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="No hay ordenes"
            loading="lazy"
            width={1260}
            height={750}
            className="rounded-lg shadow-xl w-96 h-56 object-cover"
          />
        </div>
      ) : (
        <div className="flex flex-row row flex-wrap items-center justify-center leading-relaxed  gap-8 m-8  ">
          {orders.map((order) => (
            <div
              className=" rounded-t-2xl rounded-b-lg  hover:scale-105 transition-all cursor-pointer border-2 shadow-xl"
              key={order.id}
            >
              <div className="bg-gradient-to-b from-customColorPrimary from-20% to-customColorSecondary to-90% p-2 rounded-t-2xl">
                <p className=" font-semibold p-2 text-center text-white rounded-t-2xl text-lg">
                  Orden N°{order.id}
                </p>
                <p className="p-2 font-medium text-white">{order.date}</p>
              </div>

              <hr className="border-2" />
              <div className="bg-transparent p-1  rounded-b-xl">
                {order.products.map((product) => (
                  <div
                    className="flex flex-row justify-between mx-3 "
                    key={product.id}
                  >
                    <p>{product.name}</p>
                    <p className="font-medium">$ {product.price}</p>
                  </div>
                ))}
                <p className="m-3 p-1 rounded-lg hover:scale-105 transition-all bg-slate-200 text-center hover:shadow-xl hover:cursor-default">
                  {order.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrdersComponent;

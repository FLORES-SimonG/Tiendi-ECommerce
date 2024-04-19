import React, { useEffect, useState } from "react";
import { getOrders } from "../../Context/BaseDeDatos";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function OrdersComponent() {
  const [orders, setOrders] = useState([]);

  const context = useContext(ShoppingCartContext);
  const token = context.userData.token;

  useEffect(() => {
    const fetchDataOrders = async () => {
      const responseOrders = await getOrders(token);
      setOrders(responseOrders);
    };
    fetchDataOrders();
  }, []);



  // console.log("ESTE ES EL CONTEXTO=> ",context);
  // console.log("ESTAS SON LAS ORDENES PAPÁ=> ",orders);


  return (
    <div className=" font-sans">
       <h2 className="mb-4 text-white text-ssxl font-bold px-6 py-3 bg-gradient-to-r from-customColorPrimary via-customColorPrimary via-10% to-transparent">
        TUS COMPROBANTES DE COMPRA
      </h2>
      {orders.length===0 ? (
        <p>No hay ordenes</p>
      ) : (
        <div className="flex flex-row row flex-wrap items-center justify-center leading-relaxed  gap-8 m-8  ">
          {orders.map((order) => (
            <div className=" rounded-t-2xl rounded-b-lg  hover:scale-105 transition-all cursor-pointer border-2 shadow-xl" key={order.id}>
              <div className="bg-gradient-to-b from-customColorPrimary from-20% to-customColorSecondary to-90% p-2 rounded-t-2xl">
                <p className=" font-semibold p-2 text-center text-white rounded-t-2xl text-lg">Orden N°{order.id}</p>
              <p className="p-2 font-medium text-white">{order.date}</p>
                </div>
                
             <hr className="border-2" />
              <div className="bg-transparent p-1  rounded-b-xl">
                {order.products.map((product) => (
                  <div className="flex flex-row justify-between mx-3 " key={product.id}>
                    <p>{product.name}</p>
                    <p className="font-medium">$ {product.price}</p>
                  </div>
                ))}
                <p className="m-3 p-1 rounded-lg hover:scale-105 transition-all bg-slate-200 text-center hover:shadow-xl hover:cursor-default">{order.status}</p>

              </div>
              {/* <h1>{order.products}</h1> */}
            </div>
          ))}
        </div>
      )}
      

    </div>
  );
}

export default OrdersComponent;
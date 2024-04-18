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
  console.log("ESTAS SON LAS ORDENES PAPÁ=> ",orders);


  return (
    <div>
      {/* Tu contenido JSX para mostrar los pedidos */}
    </div>
  );
}

export default OrdersComponent;
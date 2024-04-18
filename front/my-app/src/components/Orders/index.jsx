const { useEffect } = require("react");
const { useState } = require("react");
const { fetchOrders } = require("../../Context/BaseDeDatos");

function OrdersComponent() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchDataOrders = async () => {
      const responseOrders = await fetchOrders();
      setOrders(responseOrders);
    };
    fetchDataOrders();
  }, []);


//   console.log(orders);


  return(
    <div>
        <h1> ESTAS EN MIS ORDENES</h1>
        {/* <div>
            {orders.map(map((orderIndividual)=>(
                <OrderCard key={orderIndividual.id} order={orderIndividual}/>
            )))}
        </div> */}
    </div>
  )
}


export default OrdersComponent;

import Product_card from "../product_card/Product_card";
import axios from "axios";

export async function Products_cards() {

  const APIdesdeBack = "http://localhost:5000/products";
  
  const nuevaFuncion = async () => {
    return axios
    .get(APIdesdeBack)
    .then((response) => {
      return (response.data);
    })
    .catch((error) => {
      console.error("Hubo un error al obtener los datos:", error);
    });
    
  }
  const items = await nuevaFuncion();
   

  return (
    <>
    <h2>PRODUCTS CARDS</h2>
    <div className="bg-transparent flex items-center justify-center content-center justify-items-center flex-row flex-wrap">
      {/* <h1>ProductsCards</h1> */}
      {items?.map((item: { id: number }) => {
        // console.log(item);

        return <Product_card key={item.id} data={item} />;
      })}
    </div>
    </>
  );
}

export default Products_cards;

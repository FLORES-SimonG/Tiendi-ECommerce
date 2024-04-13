import Product_card from "../product_card/Product_card";
import axios from "axios";

export async function Products_cards() {
  const APIdesdeBack = "http://localhost:5000/products";

  const nuevaFuncion = async () => {
    return axios
      .get(APIdesdeBack)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los datos:", error);
      });
  };
  const items = await nuevaFuncion();

  return (
    <>
      <h2 className=" mb-4 text-white text-ssxl font-bold px-6 py-3
        bg-gradient-to-r from-customColorPrimary via-customColorPrimary via-10% to-transparent">NUESTROS PRODUCTOS</h2>
      <div className="bg-transparent grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch justify-center content-center justify-items-center mb-8 ">
        {items?.map((item: { id: number }) => {
          return <Product_card key={item.id} data={item} />;
        })}
      </div>
    </>
  );
}

export default Products_cards;

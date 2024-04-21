import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/index";
import { getProducts } from "../../Context/BaseDeDatos";
import { Product } from "../../Context/interface";


const ProductsCards: React.FC = () => {
  
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts(); 
      setItems(products); 
    };

    fetchData(); 
  }, []);

  return (
    <>
      <h2 className="mb-4 text-white text-ssxl font-bold px-6 py-3 bg-gradient-to-r from-customColorPrimary via-customColorPrimary via-10% to-transparent">
        NUESTROS PRODUCTOS
      </h2>
      <div className="bg-transparent grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch justify-center content-center justify-items-center mb-8">
        {items.map((item) => (
          
          <ProductCard key={item.id} producto={{ data: item }} />
        ))}
      </div>
    </>
  );
};

export default ProductsCards;









  // const APIdesdeBack = "http://localhost:5000/products";

  // const nuevaFuncion = async () => {
  //   return axios
  //     .get(APIdesdeBack)
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.error("Hubo un error al obtener los datos:", error);
  //     });
  // };
  // const items = await nuevaFuncion();
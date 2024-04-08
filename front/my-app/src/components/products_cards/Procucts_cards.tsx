"use client";
import { Fondo } from "./styles";
import { useEffect, useState } from "react";
import Product_card from "../product_card/Product_card";
import axios from "axios";

export function Products_cards() {
  const APIdesdeBack = "http://localhost:5000/products";
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(APIdesdeBack)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los datos:", error);
      });
  }, []);
  //response.data[0].name con esto accedi a nombre

  return (
    <>
    <h1>PRODUCTS CARDS</h1>
    <Fondo>
      {/* <h1>ProductsCards</h1> */}
      {items?.map((item: { id: number }) => {
        console.log(item);

        return <Product_card key={item.id} data={item} />;
      })}
    </Fondo>
    </>
  );
}

export default Products_cards;

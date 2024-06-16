import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";
import { Product } from "@/Context/interface";

export const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  const productosEnElCarrito: Product[] = context.cartProducts;
  console.log("esto es productosEnElCarrito:", productosEnElCarrito);

  const total = productosEnElCarrito.reduce(
    (acc, producto) => acc + (producto.quantity || 0),
    0
  );

  return (
    <div>
      <span>{total == 0 ? "😄" : total}</span>
    </div>
  );
};

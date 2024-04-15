import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";

//* Este es el contador de productos en el carrito

export const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  const productosEnElCarrito = context.cartProducts;
  let total = 0;

  productosEnElCarrito.forEach((producto: any) => {
    total += producto.quantity;
  });
  // console.log("contexto desde carrito", context);

  return (
    <div>
      <span>{total==0?"😄":total}</span>
    </div>
  );
};

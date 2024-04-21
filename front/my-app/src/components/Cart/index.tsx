import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";


export const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  const productosEnElCarrito = context.cartProducts;
  let total = 0;

  productosEnElCarrito.forEach((producto: any) => {
    total += producto.quantity;
  });
 
  return (
    <div>
      <span>{total==0?"😄":total}</span>
    </div>
  );
};

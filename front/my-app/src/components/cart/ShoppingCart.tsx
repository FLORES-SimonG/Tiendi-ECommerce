import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";

//! Este es el contador de productos en el carrito

export const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <div>
      <span>{context.count}</span>
    </div>
  );
};

import type { ReactNode } from "react";
import type { CartItem } from "../../types/product";

interface Props {
  item: CartItem;
  // Acciones opcionales a la derecha (stepper, borrar...). En el checkout no hay.
  children?: ReactNode;
}

export const CartLineItem = ({ item, children }: Props) => {
  const { product, quantity, totalPrice } = item;

  return (
    <li className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
      <img
        src={product.images[0].thumbnail}
        alt=""
        className="w-14 h-14 rounded-lg object-cover"
      />

      <div className="flex-1 text-dark-grayish-blue">
        <p className="text-very-dark-blue">{product.name}</p>
        <p>
          ${product.price.toFixed(2)} x {quantity}{" "}
          <span className="font-bold text-very-dark-blue">
            ${totalPrice.toFixed(2)}
          </span>
        </p>
      </div>

      {children}
    </li>
  );
};

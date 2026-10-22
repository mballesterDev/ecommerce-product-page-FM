import { useState } from "react";
import { Link } from "react-router";
import { CartIcon } from "../icons/CartIcon";
import { QuantityStepper } from "../ui/QuantityStepper";
import type { CartItem, Product } from "../../types/product";
import { useProductStore } from "../../store/useProductStore";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const onAdd = useProductStore((state) => state.onAdd);
  const [quantity, setQuantity] = useState(0);

  const convertToItem = (product: Product, quantity: number): CartItem => {
    return {
      product: product,
      quantity: quantity,
      totalPrice: product.price * quantity,
    };
  };

  const handleAdd = () => {
    if (quantity === 0) return;
    onAdd(convertToItem(product, quantity));
    setQuantity(0);
  };

  return (
    <div className="flex gap-4">
      <QuantityStepper
        value={quantity}
        onDecrement={() => setQuantity((q) => Math.max(0, q - 1))}
        onIncrement={() => setQuantity((q) => q + 1)}
      />

      <Link to="/cart">
        <button
          onClick={handleAdd}
          disabled={quantity === 0}
          className={`flex-1 p-4 h-14 flex items-center justify-center gap-4 bg-orange rounded-lg font-bold text-very-dark-blue shadow-[0_20px_50px_-20px_var(--color-orange)] transition-opacity
          ${
            quantity === 0
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:opacity-75"
          }`}
        >
          <CartIcon className="w-4 brightness-0" />
          <span>Add to cart</span>
        </button>
      </Link>
    </div>
  );
};

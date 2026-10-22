import { useProductStore } from "../../store/useProductStore";

export const CartTotal = () => {
  const total = useProductStore((state) => state.totalPrice());

  return (
    <div className="flex items-center justify-between pt-4 border-t border-grayish-blue/40">
      <span className="text-dark-grayish-blue">Total</span>

      <span className="text-2xl font-bold text-very-dark-blue">
        ${total.toFixed(2)}
      </span>
    </div>
  );
};

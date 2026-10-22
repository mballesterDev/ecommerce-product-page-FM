import { icons } from "../../data/product";

interface Props {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  label?: string;
  className?: string;
}

// Selector "- 0 +" reutilizable (página de producto y carrito)
export const QuantityStepper = ({
  value,
  onDecrement,
  onIncrement,
  label = "quantity",
  className = "w-40 h-14 px-4",
}: Props) => {
  return (
    <div
      className={`flex items-center justify-between bg-light-grayish-blue rounded-lg ${className}`}
    >
      <button
        onClick={onDecrement}
        aria-label={`Decrease ${label}`}
        className="h-full px-2 cursor-pointer hover:opacity-60"
      >
        <img src={icons.minus} alt="" />
      </button>
      <span className="font-bold text-very-dark-blue">{value}</span>
      <button
        onClick={onIncrement}
        aria-label={`Increase ${label}`}
        className="h-full px-2 cursor-pointer hover:opacity-60"
      >
        <img src={icons.plus} alt="" />
      </button>
    </div>
  );
};

import { useProductStore } from "../../store/useProductStore";
import { Panel } from "../ui/Panel";
import { CartLineItem } from "./CartLineItem";
import { CartTotal } from "./CartTotal";
import { EmptyCart } from "./EmptyCart";

// Resumen de solo lectura del pedido (columna izquierda del checkout)
export const OrderSummary = () => {
  const cart = useProductStore((state) => state.cart);

  return (
    <Panel
      id="summary-title"
      title="Order Summary"
      backTo="/cart"
      backLabel="Editar carro"
      className="md:max-w-sm h-fit"
    >
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col gap-6 p-6">
          <ul className="flex flex-col divide-y divide-grayish-blue/30">
            {cart.map((item) => (
              <CartLineItem key={item.product.id} item={item} />
            ))}
          </ul>

          <CartTotal />
        </div>
      )}
    </Panel>
  );
};

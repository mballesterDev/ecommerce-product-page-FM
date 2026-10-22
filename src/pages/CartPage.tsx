import { Link } from "react-router";
import { icons } from "../data/product";
import { useProductStore } from "../store/useProductStore";
import { CartLineItem } from "../components/cart/CartLineItem";
import { CartTotal } from "../components/cart/CartTotal";
import { EmptyCart } from "../components/cart/EmptyCart";
import { CenteredPage } from "../components/ui/CenteredPage";
import { Panel } from "../components/ui/Panel";

export const CartPage = () => {
  const cart = useProductStore((state) => state.cart);
  const onDeleteFromCart = useProductStore((state) => state.onDeleteFromCart);
  const onIcrementFromCart = useProductStore(
    (state) => state.onIcrementFromCart,
  );
  const onDecrementFromCart = useProductStore(
    (state) => state.onDecrementFromCart,
  );

  return (
    <CenteredPage>
      <Panel
        id="cart-title"
        title="Cart Summary"
        backTo="/"
        backLabel="Seguir comprando"
        className="max-w-md"
      >
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col gap-6 p-6">
            <ul className="flex flex-col divide-y divide-grayish-blue/30">
              {cart.map((item) => (
                <CartLineItem key={item.product.id} item={item}>
                  <button
                    className="text-3xl"
                    onClick={() => onDecrementFromCart(item)}
                  >   - 
                  </button>

                  <button
                    className="text-3xl"
                    onClick={() => onIcrementFromCart(item)}
                  > +
                  </button>

                  <button
                    onClick={() => onDeleteFromCart(item)}
                    aria-label={`Remove ${item.product.name} from cart`}
                    className="p-2 rounded-md cursor-pointer hover:bg-pale-orange transition-colors"
                  >
                    <img src={icons.delete} alt="" />
                  </button>
                </CartLineItem>
              ))}
            </ul>

            <CartTotal />

            <Link
              to="/checkout"
              className="h-14 flex items-center justify-center bg-orange rounded-lg font-bold text-very-dark-blue shadow-[0_20px_50px_-20px_hsl(26_100%_55%)] hover:opacity-75 transition-opacity"
            >
              Checkout
            </Link>
          </div>
        )}
      </Panel>
    </CenteredPage>
  );
};

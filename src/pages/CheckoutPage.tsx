import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CheckoutForm } from "../components/checkout/CheckoutForm";
import { OrderSummary } from "../components/cart/OrderSummary";
import { CenteredPage } from "../components/ui/CenteredPage";
import { useProductStore } from "../store/useProductStore";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const clearCart = useProductStore((state) => state.clearCart);
  const [isCompleted, setIsCompleted] = useState(false);

  // Cuando el pedido se completa: espera 3 s, vacía el carrito y vuelve a la home
  useEffect(() => {
    if (!isCompleted) return;

    const timeoutId = setTimeout(() => {
      clearCart();
      navigate("/");
    }, 3000);

    // Si el usuario sale antes de los 3 s, se cancela el timeout
    return () => clearTimeout(timeoutId);
  }, [isCompleted, clearCart, navigate]);

  if (isCompleted) {
    return (
      <CenteredPage>
        <section className="w-full max-w-md flex flex-col items-center gap-4 p-10 bg-white rounded-xl text-center shadow-[0_20px_50px_-20px_hsl(220_13%_13%/0.35)]">
          <span className="grid place-items-center size-16 rounded-full bg-pale-orange text-orange text-3xl font-bold">
            ✓
          </span>
          <h2 className="text-2xl font-bold text-very-dark-blue">¡Todo correcto!</h2>
          <p className="text-dark-grayish-blue">Redirigiendo a la página principal...</p>
        </section>
      </CenteredPage>
    );
  }

  return (
    <CenteredPage>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        <OrderSummary />

        <div className="flex-1">
          <CheckoutForm onSuccess={() => setIsCompleted(true)} />
        </div>
      </div>
    </CenteredPage>
  );
};

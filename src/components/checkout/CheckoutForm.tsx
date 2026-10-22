import { useState } from "react";
import type { CheckoutInfo } from "../../types/product";

// Formulario de checkout
const inputClass =
  "w-full h-12 px-4 rounded-lg border border-grayish-blue/60 text-very-dark-blue placeholder:text-grayish-blue focus:outline-none focus:border-orange";
const labelClass = "text-sm font-bold text-dark-grayish-blue";

interface Props {
  onSuccess: () => void;
}

export const CheckoutForm = ({ onSuccess }: Props) => {
  const [checkoutInfo, setCheckoutInfo] = useState<CheckoutInfo>({
    email: "",
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCheckoutInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Evita que el navegador recargue la página y avisa al CheckoutPage
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form
      aria-labelledby="checkout-title"
      onSubmit={handleSubmit}
      className="w-full bg-white rounded-xl shadow-[0_20px_50px_-20px_hsl(220_13%_13%/0.35)]"
    >
      <header className="px-6 py-5 border-b border-grayish-blue/40">
        <h2 id="checkout-title" className="text-lg font-bold text-very-dark-blue">
          Checkout
        </h2>
      </header>

      <div className="flex flex-col gap-8 p-6">
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-4 font-bold text-very-dark-blue">Contacto</legend>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className={labelClass}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClass}
              placeholder="tu@email.com"
              value={checkoutInfo.email}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-4">
          <legend className="mb-4 font-bold text-very-dark-blue">Envío</legend>

          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className={labelClass}>Nombre completo</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className={inputClass}
              value={checkoutInfo.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address" className={labelClass}>Dirección</label>
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="street-address"
              required
              className={inputClass}
              value={checkoutInfo.address}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="city" className={labelClass}>Ciudad</label>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                required
                className={inputClass}
                value={checkoutInfo.city}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="postalCode" className={labelClass}>Código postal</label>
              <input
                id="postalCode"
                name="postalCode"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                required
                className={inputClass}
                value={checkoutInfo.postalCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-4">
          <legend className="mb-4 font-bold text-very-dark-blue">Pago</legend>

          <div className="flex flex-col gap-2">
            <label htmlFor="cardNumber" className={labelClass}>Número de tarjeta</label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              inputMode="numeric"
              autoComplete="cc-number"
              required
              className={inputClass}
              placeholder="1234 5678 9012 3456"
              value={checkoutInfo.cardNumber}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="expiry" className={labelClass}>Caducidad</label>
              <input
                id="expiry"
                name="expiry"
                type="text"
                inputMode="numeric"
                autoComplete="cc-exp"
                required
                className={inputClass}
                placeholder="MM/AA"
                value={checkoutInfo.expiry}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="cvc" className={labelClass}>CVC</label>
              <input
                id="cvc"
                name="cvc"
                type="text"
                inputMode="numeric"
                autoComplete="cc-csc"
                required
                className={inputClass}
                placeholder="123"
                value={checkoutInfo.cvc}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="h-14 bg-orange rounded-lg font-bold text-very-dark-blue cursor-pointer shadow-[0_20px_50px_-20px_hsl(26_100%_55%)] hover:opacity-75 transition-opacity"
        >
          Confirmar pedido
        </button>
      </div>
    </form>
  );
};
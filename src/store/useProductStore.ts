import { create } from 'zustand';
import type { CartItem } from '../types/product';

type ProductState = {
  // Estado
  cart: CartItem[];

  // Acciones
  onAdd: (cartItem: CartItem) => void;
  onIcrementFromCart: (cartItem: CartItem) => void;
  onDecrementFromCart: (cartItem: CartItem) => void;
  onDeleteFromCart: (cartItem: CartItem) => void;
  clearCart: () => void;

  // Derivado (útil)
  totalItems: () => number;
  totalPrice: () => number;

  onCreateBill: () => void;
};

export const useProductStore = create<ProductState>((set, get) => ({
  cart: [],

  onAdd: (cartItem) =>
    set((state) => {
      const existe = state.cart.some(
        (p) => p.product.id === cartItem.product.id
      );

      return {
        cart: existe
          ? state.cart.map((p) =>
              p.product.id === cartItem.product.id
                ? {
                    ...p,
                    quantity: p.quantity + cartItem.quantity,
                    totalPrice:
                      p.totalPrice + cartItem.quantity * cartItem.product.price,
                  }
                : p
            )
          : [...state.cart, cartItem],
      };
    }),

  onIcrementFromCart: (cartItem) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        p.product.id === cartItem.product.id
          ? {
              ...p,
              quantity: p.quantity + 1,
              totalPrice: p.totalPrice + p.product.price,
            }
          : p
      ),
    })),

  onDecrementFromCart: (cartItem) =>
    set((state) => ({
      cart: state.cart
        .map((p) =>
          p.product.id === cartItem.product.id
            ? {
                ...p,
                quantity: p.quantity - 1,
                totalPrice: p.totalPrice - p.product.price,
              }
            : p
        )
        .filter((p) => p.quantity > 0),
    })),

  onDeleteFromCart: (cartItem) =>
    set((state) => ({
      cart: state.cart.filter(
        (p) => p.product.id !== cartItem.product.id
      ),
    })),

  onCreateBill: () => {},

  clearCart: () => set({ cart: [] }),

  totalItems: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),

  totalPrice: () => get().cart.reduce((acc,item) => acc + item.totalPrice, 0)
}));
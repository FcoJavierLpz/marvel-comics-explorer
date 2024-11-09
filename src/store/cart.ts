/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Comic } from "@/types/comic";

interface CartItem extends Comic {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (comic: Comic) => void;
  removeItem: (comicId: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (comic) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === comic.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === comic.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return { items: [...state.items, { ...comic, quantity: 1 }] };
        }),
      removeItem: (comicId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== comicId),
        })),
      clearCart: () => set({ items: [] }),
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },
      getTotalPrice: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + (item.prices[0]?.price || 0) * item.quantity,
          0,
        );
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);

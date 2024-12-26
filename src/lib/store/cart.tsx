/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CartStore, CartItem } from '@/lib/types/cart';

export const useCartStore = create<CartStore>()(
  persist(
    (set: (arg0: { (state: any): { items: any; }; (state: any): { items: any; }; (state: any): { items: any; }; items?: never[]; }) => any, get: () => any) => ({
      items: [],
      addItem: (item: { id: any; selectedColor: any; selectedSize: any; quantity: any; }) =>
        set((state: { items: any[]; }) => {
          const existingItem = state.items.find(
            (i: { id: any; selectedColor: any; selectedSize: any; }) => 
              i.id === item.id && 
              i.selectedColor === item.selectedColor && 
              i.selectedSize === item.selectedSize
          );

          if (existingItem) {
            return {
              items: state.items.map((i: { quantity: any; }) =>
                i === existingItem
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }

          return { items: [...state.items, item] };
        }),
      removeItem: (itemId: any) =>
        set((state: { items: any[]; }) => ({
          items: state.items.filter((i: { id: any; }) => i.id !== itemId),
        })),
      updateQuantity: (itemId: any, quantity: any) =>
        set((state: { items: any[]; }) => ({
          items: state.items.map((item: { id: any; }) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ items: [ ] }),
      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total: never, item: { quantity: any; }) => total + item.quantity, 0);
      },
      getTotalPrice: () => {
        const state = get();
        return state.items.reduce((total: number, item: { price: number; quantity: number; }) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { OrderItem } from "@/types";
import { MENU } from "@/lib/menu";

interface CustomerInfo {
  name: string;
  phone: string;
}

interface OrderStore {
  customerInfo: CustomerInfo;
  quantities: Record<string, number>; // key: "category__itemName"
  activeTab: string;

  // Actions
  setCustomerInfo: (info: Partial<CustomerInfo>) => void;
  setQuantity: (key: string, qty: number) => void;
  incrementQuantity: (key: string) => void;
  decrementQuantity: (key: string) => void;
  setActiveTab: (tab: string) => void;
  clearOrder: () => void;

  // Derived
  getOrderItems: () => OrderItem[];
  getTotal: () => number;
  getTotalItemCount: () => number;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      customerInfo: { name: "", phone: "" },
      quantities: {},
      activeTab: Object.keys(MENU)[0],

      setCustomerInfo: (info) =>
        set((state) => ({
          customerInfo: { ...state.customerInfo, ...info },
        })),

      setQuantity: (key, qty) =>
        set((state) => ({
          quantities: {
            ...state.quantities,
            [key]: Math.max(0, qty),
          },
        })),

      incrementQuantity: (key) =>
        set((state) => ({
          quantities: {
            ...state.quantities,
            [key]: (state.quantities[key] || 0) + 1,
          },
        })),

      decrementQuantity: (key) =>
        set((state) => ({
          quantities: {
            ...state.quantities,
            [key]: Math.max(0, (state.quantities[key] || 0) - 1),
          },
        })),

      setActiveTab: (tab) => set({ activeTab: tab }),

      clearOrder: () =>
        set({
          customerInfo: { name: "", phone: "" },
          quantities: {},
          activeTab: Object.keys(MENU)[0],
        }),

      getOrderItems: () => {
        const { quantities } = get();
        const items: OrderItem[] = [];
        Object.entries(MENU).forEach(([category, menuItems]) => {
          menuItems.forEach((item) => {
            const key = `${category}__${item.name}`;
            const qty = quantities[key] || 0;
            if (qty > 0) {
              items.push({
                name: item.name,
                category,
                price: item.price,
                qty,
                subtotal: item.price * qty,
              });
            }
          });
        });
        return items;
      },

      getTotal: () => {
        const items = get().getOrderItems();
        return items.reduce((sum, item) => sum + item.subtotal, 0);
      },

      getTotalItemCount: () => {
        const items = get().getOrderItems();
        return items.reduce((sum, item) => sum + item.qty, 0);
      },
    }),
    {
      name: "vickys-order-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        customerInfo: state.customerInfo,
        quantities: state.quantities,
        activeTab: state.activeTab,
      }),
    }
  )
);

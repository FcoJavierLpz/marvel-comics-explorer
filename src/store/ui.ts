import { create } from "zustand";

interface UIState {
  cartAlert: {
    show: boolean;
    message: string;
  };
  // eslint-disable-next-line no-unused-vars
  showCartAlert: (message: string) => void;
  hideCartAlert: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  cartAlert: {
    show: false,
    message: "",
  },
  showCartAlert: (message) => {
    set({ cartAlert: { show: true, message } });
    setTimeout(() => {
      set({ cartAlert: { show: false, message: "" } });
    }, 3000);
  },
  hideCartAlert: () => set({ cartAlert: { show: false, message: "" } }),
}));

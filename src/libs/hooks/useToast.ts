import create from "zustand";
import { ReactNode } from "react";

interface ToastState {
  showToast: boolean;
  toastContent: ReactNode | null;
  handleToast: (toastContent: ReactNode, timer?: number) => void;
}

const useToast = create<ToastState>((set) => ({
  showToast: false,
  toastContent: null,
  handleToast: (toastContent, timer = 1700) => {
    set({
      showToast: true,
      toastContent: toastContent || null,
    });
    setTimeout(() => {
      set({ showToast: false });
    }, timer);
  },
}));

export { useToast };

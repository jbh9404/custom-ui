import { create } from "zustand";
import { ReactNode } from "react";

interface ToastState {
  showToast: boolean;
  toastContent: ReactNode | null;
  timeoutId: ReturnType<typeof setTimeout> | null;
  handleToast: (toastContent: ReactNode, timer?: number) => void;
}

export const useToast = create<ToastState>((set, get) => ({
  showToast: false,
  toastContent: null,
  timeoutId: null,
  handleToast: (toastContent, timer = 1700) => {
    const currentTimeout = get().timeoutId;
    if (currentTimeout) {
      clearTimeout(currentTimeout);
    }

    const newTimeoutId = setTimeout(() => {
      set({ showToast: false, timeoutId: null });
    }, timer);

    set({
      showToast: true,
      toastContent: toastContent || null,
      timeoutId: newTimeoutId,
    });
  },
}));

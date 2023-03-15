import create from "zustand";

const useToast = create((set, get) => ({
  showToast: false,
  toastContent: null,
  handleToast: (toastContent: any, timer = 1700) => {
    let timeout;
    set({
      showToast: true,
      toastContent: toastContent ? toastContent : null,
    });
    timeout = setTimeout(() => {
      set({ showToast: false });
    }, timer);
  },
}));

export { useToast };

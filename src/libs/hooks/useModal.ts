import create from "zustand";
import { ReactNode } from "react";

interface ModalState {
  showModal: boolean;
  modalContent: ReactNode | null;
  handleModal: (modalContent?: ReactNode | null) => void;
}

const useModal = create<ModalState>((set) => ({
  showModal: false,
  modalContent: null,
  handleModal: (modalContent) => {
    set({
      showModal: !!modalContent,
      modalContent: modalContent || null,
    });
  },
}));

export { useModal };

import create from "zustand";

const useModal = create((set) => ({
  showModal: false,
  modalContent: false,
  handleModal: (modalContent: any) => {
    set({
      showModal: !modalContent || !modalContent.props ? false : true,
      modalContent: modalContent ? modalContent : null,
    });
  },
}));

export { useModal };

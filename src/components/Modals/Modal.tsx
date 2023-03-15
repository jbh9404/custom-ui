import React from "react";
import ReactDOM from "react-dom";
import shallow from "zustand/shallow";
import { useModal } from "../../libs/hooks/useModal";

const selector = (state: any) => ({
  modalContent: state.modalContent,
  showModal: state.showModal,
  handleModal: state.handleModal,
});
const Modal = () => {
  const portalDiv = document.querySelector("#modal-root")!;
  const { modalContent, showModal, handleModal } = useModal(selector, shallow);

  if (showModal) {
    return ReactDOM.createPortal(<>{modalContent}</>, portalDiv);
  } else return null;
};

export default Modal;

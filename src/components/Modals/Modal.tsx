import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "zustand/shallow";
import { useModal } from "@/libs/hooks/useModal";

const selector = (state: any) => ({
  modalContent: state.modalContent,
  showModal: state.showModal,
  handleModal: state.handleModal,
});

const Modal = () => {
  const portalDiv = document.querySelector("#modal-root");
  const { modalContent, showModal } = useModal(selector, shallow);

  if (showModal && portalDiv) {
    return ReactDOM.createPortal(<>{modalContent}</>, portalDiv);
  } else return null;
};

export default Modal;

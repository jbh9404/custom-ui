import React, { memo } from "react";
import ReactDOM from "react-dom";
import shallow from "zustand/shallow";
import { useToast } from "../../libs/hooks/useToast";

const selector = (state: any) => ({
  toastContent: state.toastContent,
  showToast: state.showToast,
  handleToast: state.handleToast,
});

const Toast = () => {
  const portalDiv = document.querySelector("#modal-root")!;
  const { toastContent, showToast, handleToast } = useToast(selector, shallow);

  if (showToast) {
    return ReactDOM.createPortal(<>{toastContent}</>, portalDiv);
  } else return null;
};

export default Toast;

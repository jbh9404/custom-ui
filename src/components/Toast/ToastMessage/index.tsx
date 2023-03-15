import React from "react";
import styles from "../../../../styles/toasts/ToastMessage.module.scss";
import { ToastMessageProps } from "./index.d";

const ToastMessage = ({ message, exp }: ToastMessageProps) => {
  return (
    <div className={styles.toastMessage}>
      <div>{message}</div>
      <div>{exp}</div>
    </div>
  );
};

export default ToastMessage;

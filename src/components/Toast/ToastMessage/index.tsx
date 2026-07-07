import React from "react";
import styles from "../../../../styles/toasts/ToastMessage.module.scss";
import { ToastMessageProps } from "./index.d";

const ToastMessage = ({ message, exp }: ToastMessageProps) => {
  return (
    <div className={styles.toastMessage}>
      {message && <div className={styles.title}>{message}</div>}
      {exp && <div className={styles.desc}>{exp}</div>}
    </div>
  );
};

export default ToastMessage;

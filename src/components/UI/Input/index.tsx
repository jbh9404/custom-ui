import React from "react";
import styles from "../../../../styles/ui/input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  error?: boolean;
  multiline?: boolean;
}

const CustomInput = ({ error, multiline, className, disabled, ...props }: InputProps) => {
  const inputClass = `${styles.input} ${multiline ? styles.textarea : ""} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""} ${className || ""}`;

  return (
    <div className={styles.inputWrapper}>
      {multiline ? (
        <textarea
          className={inputClass}
          disabled={disabled}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={inputClass}
          disabled={disabled}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};

export default CustomInput;

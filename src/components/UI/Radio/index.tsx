import React from "react";
import styles from "../../../../styles/ui/radio.module.scss";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  color?: string;
}

const CustomRadio = ({ label, color, disabled, className, style, ...props }: RadioProps) => {
  const customStyle = {
    ...style,
    ...(color ? { "--radio-color": color } : {}),
  } as React.CSSProperties;

  return (
    <label className={`${styles.radioLabel} ${disabled ? styles.disabled : ""} ${className || ""}`} style={customStyle}>
      <input type="radio" className={styles.radioInput} disabled={disabled} {...props} />
      <span className={styles.radioCircle}></span>
      {label && <span>{label}</span>}
    </label>
  );
};

export default CustomRadio;

import React from "react";
import styles from "../../../../styles/ui/switch.module.scss";

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  color?: string;
}

const CustomSwitch = ({ label, color, disabled, className, style, ...props }: SwitchProps) => {
  const customStyle = {
    ...style,
    ...(color ? { "--switch-color": color } : {}),
  } as React.CSSProperties;

  return (
    <label className={`${styles.switchLabel} ${disabled ? styles.disabled : ""} ${className || ""}`} style={customStyle}>
      <input type="checkbox" className={styles.switchInput} disabled={disabled} {...props} />
      <div className={styles.switchTrack}></div>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};

export default CustomSwitch;

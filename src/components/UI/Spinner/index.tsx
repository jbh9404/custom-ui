import React from "react";
import styles from "../../../../styles/ui/spinner.module.scss";

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomSpinner = ({ size = 24, color, className, style }: SpinnerProps) => {
  const customStyle = {
    ...style,
    width: size,
    height: size,
    ...(color ? { "--spinner-color": color } : {}),
  } as React.CSSProperties;

  return (
    <div className={`${styles.spinnerWrapper} ${className || ""}`}>
      <div className={styles.spinner} style={customStyle}></div>
    </div>
  );
};

export default CustomSpinner;

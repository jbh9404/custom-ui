import React from "react";
import styles from "../../../../styles/ui/checkbox.module.scss";

interface CheckboxProps {
  color?: string;
}

const CustomCheckbox = ({ color }: CheckboxProps) => {
  return (
    <label className={styles.pickCheckbox}>
      <input type="checkbox" />
      <div className={styles.pickCheckmark} />
      <div className={styles.bg} style={{ background: color }} />
    </label>
  );
};

export default CustomCheckbox;

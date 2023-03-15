import React from "react";
import styles from "../../../../styles/ui/checkbox.module.scss";

const CustomCheckbox = ({ color }: any) => {
  return (
    <label className={styles.pickCheckbox}>
      <input type="checkbox" />
      <div className={styles.pickCheckmark} />
      <div className={styles.bg} style={{ background: color }} />
    </label>
  );
};

export default CustomCheckbox;

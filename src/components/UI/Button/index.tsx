import React, { useMemo } from "react";
// import styles from "./CustomButton.module.scss";
import styles from "../../../../styles/ui/button.module.scss";
import classNames from "classnames";
import { ButtonProps } from "./index.d";

const CustomButton = ({
  children,
  width,
  kind,
  style,
  type,
  ...rest
}: ButtonProps) => {
  const styled = useMemo(
    () => ({
      width: width,
      ...style,
    }),
    [style]
  );

  return (
    <button
      className={classNames(styles.customButton, styles[`${kind}`])}
      type={type ? type : "button"}
      style={styled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;

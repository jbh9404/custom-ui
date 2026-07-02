import React, { useMemo } from "react";
import styles from "../../../../styles/ui/button.module.scss";
import classNames from "classnames";
import { ButtonProps } from "./index.d";

const CustomButton = ({
  children,
  width,
  kind = "primary",
  style,
  type = "button",
  ...rest
}: ButtonProps) => {
  const styled = useMemo(
    () => ({
      width: width,
      ...style,
    }),
    [style, width]
  );

  return (
    <button
      className={classNames(styles.customButton, styles[`${kind}`])}
      type={type}
      style={styled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;

import React from "react";
import styles from "../../../../styles/ui/badge.module.scss";

interface BadgeProps {
  count?: number | React.ReactNode;
  dot?: boolean;
  color?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CustomBadge = ({ count, dot, color, children, className, style }: BadgeProps) => {
  const customStyle = {
    ...style,
    ...(color ? { "--badge-color": color } : {}),
  } as React.CSSProperties;

  // Don't render badge content if count is 0 and it's not a dot
  const isHidden = !dot && (count === 0 || count === null || count === undefined);

  return (
    <div className={`${styles.badgeWrapper} ${className || ""}`}>
      {children}
      {!isHidden && (
        <span
          className={`${styles.badge} ${dot ? styles.dot : ""}`}
          style={customStyle}
        >
          {!dot && count}
        </span>
      )}
    </div>
  );
};

export default CustomBadge;

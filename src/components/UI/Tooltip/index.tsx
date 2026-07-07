import React from "react";
import styles from "../../../../styles/ui/tooltip.module.scss";

interface TooltipProps {
  content: string | React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const CustomTooltip = ({ content, children, position = "top", className }: TooltipProps) => {
  return (
    <div className={`${styles.tooltipWrapper} ${className || ""}`}>
      {children}
      <div className={`${styles.tooltipText} ${styles[position]}`}>
        {content}
      </div>
    </div>
  );
};

export default CustomTooltip;

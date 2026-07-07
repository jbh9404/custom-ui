import React from "react";
import styles from "../../../../styles/ui/skeleton.module.scss";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  shape?: "rect" | "circle";
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const CustomSkeleton = ({
  width = "100%",
  height = 20,
  shape = "rect",
  animated = true,
  className,
  style,
}: SkeletonProps) => {
  return (
    <div
      className={`${styles.skeleton} ${styles[shape]} ${animated ? styles.animated : ""} ${className || ""}`}
      style={{
        width,
        height,
        ...style,
      }}
    />
  );
};

export default CustomSkeleton;

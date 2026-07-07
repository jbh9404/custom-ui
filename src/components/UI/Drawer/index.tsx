import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../../../../styles/ui/drawer.module.scss";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  placement?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomDrawer = ({
  open,
  onClose,
  title,
  placement = "right",
  children,
  width,
  height,
  className,
  style,
}: DrawerProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const contentStyle: React.CSSProperties = { ...style };
  if (width && (placement === "left" || placement === "right")) {
    contentStyle.width = width;
  }
  if (height && (placement === "top" || placement === "bottom")) {
    contentStyle.height = height;
  }

  return createPortal(
    <>
      <div 
        className={`${styles.drawerOverlay} ${open ? styles.open : ""}`} 
        onClick={onClose} 
      />
      <div 
        className={`${styles.drawerContent} ${styles[placement]} ${open ? styles.open : ""} ${className || ""}`}
        style={contentStyle}
      >
        {title && (
          <div className={styles.drawerHeader}>
            <div>{title}</div>
            <button className={styles.closeButton} onClick={onClose}>&times;</button>
          </div>
        )}
        <div className={styles.drawerBody}>
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};

export default CustomDrawer;

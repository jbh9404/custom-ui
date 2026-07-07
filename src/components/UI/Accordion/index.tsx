import React, { useState } from "react";
import styles from "../../../../styles/ui/accordion.module.scss";

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const CustomAccordion = ({ items, allowMultiple = false, className, style }: AccordionProps) => {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setActiveIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return allowMultiple ? [...prev, id] : [id];
      }
    });
  };

  return (
    <div className={`${styles.accordionWrapper} ${className || ""}`} style={style}>
      {items.map((item) => {
        const isActive = activeIds.includes(item.id);
        return (
          <div key={item.id} className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}>
            <div className={styles.accordionHeader} onClick={() => toggleItem(item.id)}>
              {item.title}
              <span className={styles.icon}>▼</span>
            </div>
            <div className={styles.accordionContent}>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomAccordion;

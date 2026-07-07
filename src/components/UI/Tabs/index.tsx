import React, { useState } from "react";
import styles from "../../../../styles/ui/tabs.module.scss";

export interface TabItem {
  key: string;
  label: React.ReactNode;
  children: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomTabs = ({ items, defaultActiveKey, onChange, color, className, style }: TabsProps) => {
  const [activeKey, setActiveKey] = useState<string>(defaultActiveKey || (items[0]?.key ?? ""));

  const handleTabClick = (key: string) => {
    setActiveKey(key);
    onChange && onChange(key);
  };

  const customStyle = {
    ...style,
    ...(color ? { "--tabs-color": color } : {}),
  } as React.CSSProperties;

  const activeContent = items.find(item => item.key === activeKey)?.children;

  return (
    <div className={`${styles.tabsWrapper} ${className || ""}`} style={customStyle}>
      <div className={styles.tabList}>
        {items.map((item) => (
          <div
            key={item.key}
            className={`${styles.tabItem} ${activeKey === item.key ? styles.active : ""}`}
            onClick={() => handleTabClick(item.key)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        {activeContent}
      </div>
    </div>
  );
};

export default CustomTabs;

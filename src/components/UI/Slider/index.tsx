import React, { useState, useEffect, useRef } from "react";
import styles from "../../../../styles/ui/slider.module.scss";

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  color?: string;
  min?: number;
  max?: number;
}

const CustomSlider = ({ color, min = 0, max = 100, disabled, className, style, value, defaultValue, onChange, ...props }: SliderProps) => {
  const [currentValue, setCurrentValue] = useState<number>(Number(value ?? defaultValue ?? min));
  
  useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(Number(value));
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setCurrentValue(Number(e.target.value));
    }
    onChange && onChange(e);
  };

  const percentage = ((currentValue - min) / (max - min)) * 100;

  const customStyle = {
    ...style,
    ...(color ? { "--slider-color": color } : {}),
  } as React.CSSProperties;

  return (
    <div className={`${styles.sliderWrapper} ${disabled ? styles.disabled : ""} ${className || ""}`} style={customStyle}>
      <input
        type="range"
        className={styles.sliderInput}
        min={min}
        max={max}
        disabled={disabled}
        value={currentValue}
        onChange={handleChange}
        {...props}
      />
      <div className={styles.sliderTrack} style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default CustomSlider;

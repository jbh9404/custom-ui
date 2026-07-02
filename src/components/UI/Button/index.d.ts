import { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";

export type kind = "primary" | "secondary" | "disabled" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: string;
  kind?: kind;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
}

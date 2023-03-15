export type kind = "primary" | "secondary" | "ghost" | "disabled";

export interface ButtonProps {
  kind: kind;
  width: string;
  children: any;
  style?: any;
  onClick?: () => void;
  type?: any;
}

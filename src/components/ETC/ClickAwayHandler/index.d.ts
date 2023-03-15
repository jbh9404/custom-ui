import React, { HTMLProps } from "react";

export interface ClickAwayHandlerProps extends HTMLProps<HTMLDivElement> {
  handler: (event: MouseEvent | TouchEvent) => void;
  children: React.ReactNode;
}

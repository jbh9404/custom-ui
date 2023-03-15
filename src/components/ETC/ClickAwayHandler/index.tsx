import React, { useEffect, useRef } from "react";
import { ClickAwayHandlerProps } from "./index.d";

const ClickAwayHandler = ({ handler, children }: ClickAwayHandlerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !ref.current ||
        ref.current.contains((event.target as Node) || null)
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mouseup", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mouseup", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);

  return <div ref={ref}>{children}</div>;
};
export default ClickAwayHandler;

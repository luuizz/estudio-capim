import React from "react";
import RenderComputed from "../Render";
import { styles } from "./style.css";

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Grid({ children, className }: GridProps) {
  const combinedClassName = className
    ? `${styles.grid} ${className}`
    : styles.grid;

  return (
    <RenderComputed asElement={"div"} asStyle={combinedClassName}>
      {children}
    </RenderComputed>
  );
}

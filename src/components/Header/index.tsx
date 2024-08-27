import React from "react";
import RenderComputed from "../Render";
import { styles } from "./style.css";

export default function Header() {
  return (
    <RenderComputed asElement={"header"} asStyle={styles.header}>
      Header
    </RenderComputed>
  );
}

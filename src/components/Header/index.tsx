import React from "react";
import RenderComputed from "../Render";
import { styles } from "./style.css";
import Grid from "../Grid";
import Link from "next/link";
import { menuSocial } from "@/utils/data";

export default function Header() {
  return (
    <RenderComputed asElement={"header"} asStyle={styles.header}>
      <Grid className={styles.headerGrid}>
        <Link href="/">
          <h1 className={styles.logo}>
            Capim © Estúdio de design & comunicação
          </h1>
        </Link>

        <nav>
          <ul className={styles.headerUl}>
            {menuSocial.map((item, key) => (
              <li key={key}>
                <Link className={styles.headerLinkSocial} href={item.url}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Grid>
    </RenderComputed>
  );
}

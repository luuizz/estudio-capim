import React from "react";
import RenderComputed from "../Render";
import Grid from "../Grid";
import Image from "next/image";
import logoCapim from "@/assets/logo-capim.svg";
import Link from "next/link";
import { styles } from "./style.css";

export default function Footer() {
  return (
    <RenderComputed asElement={"footer"} asStyle={styles.footer}>
      <Grid className={styles.footerGrid}>
        <div>
          <Image src={logoCapim} alt="Logo do Estúdio Capim" />
        </div>

        <div className={styles.footerContact}>
          <div>
            <h4 className={styles.footerContactTitle}>Fale com a gente</h4>
            <Link
              className={styles.footerContactLink}
              href="mailto:ola@capimcapim.com.br"
            >
              ola@capimcapim.com.br
            </Link>
          </div>

          <div className={styles.footerMap}>
            <span>
              2018—2024. Vila Mariana, São Paulo Todos os direitos reservados
            </span>
          </div>
        </div>
      </Grid>
    </RenderComputed>
  );
}

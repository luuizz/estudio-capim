import React from "react";
import RenderComputed from "../Render";
import Grid from "../Grid";
import Image from "next/image";
import HeroBanner from "@/assets/banner-hero.png";
import Link from "next/link";
import { IconArrow } from "../IconArrow";
import { styles } from "./style.css";

export default function SectionHero() {
  return (
    <RenderComputed asElement={"section"} asStyle={styles.hero}>
      <Grid>
        <div className={styles.mainHero}>
          <div className={styles.areaBanner}>
            <Image
              className={styles.imgBanner}
              src={HeroBanner}
              alt="Imagem da primeira dobra"
            />
          </div>
          <Link className={styles.btnHero} href="#">
            <IconArrow />
          </Link>
          <div className={styles.areaBottom}>
            <div className={styles.areaBio}>
              <h2 className={styles.textBio}>
                Biobreed. Direção de arte, identidade visual e embalagem.
              </h2>
            </div>
          </div>
        </div>
      </Grid>
    </RenderComputed>
  );
}

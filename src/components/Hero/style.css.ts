import { style } from "@vanilla-extract/css";

export const styles = {
  hero: style({
    position: "relative",
  }),

  mainHero: style({
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
  }),

  areaBanner: style({
    width: "100%",
    height: "clamp(2vh, 75vh, 1080px)",
  }),

  imgBanner: style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }),

  areaBottom: style({
    position: "absolute",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "310px",
  }),

  btnHero: style({
    position: "absolute",
    bottom: "28px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "92px",
    height: "92px",
    background: "black",
    borderRadius: "50%",
  }),

  areaBio: style({
    width: "fit-content",
    padding: "12px 21px",
    background: "white",
    height: "58px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),

  textBio: style({
    fontWeight: 400,
    fontSize: "20px",
  }),
};

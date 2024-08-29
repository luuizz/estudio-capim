import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "@/app/breakpoints";

export const styles = {
  header: style({
    padding: "17px 0 13px 0",
  }),

  logo: style({
    fontSize: "20px",
    fontWeight: 400,
  }),

  headerGrid: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  headerUl: style({
    display: "flex",
    alignItems: "center",
    gap: "32px",
  }),

  headerLinkSocial: style({
    fontSize: "20px",
    fontWeight: 400,
  }),
};

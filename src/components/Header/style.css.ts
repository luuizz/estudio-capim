import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "@/app/breakpoints";

export const styles = {
  header: style({
    height: "48px",
    ...responsiveStyle({
      mobile: {
        height: "56px",
      },
    }),
  }),
};

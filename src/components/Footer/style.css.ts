import { style } from "@vanilla-extract/css";

export const styles = {
  footer: style({
    padding: "20px 0 27px",
  }),

  footerGrid: style({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "270px",
  }),

  footerContact: style({
    display: "flex",
    alignItems: "flex-start",
    gap: "102px",
    marginRight: "62px",
  }),

  footerContactTitle: style({
    fontSize: "20px",
    fontWeight: 400,
  }),

  footerContactLink: style({
    fontSize: "20px",
    fontWeight: 400,
  }),

  footerMap: style({
    fontSize: "20px",
    fontWeight: 400,
    flex: 1,
    maxWidth: "348px",
  }),
};

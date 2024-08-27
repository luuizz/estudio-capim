import { globalStyle } from "@vanilla-extract/css";

const globalStyles = [
  globalStyle("*", {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
  }),
];

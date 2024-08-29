import { globalStyle } from "@vanilla-extract/css";

const globalStyles = [
  globalStyle("*", {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    color: "black",
  }),

  globalStyle("body", {
    backgroundColor: "white",
    fontSize: "62.5%",
  }),

  globalStyle("ul", {
    listStyle: "none",
  }),

  globalStyle("a", {
    textDecoration: "none",
    display: "block",
  }),

  globalStyle("img", {
    maxWidth: "100%",
    display: "block",
  }),
];

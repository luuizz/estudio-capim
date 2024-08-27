type Breakpoints = {
  mobile: string;
  tablet: string;
  desktop: string;
};

const breakpoints: Breakpoints = {
  mobile: "560px",
  tablet: "991px",
  desktop: "1200px",
};

type StylesByBreakpoint = {
  [key in keyof Breakpoints]?: Record<string, any>;
};

export const responsiveStyle = (stylesByBreakpoint: StylesByBreakpoint) => {
  const responsiveStyles = Object.entries(stylesByBreakpoint).reduce(
    (acc, [breakpointKey, styles]) => {
      const breakpoint = breakpoints[breakpointKey as keyof Breakpoints];

      if (!breakpoint) {
        throw new Error(`Breakpoint ${breakpointKey} is not defined`);
      }

      return {
        ...acc,
        "@media": {
          ...acc["@media"],
          [`(max-width: ${breakpoint})`]: styles,
        },
      };
    },
    {} as Record<string, any>
  );

  return responsiveStyles;
};

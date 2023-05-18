/** @format */

import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      white: "white",
      black: "black",
      primaryText: "#D9D9D9",
      secondaryText: "#666666",
      tertiaryText: "#444444",
      primaryStroke: "#141414",
      hoverBackground: "#0A0A0A",
      yellow: "#FFDD3C",
    },
    fontSizes: {
      1: "10px",
      2: "14px",
      3: "16px",
    },
  },
  media: {
    xm: "(max-width: 425px)",
    sm: "(max-width: 725px)",
    md: "(max-width: 1024px)",
  },
});

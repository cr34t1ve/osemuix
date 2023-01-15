/** @format */

import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      helvetica: "Helvetica Neue",
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      white: "white",
      primaryText: "rgba(215, 226, 221, 0.8)",
      yellow: "#FFDD3C",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
    },
  },
  media: {
    xm: "(max-width: 425px)",
    sm: "(max-width: 725px)",
    md: "(max-width: 1024px)",
  },
});

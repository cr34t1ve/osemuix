/** @format */

import { styled } from "@/stitches.config";

export const Text = styled("p", {
  color: "$primaryText",
  lineHeight: "150%",
  textTransform: "none",
  fontSize: "$2",
  textAlign: "left",
  variants: {
    size: {
      1: {
        fontSize: "$1",
        fontWeight: "$regular",
      },
      2: {
        fontSize: "$2",
        fontWeight: "$regular",
      },
      3: {
        fontSize: "$3",
        fontWeight: "$regular",
      },
    },
    align: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
    transform: {
      uppercase: {
        textTransform: "uppercase",
      },
      capitalize: {
        textTransform: "capitalize",
      },
    },
    color: {
      primary: {
        color: "$primaryText",
      },
      secondary: {
        color: "$secondaryText",
      },
      tertiary: {
        color: "$tertiaryText",
      },
      // hyperlink: {
      //   color: "$hyperlink",
      // },
    },
  },
});

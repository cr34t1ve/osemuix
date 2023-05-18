/** @format */

import { styled } from "@/stitches.config";

export const Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 3,
  color: "$primaryText",
  borderRadius: 6,
  border: "1px solid $primaryStroke",
  padding: "6px 10px",
  width: "max-content",
  cursor: "pointer",
  transition: "all .2s ease",

  // "&:hover": {
  //   color: "$primaryBackground",
  //   background: "$primaryText",
  // },
});

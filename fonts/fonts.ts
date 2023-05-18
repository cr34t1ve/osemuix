/** @format */

import localFont from "next/font/local";

export const sfPro = localFont({
  src: [
    {
      path: "./sf-pro-text-regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  fallback: ["arial"],
});

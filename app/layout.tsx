import "./global.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sebastian Livingstone",
  description:
    "Currently building solutions to solve real life problems especially for Africa.",
  themeColor: "white",
  applicationName: "Sebastian Livingstone",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://osemuix.com/",
    title: "Sebastian Livingstone",
    description:
      "Currently building solutions to solve real life problems especially for Africa.",
    siteName: "Sebastian Livingstone",
  },
  icons: {
    icon: "/favicon32.png",
    shortcut: "/favicon32.png",
    apple: "/favicon192.png",
  },
  twitter: {
    title: "Sebastian Livingstone",
    description:
      "Currently building solutions to solve real life problems especially for Africa.",
    card: "summary_large_image",
    creator: "@mailpigeonapp",
  },
  keywords: [
    "Sebastian",
    "Livingstone",
    "Osemudiamen",
    "Ebhohimen",
    "Peniel",
    "Sebastian Livingstone Osemudiamen Ebhohimen Peniel",
  ],
  authors: [
    {
      name: "Desmond Sofua",
      url: "https://sofua.co.uk",
    },
    {
      name: "Sebastian Livingstone",
      url: "https://osemuix.com",
    },
  ],
  creator: "Sebastian Livingstone",
  publisher: "Desmond Sofua",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

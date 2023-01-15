/** @format */

import Head from "next/head";
import { styled } from "@/stitches.config";
import localFont from "@next/font/local";
const helvetica = localFont({
  src: [
    {
      path: "/fonts/helveticaneueltpro-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/helveticaneueltpro-md-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/helveticaneueltpro-bd-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Livingstone</title>
        <meta
          name="description"
          content="Sebastian Livingstone personal website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <DesktopBanner src="/images/osemuix.com.svg" alt="" draggable="false" />
        <MobileBanner
          src="/images/osemuix.com-mobile.svg"
          alt=""
          draggable="false"
        />
        <Extract>
          <Text className={helvetica.className}>Hi there,</Text>
          <Text
            className={helvetica.className}
            color="white"
            css={{ marginTop: 30 }}
          >
            I am Sebastian, a Ui Ux designer with{" "}
            <strong>4 years of experience with using figma</strong> to Ideate,
            Design, and prototype user centric products for the web. When I am
            not designing, I also perform the role of being the CEO of &nbsp;
            <span>Sunamigames</span> and <span>Rare Goods Only</span>. I am
            currently working as a
            <strong>
              {" "}
              product designer at <span>New Comma</span>
            </strong>
            , a startup in Africa connecting African creatives to lucrative
            opportunities
          </Text>
          <Text
            className={helvetica.className}
            color="yellow"
            css={{ marginTop: 33 }}
          >
            <span>CONTACT ME &gt;&gt;&gt;</span>
          </Text>
          <Text
            className={helvetica.className}
            color="yellow"
            size={14}
            css={{ marginTop: 190, "@xm": { marginTop: 100 } }}
          >
            Companies I have worked with...
          </Text>
          <Text
            className={helvetica.className}
            size={14}
            css={{
              marginTop: 10,
              color: "rgba(215, 226, 221, 0.8)",
              maxWidth: "unset",
            }}
          >
            EXPRESSPAY, EFFECT STUDIOS, ACCEEDE GHANA, RAVKA CONSULT, NEWCOMMA
          </Text>
        </Extract>
      </Main>
    </>
  );
}

const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "77px 80px",
  "@xm": {
    padding: "50px 16px",
  },
});

const Extract = styled("article", {
  marginTop: 140,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "@xm": {
    marginTop: 50,
  },
});

const DesktopBanner = styled("img", {
  "@xm": {
    display: "none",
  },
});
const MobileBanner = styled("img", {
  display: "none",

  "@xm": {
    display: "initial",
  },
});

const Text = styled("p", {
  lineHeight: 2,
  fontSize: 18,
  textAlign: "left",
  maxWidth: "59ch",
  color: "$primaryText",
  variants: {
    size: {
      14: {
        fontSize: 14,
      },
    },
    color: {
      white: {
        color: "$primaryText",
        "& strong": {
          color: "$white",
          fontWeight: 700,
        },
        "& span": {
          textDecoration: "underline",
        },
      },
      yellow: {
        color: "$yellow",
      },
    },
  },
});

/** @format */

import Head from "next/head";
import Link from "next/link";
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

const title = `Sebastian Livingstone's Portfolio`;
const image = `https://uploads-ssl.webflow.com/637f643d4e36527b45571b80/63c43cb47bd0df4ed7cc6f73_OpenGraph.png`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta charset="utf-8" /> */}
        <link rel="icon" href="/favicon32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#357054" />
        <link rel="apple-touch-icon" href="/favicon192.png" />
        <meta property="og:image" content={image} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />

        <meta property="twitter:card" content={title} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={title} />
        <meta property="twitter:image" content={title} />
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
            <LinkText href="https://www.sunamigames.com/" target="_blank">
              Sunamigames
            </LinkText>{" "}
            and{" "}
            <LinkText href="https://raregoodsonly.webflow.io/" target="_blank">
              Rare Goods Only
            </LinkText>
            . I am currently working as a
            <strong>
              {" "}
              product designer at{" "}
              <LinkText
                css={{ fontWeight: 700, color: "$white" }}
                href="https://www.newcomma.com/"
                target="_blank"
              >
                New Comma
              </LinkText>
            </strong>
            , a startup in Africa connecting African creatives to lucrative
            opportunities
          </Text>
          <Text
            className={helvetica.className}
            color="yellow"
            css={{ marginTop: 33 }}
          >
            <Contact href="https://www.instagram.com/osemuix/" target="_blank">
              CONTACT ME &gt;&gt;&gt;
            </Contact>
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

const Contact = styled(Link, {
  lineHeight: 2,
  fontSize: 18,
  textAlign: "left",
  maxWidth: "59ch",
  color: "$yellow",
  transition: "all 350ms ease",
  textDecoration: "underline",
  "&:hover": {
    transform: "translate(3%)",
  },
});

const LinkText = styled(Link, {
  display: "inline-block",
  textDecoration: "underline",
  color: "$primaryText",
  fontWeight: 400,
  transition: "all 350ms ease",
  willChange: "transform",
  cursor: "pointer",
  "&:hover": {
    color: "$white",
    // fontWeight: 500,
  },
});

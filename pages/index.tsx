/** @format */
import Link from "next/link";
import { styled } from "@/stitches.config";
import { sfPro } from "@/fonts/fonts";
import { Row, PageMeta, Text, Button } from "@/components";

export default function Home() {
  return (
    <>
      <PageMeta />
      <Main className={sfPro.className}>
        <Row css={{ gap: 10 }}>
          <Text color="secondary">4:15 PM GMT</Text>
          <Text>Accra, Ghana</Text>
        </Row>
        <Text size={3} css={{ marginTop: 20 }}>
          Accra based creative, I pride myself in creating artistic and
          innovative design projects for brands and startups.{" "}
        </Text>
        <Text size={3} css={{ marginTop: 30 }}>
          Currently a Product Designer at{" "}
          <LinkText href="https://www.newcomma.com/">NewComma</LinkText> .
          Designing thoughtful interfaces to help African creatives connect and
          share their ideas with Figma. Sporadically I also take on freelance
          projects.
        </Text>
        <Text size={3} css={{ marginTop: 30 }}>
          I like to get lost in creating and channelling my passion through
          various mediums such as <LinkText href="">photography</LinkText>,{" "}
          <LinkText href="">Videography</LinkText>,{" "}
          <LinkText href="">Reading</LinkText>,{" "}
          <LinkText href="">writing</LinkText>, Farming, and now learning how to
          use Shapr 3D.
        </Text>
        <Text size={3} css={{ marginTop: 30, marginBottom: 70 }}>
          Co-Founder of{" "}
          <LinkText href="https://raregoodsonly.webflow.io/">
            Rare goods Only
          </LinkText>
          .
        </Text>
        <Button>
          Get in touch <span>✌🏽</span>
        </Button>
      </Main>
    </>
  );
}

const Main = styled("main", {
  maxWidth: 470,
  paddingTop: 200,
  paddingBottom: 100,
  marginLeft: "auto",
  marginRight: "auto",
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

const LinkText = styled(Link, {
  display: "inline-block",
  textDecoration: "underline",
  color: "inherit",
  fontWeight: 400,
  transition: "all 350ms ease",
  willChange: "transform",
  cursor: "pointer",
  "&:hover": {
    color: "$white",
  },
});

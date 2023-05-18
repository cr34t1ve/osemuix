/** @format */
import Link from "next/link";
import { styled } from "@/stitches.config";
import { sfPro } from "@/fonts/fonts";
import {
  Row,
  PageMeta,
  Text,
  Button,
  Dropdown,
  Column,
  ProjectCard,
} from "@/components";
import Image from "next/image";
import { useState } from "react";
import { WORK, PROJECTS, BOOKS } from "@/utils/data";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<
    "about" | "work" | "projects" | "books"
  >("books");

  return (
    <>
      <PageMeta />
      <Dropdown />
      <Main
        className={sfPro.className}
        css={{ maxWidth: currentPage === "books" ? 738 : 470 }}
      >
        {currentPage === "about" && <About />}
        {currentPage === "work" && <Work />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "books" && <Books />}
      </Main>
    </>
  );
}

function Books() {
  return (
    <>
      <Text
        align="center"
        weight="semiBold"
        css={{ marginTop: 40, marginBottom: 5 }}
      >
        My Pet Projects
      </Text>
      <Grid css={{ marginTop: 340 }}>
        {BOOKS.map((book, index) => (
          <Column
            key={index}
            style={{
              borderRadius: 10,
              position: "relative",
              height: 240,
              flexShrink: 0,
            }}
          >
            <Image fill src={book.image} alt={book.title} />
          </Column>
        ))}
      </Grid>
    </>
  );
}

function Projects() {
  return (
    <>
      <Text
        align="center"
        weight="semiBold"
        css={{ marginTop: 40, marginBottom: 5 }}
      >
        My Pet Projects
      </Text>
      <Column css={{ gap: 50, marginTop: 340 }}>
        {PROJECTS.map((work, index) => (
          <ProjectCard key={index} {...work} />
        ))}
      </Column>
    </>
  );
}

function Work() {
  return (
    <>
      <Text
        align="center"
        weight="semiBold"
        css={{ marginTop: 40, marginBottom: 5 }}
      >
        Work Archive
      </Text>
      <Text align="center" color="tertiary">
        2019 - 2023
      </Text>
      <Column css={{ gap: 50, marginBottom: 340 }}>
        {WORK.map((work, index) => (
          <ProjectCard key={index} {...work} />
        ))}
      </Column>
    </>
  );
}

function About() {
  return (
    <>
      <Row css={{ gap: 10 }}>
        <Text color="secondary">4:15 PM GMT</Text>
        <Text>Accra, Ghana</Text>
      </Row>
      <Text size={3} css={{ marginTop: 20 }}>
        Accra based creative, I pride myself in creating artistic and innovative
        design projects for brands and startups.{" "}
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

const Grid = styled("div", {
  display: "grid",
  gap: "60px 48px",
  gridTemplateColumns: "repeat(auto-fill, minmax(min(206px, 100%), 1fr))",
});

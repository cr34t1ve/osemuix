/** @format */

import { styled, keyframes } from "@/stitches.config";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { Column, Text } from "@/components";
import Link from "next/link";

const PAGES = [
  {
    slug: "/",
    icon: "work",
    title: "Work",
    subtitle: "5 Projects",
  },
  {
    slug: "/",
    icon: "pet",
    title: "Pet Projects",
    subtitle: "6 Entries",
  },
  {
    slug: "/",
    icon: "work",
    title: "Books",
    subtitle: "5 Entries",
  },
];

export function Dropdown() {
  return (
    <Root>
      <StyledTrigger>
        <Avatar></Avatar>
        <Column css={{ marginLeft: 9, marginRight: 23 }}>
          <Text>Sebastian Livingstone</Text>
          <Text size={1} color="secondary">
            Product Designer
          </Text>
        </Column>
        <Image
          width={14}
          height={14}
          src="/images/icons/chevron.svg"
          alt="chevron icon"
        />
      </StyledTrigger>
      <Portal>
        <StyledContent>
          {PAGES.map((page, index) => (
            <StyledItem key={index}>
              <DropDownItem {...page} />
            </StyledItem>
          ))}
        </StyledContent>
      </Portal>
    </Root>
  );
}

function DropDownItem({
  icon,
  title,
  slug,
  subtitle,
}: {
  icon: string;
  title: string;
  slug: string;
  subtitle: string;
}) {
  return (
    <StyledLink href={slug}>
      <Image
        width={20}
        height={20}
        src={`/images/icons/${icon}.svg`}
        alt={`${title} icon`}
      />
      <Column>
        <Text>{title}</Text>
        <Text size={1} color="secondary">
          {subtitle}
        </Text>
      </Column>
    </StyledLink>
  );
}

const StyledTrigger = styled(Trigger, {
  all: "unset",
  position: "fixed",
  top: 60,
  left: 80,
  display: "flex",
  alignItems: "center",
  width: 260,
  border: "1px solid $primaryStroke",
  borderRadius: 100,
  padding: "6px 16px 6px 10px",
  background: "rgbo(0, 0, 0, 0.2)",
  backdropFilter: "blur(12px)",
  cursor: "pointer",
});

const Avatar = styled("div", {
  position: "relative",
  width: 42,
  height: 42,
  borderRadius: "50%",
  overflow: "hidden",
  backgroundImage: "url(/images/avatar/avi.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  flexShrink: 0,
});

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(Content, {
  display: "flex",
  flexDirection: "column",
  width: "calc(260px + 25px)",
  marginTop: 8,
  border: "1px solid $primaryStroke",
  borderRadius: 16,
  background: "rgbo(0, 0, 0, 0.2)",
  backdropFilter: "blur(12px)",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

const StyledItem = styled(Item, {
  all: "unset",
});

const StyledLink = styled(Link, {
  display: "flex",
  gap: 20,
  alignItems: "center",
  padding: "16px 20px",
  color: "unset",
  cursor: "pointer",
  transition: "background 550ms ease",
  "&:hover": {
    background: "$hoverBackground",
  },
});

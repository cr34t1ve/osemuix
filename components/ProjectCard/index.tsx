/** @format */

import { styled } from "@stitches/react";
import { Column, Row, Text } from "@/components";

export function ProjectCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Column>
      <ImageHolder css={{ backgroundImage: `url(${image})` }} />
      <Row justifyContent="spaceBetween" css={{ marginTop: 10 }}>
        <Text weight="semiBold">{title}</Text>
        <Text color="secondary">Learn More</Text>
      </Row>
      <Row justifyContent="spaceBetween" css={{ marginTop: 5 }}>
        <Text color="secondary">{description}</Text>
      </Row>
    </Column>
  );
}

const ImageHolder = styled("div", {
  width: "100%",
  height: 290,
  borderRadius: 20,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

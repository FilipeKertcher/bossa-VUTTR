import React, { ReactNode, useEffect } from "react";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Body,
  BodySmall,
  BodySmallest,
} from "./style";

import mainTheme from "themes/main";

enum variant_types {
  "Heading1",
  "Heading2",
  "Heading3",
  "Heading4",
  "Heading5",
  "Body",
  "BodySmall",
  "BodySmallest",
}

interface ITypography {
  tag: any;
  children: ReactNode;
  color?: keyof typeof mainTheme.colors;
  variant: keyof typeof variant_types;
  style?: any;
}

const Typography = ({
  tag,
  children,
  variant,
  color = "ink",
  style,
}: ITypography) => {
  const selectedColor: string = !!color?.includes("#")
    ? color
    : mainTheme.colors[color];

  const stl = !!style ? style : {};

  const component = {
    Heading1: (
      <Heading1 as={tag} color={selectedColor} style={stl}>
        {children}
      </Heading1>
    ),
    Heading2: (
      <Heading2 as={tag} color={selectedColor} style={stl}>
        {children}
      </Heading2>
    ),
    Heading3: (
      <Heading3 as={tag} color={selectedColor} style={stl}>
        {children}
      </Heading3>
    ),
    Heading4: (
      <Heading4 as={tag} color={selectedColor} style={stl}>
        {children}
      </Heading4>
    ),
    Heading5: (
      <Heading5 as={tag} color={selectedColor} style={stl}>
        {children}
      </Heading5>
    ),
    Body: (
      <Body as={tag} color={selectedColor} style={stl}>
        {children}
      </Body>
    ),
    BodySmall: (
      <BodySmall as={tag} color={selectedColor} style={stl}>
        {children}
      </BodySmall>
    ),
    BodySmallest: (
      <BodySmallest as={tag} color={selectedColor} style={stl}>
        {children}
      </BodySmallest>
    ),
    default: (
      <Heading1 as={tag} color={selectedColor} style={stl}>
        {children}
      </Heading1>
    ),
  };

  return component[variant] || component["default"];
};

export default Typography;

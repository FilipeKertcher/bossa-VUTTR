import React, { ReactNode, FC } from "react";
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

type ITypography = {
  tag: any;
  children: ReactNode;
  color?: keyof typeof mainTheme.colors;
  style?: any;
  variant: keyof typeof variant_types;
  className?: any;
};

const Typography: FC<ITypography> = ({
  tag,
  children,
  variant,
  className,
  color = "ink",
  ...restProps
}: ITypography) => {
  const selectedColor: string = !!color?.includes("#")
    ? color
    : mainTheme.colors[color];

  const component = {
    Heading1: (
      <Heading1 as={tag} color={selectedColor} {...restProps}>
        {children}
      </Heading1>
    ),
    Heading2: (
      <Heading2 as={tag} color={selectedColor} {...restProps}>
        {children}
      </Heading2>
    ),
    Heading3: (
      <Heading3 as={tag} color={selectedColor} {...restProps}>
        {children}
      </Heading3>
    ),
    Heading4: (
      <Heading4 as={tag} color={selectedColor} {...restProps}>
        {children}
      </Heading4>
    ),
    Heading5: (
      <Heading5 as={tag} color={selectedColor} {...restProps}>
        {children}
      </Heading5>
    ),
    Body: (
      <Body as={tag} color={selectedColor} {...restProps}>
        {children}
      </Body>
    ),
    BodySmall: (
      <BodySmall as={tag} color={selectedColor} {...restProps}>
        {children}
      </BodySmall>
    ),
    BodySmallest: (
      <BodySmallest as={tag} color={selectedColor} {...restProps}>
        {children}
      </BodySmallest>
    ),
    default: (
      <Heading1 as={tag} color={selectedColor} {...restProps}>
        {children}
      </Heading1>
    ),
  };

  return component[variant] || component["default"];
};

export default Typography;

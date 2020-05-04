import React, { ReactNode } from "react";
import CardStyled from "./style";

interface ICard {
  elevationLevel?: 1 | 2 | 3 | 4;
  children?: ReactNode;
  style?: any;
  className?: string;
}

const Card = (props: ICard) => {
  return <CardStyled {...props}>{props.children}</CardStyled>;
};

export default Card;

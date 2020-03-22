import React, { useEffect, useState, useContext, ReactNode } from "react";
import styled from "styled-components";
import CardStyled from "./style";

interface ICard {
  elevationLevel?: 1 | 2 | 3 | 4;
  children?: ReactNode;
}

const Card = (props: ICard) => {
  return <CardStyled {...props}>{props.children}</CardStyled>;
};

export default Card;

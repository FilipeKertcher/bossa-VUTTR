import React, { useEffect, useState, useContext, ReactNode } from "react";
import ButtonStyled, { ButtonIntent, ButtonVariants } from "./style";

interface IButton {
  children?: ReactNode;
  variant?: keyof typeof ButtonVariants;
  intent?: keyof typeof ButtonIntent;
  disabled?: boolean;
  onClick: () => void;
  noPadding?: boolean;
}
const Button = ({
  children,
  variant = "Primary",
  intent = "Neutral",
  disabled = false,
  onClick,
  noPadding = false,
}: IButton) => {
  return (
    <ButtonStyled
      {...{ variant, intent, noPadding }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

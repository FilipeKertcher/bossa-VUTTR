import React, { useEffect, useState, useContext, ReactNode } from "react";
import ButtonStyled, { ButtonIntent, ButtonVariants } from "./style";

interface IButton {
  children?: ReactNode;
  variant?: keyof typeof ButtonVariants;
  intent?: keyof typeof ButtonIntent;
  disabled?: boolean;
  onClick: () => void;
}
const Button = ({
  children,
  variant = "Primary",
  intent = "Neutral",
  disabled = false,
  onClick,
}: IButton) => {
  return (
    <ButtonStyled
      {...{ variant, intent }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

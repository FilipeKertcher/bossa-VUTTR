import React, { FC, ReactNode } from "react";
import { ButtonIntent, ButtonVariants, ButtonStyled } from "./style";

interface IButton {
  children?: ReactNode;
  variant?: keyof typeof ButtonVariants;
  intent?: keyof typeof ButtonIntent;
  disabled?: boolean;
  onClick: () => void;
  noPadding?: boolean;
}
const Button: FC<IButton> = ({
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

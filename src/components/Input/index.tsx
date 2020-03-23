import React, { useEffect, useState, useContext } from "react";
import { InputStyled, InputWraper } from "./style";
import Typography from "components/Typography";

interface IInput {
  onChange: (value: string) => void;
  type?: string;
  value: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
}

const Input = ({
  onChange,
  value,
  label,
  type = "text",
  required = false,
  placeholder
}: IInput) => {
  return (
    <InputWraper>
      {!!label && (
        <Typography tag={"span"} variant={"BodySmall"} color={"ink"}>
          {`${label}  ${!!required ? "*" : ""}`}
        </Typography>
      )}
      <InputStyled
        value={value}
        required={required}
        placeholder={
          !!placeholder
            ? placeholder
            : !!required
            ? "Required..."
            : "Optional..."
        }
        onChange={(e: any) => onChange(e.target.value)}
        type={type}
      />
    </InputWraper>
  );
};

export default Input;

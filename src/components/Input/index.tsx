import React, { useEffect, useState, useContext } from "react";
import { InputStyled, InputWraper } from "./style";
import Typography from "components/Typography";

interface IInput {
  onChange: (e: any) => void;
  type?: string;
  value: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
}

const Input = ({
  onChange,
  value,
  label,
  errorMessage,
  name,
  type = "text",
  required = false,
  placeholder,
  ...restProps
}: IInput) => {
  return (
    <InputWraper>
      <div className={"inline-block"}>
        {!!label && (
          <>
            <Typography tag={"span"} variant={"BodySmall"} color={"ink"}>
              {`${label}   `}
            </Typography>

            {!!required && (
              <Typography
                tag={"span"}
                variant={"BodySmall"}
                color={!!errorMessage ? "red" : "ink"}
              >
                *
              </Typography>
            )}
          </>
        )}
      </div>
      <div className={"block"}>
        <InputStyled
          name={name}
          value={value}
          required={required}
          placeholder={
            !!placeholder
              ? placeholder
              : !!required
              ? "Required..."
              : "Optional..."
          }
          onChange={onChange}
          type={type}
          {...restProps}
        />
      </div>
      {!!errorMessage && (
        <div className={"flex flex-row items-center justify-end"}>
          <Typography tag={"span"} color={"red"} variant={"BodySmallest"}>
            {errorMessage}
          </Typography>
        </div>
      )}
    </InputWraper>
  );
};

export default Input;

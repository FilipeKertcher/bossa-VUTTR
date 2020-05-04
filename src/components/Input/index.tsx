import React, { FC } from "react";
import { InputStyled, InputWraper } from "./style";
import Typography from "components/Typography";

type IInput = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  value: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
};

const Input: FC<IInput> = ({
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
          {...{ errorMessage }}
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

import React, { useEffect, useState, useContext } from "react";
import { TextAreaStyled, TextAreaWraper } from "./style";
import Typography from "components/Typography";

interface IInput {
  onChange: (e: any) => void;
  value: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
  rows?: number;
  cols?: number;
  name?: string;
}

const TextArea = ({
  onChange,
  value,
  label,
  errorMessage,
  required = false,
  placeholder,
  rows = 5,
  cols = 20,
  name,
}: IInput) => {
  return (
    <TextAreaWraper>
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
        <TextAreaStyled
          value={value}
          required={required}
          name={name}
          cols={cols}
          rows={rows}
          placeholder={
            !!placeholder
              ? placeholder
              : !!required
              ? "Required..."
              : "Optional..."
          }
          onChange={onChange}
          {...{ errorMessage }}
        />
      </div>
      {!!errorMessage && (
        <div className={"flex flex-row items-center justify-end"}>
          <Typography tag={"span"} color={"red"} variant={"BodySmallest"}>
            {errorMessage}
          </Typography>
        </div>
      )}
    </TextAreaWraper>
  );
};

export default TextArea;

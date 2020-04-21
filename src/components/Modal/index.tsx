import React, { useEffect, useState, useContext, ReactNode } from "react";
import Typography from "components/Typography";
import mainTheme from "themes/main";
import ITool from "Models/tool";
import Card from "components/Card";
import styled from "styled-components";
import Button from "components/Button";
import { ReactComponent as CloseButton } from "assets/icons/modal_close.svg";
import { ModalVariants } from "Models/modalVariants";
import { ModalStyled, ModalCardWrapper } from "./style";

interface IModal {
  children: ReactNode;
  variant?: keyof typeof ModalVariants;
  title?: string;
  onClose: () => void;
}

const Modal = ({
  children,
  title,
  variant = "ModalPrimary",
  onClose,
  ...restProps
}: IModal) => {
  return (
    <ModalStyled
      className={"w-screen h-screen flex flex-col items-center justify-center"}
      {...restProps}
    >
      <ModalCardWrapper {...{ variant }}>
        <Card elevationLevel={4}>
          <div
            className={`flex flex-row ${
              !!title ? "justify-between" : "justify-end"
            } items-center mt-2`}
          >
            {!!title && (
              <Typography tag={"h5"} variant={"Heading5"} color={"ink"}>
                {title}
              </Typography>
            )}
            <Button noPadding variant={"Quartiary"} onClick={onClose}>
              <CloseButton />
            </Button>
          </div>
          {children}
        </Card>
      </ModalCardWrapper>
    </ModalStyled>
  );
};

export { Modal };

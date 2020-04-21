import React, { useEffect, useState, useContext, ReactNode } from "react";
import Typography from "components/Typography";
import mainTheme from "themes/main";
import ITool from "Models/tool";
import Card from "components/Card";
import styled from "styled-components";
import Button from "components/Button";
import { ReactComponent as CloseButton } from "assets/icons/modal_close.svg";

enum ModalVariants {
  "ModalPrimary",
  "ModalDanger",
  "ModalSmall",
  "ModalMedium",
  "ModalLarge",
  "ModalHuge",
}

interface IModal {
  children: ReactNode;
  variant?: keyof typeof ModalVariants;
  title?: string;
  onClose: () => void;
}

const returnModalVariantWidth = (variant: keyof typeof ModalVariants) => {
  const width = {
    ModalPrimary: "570px",
    ModalDanger: "400px",
    ModalSmall: "400px",
    ModalMedium: "600px",
    ModalLarge: "800px",
    ModalHuge: "960px",
  }[variant];

  return width;
};

const ModalStyled = styled.div`
  position: fixed; /* Stay in place */
  left: 0;
  top: 0;
  background-color: ${mainTheme.colors.ink}E6;
`;

const ModalCardWrapper = styled.div`
  @media (max-width: 576px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    width: 100%;
  }

  @media (max-height: 640px) {
    max-height: 90%;
    overflow-y: auto;
  }

  @media (min-width: 577px) {
    width: ${(props: any) => returnModalVariantWidth(props.variant)};
  }
`;

const ModalActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ModalContent = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media (max-width: 650px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Modal = ({
  children,
  title,
  variant = "ModalPrimary",
  onClose,
}: IModal) => {
  return (
    <ModalStyled
      className={"w-screen h-screen flex flex-col items-center justify-center"}
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

export { Modal, ModalContent, ModalActions };

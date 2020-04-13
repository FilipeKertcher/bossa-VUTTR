import React, { useEffect, useState, useContext, ReactNode } from "react";
import Typography from "components/Typography";
import mainTheme from "themes/main";
import ITool from "Models/tool";
import Card from "components/Card";
import styled from "styled-components";
import Button from "components/Button";

interface IModal {
  children: ReactNode;
  onClose: () => void;
}

const ModalStyled = styled.div`
  position: fixed; /* Stay in place */
  left: 0;
  top: 0;
  background-color: ${mainTheme.colors.ink}E6;
`;
const Modal = ({ children, onClose }: IModal) => {
  return (
    <ModalStyled
      className={"w-screen h-screen flex flex-col items-center justify-center"}
    >
      <Card elevationLevel={4}>
        <div className={"flex flex-row justify-end items-center mt-8"}>
          <Button variant={"Quartiary"} onClick={onClose}>
            FECHAR
          </Button>
        </div>
        <div className={"m-4"}>TESTEEE</div>
        {/* {children} */}
      </Card>
    </ModalStyled>
  );
};

export default Modal;

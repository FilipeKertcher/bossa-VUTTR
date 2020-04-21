import styled from "styled-components";
import { ModalVariants } from "Models/modalVariants";

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
  background-color: ${(props) => props.theme.colors.ink}E6;
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

  @media (max-width: 576px) {
    justify-content: space-between;
  }

  & > button:not(:first-child) {
    margin-left: 10px;
  }
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

export { ModalStyled, ModalCardWrapper, ModalActions, ModalContent };

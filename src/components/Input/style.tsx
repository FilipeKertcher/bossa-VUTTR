import styled from "styled-components";

const InputStyled = styled.input`
  background: ${(props: any) =>
      props.theme.colors[
        !!props.errorMessage ? "mostLightestRed" : "darkerWhite"
      ]}
    0% 0% no-repeat padding-box;
  border: 1px solid
    ${(props: any) =>
      props.theme.colors[!!props.errorMessage ? "red" : "darkestWhite"]};
  border-radius: 5px;
  opacity: 1;

  text-align: left;
  font: 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  opacity: 1;
  padding-left: 10px;
  padding-top: 13px;
  padding-bottom: 12px;
  width: 100%;
  color: ${(props: any) =>
    props.theme.colors[!!props.errorMessage ? "red" : "lighterInk"]};

  &::placeholder {
    font: Regular 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;
    color: ${(props: any) =>
      props.theme.colors[!!props.errorMessage ? "red" : "lighterInk"]};
    opacity: 1;
  }

  &:active,
  &:focus {
    color: ${(props: any) =>
      props.theme.colors[!!props.errorMessage ? "red" : "ink"]};
    background: ${(props) => props.theme.colors.darkestWhite};
    outline: 0;
  }
`;

const InputWraper = styled.div``;

export { InputStyled, InputWraper };

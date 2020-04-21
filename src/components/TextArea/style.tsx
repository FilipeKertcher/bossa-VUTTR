import styled from "styled-components";

const TextAreaStyled = styled.textarea`
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
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

  &::placeholder {
    font: Regular 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;
    color: #b1adb9;
    opacity: 1;
  }

  &:active,
  &:focus {
    color: #170c3a;
    background: #ebeaed;
    outline: 0;
  }
`;

const TextAreaWraper = styled.div``;

export { TextAreaStyled, TextAreaWraper };

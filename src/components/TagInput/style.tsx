import styled from "styled-components";

const Bullet = styled.button`
  border-radius: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${(props) => props.theme.colors.ink};
  color: ${(props) => props.theme.colors.white};
  &:focus {
    outline: 0;
  }
`;

const InfoWrapper = styled.div`
  align-self: flex-end;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 16px;
  margin-top: 10px;
  font-size: 12px;
  border: 1px solid ${(props: any) => props.theme.colors.ink};
`;
export { InfoWrapper, Bullet };

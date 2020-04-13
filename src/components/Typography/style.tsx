import styled from "styled-components";

const Heading1 = styled.div`
  text-align: left;
  font: 42px/50px ${(props: any) => props.theme.fonts.heading};
  font-weight: ${(props: any) => props.theme.fontWeights.heading};
  letter-spacing: 0.84px;
  color: ${(props: any) => (!!props.color ? props.color : "#170C3A")};
  opacity: 1;
`;

const Heading2 = styled.div`
  text-align: left;
  font: 36px/40px ${(props: any) => props.theme.fonts.heading};
  font-weight: ${(props: any) => props.theme.fontWeights.heading};
  letter-spacing: 0.72px;
  color: ${(props: any) => (!!props.color ? props.color : "#170C3A")};
  opacity: 1;
`;
const Heading3 = styled.div`
  text-align: left;
  font: 30px/36px ${(props: any) => props.theme.fonts.heading};
  font-weight: ${(props: any) => props.theme.fontWeights.heading};

  letter-spacing: 0.6px;
  color: ${(props: any) => (!!props.color ? props.color : "#170C3A")};
  opacity: 1;
`;
const Heading4 = styled.div`
  text-align: left;
  font: 26px/32px ${(props: any) => props.theme.fonts.heading};
  font-weight: ${(props: any) => props.theme.fontWeights.heading};

  letter-spacing: 0.52px;
  color: ${(props: any) => (!!props.color ? props.color : "#170C3A")};
  opacity: 1;
`;

const Heading5 = styled.div`
  text-align: left;
  font: 24px/30px ${(props: any) => props.theme.fonts.heading};
  font-weight: ${(props: any) => props.theme.fontWeights.heading};

  letter-spacing: 0.48px;
  color: ${(props: any) => (!!props.color ? props.color : "#170C3A")};
  opacity: 1;
`;

const Body = styled.div`
  text-align: left;
  font: 20px/26px ${(props: any) => props.theme.fonts.body};
  font-weight: ${(props: any) => props.theme.fontWeights.body};
  letter-spacing: 0.4px;
  color: ${(props: any) => (!!props.color ? props.color : "#170C3A")};
  opacity: 1;
`;

const BodySmall = styled.div`
  text-align: left;
  font: 18px/24px ${(props: any) => props.theme.fonts.body};
  font-weight: ${(props: any) => props.theme.fontWeights.body};
  letter-spacing: 0.36px;
  color: ${(props: any) => (!!props.color ? props.color : "#170C3A")};
  opacity: 1;
`;

const BodySmallest = styled.div`
  text-align: left;
  font: 16px/22px ${(props: any) => props.theme.fonts.body};
  font-weight: ${(props: any) => props.theme.fontWeights.body};
  letter-spacing: 0.32px;
  color: ${(props: any) => (!!props.color ? props.color : "#170C3A")};
  opacity: 1;
  vertical-align: middle;
`;

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Body,
  BodySmall,
  BodySmallest,
};

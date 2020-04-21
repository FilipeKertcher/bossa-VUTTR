import styled from "styled-components";

export enum ButtonIntent {
  "Neutral",
  "Danger",
  "Success",
}

export enum ButtonVariants {
  "Primary",
  "Secondary",
  "Terciary",
  "Quartiary",
}

enum ButtonModes {
  "default",
  "hover",
  "clicked",
  "disabled",
}

const returnColorBasedOnIntent = (
  variant: keyof typeof ButtonVariants,
  intent: keyof typeof ButtonIntent,
  mode: keyof typeof ButtonModes
) => {
  const colors = {
    Primary: {
      Neutral: {
        default: "#365DF0",
        hover: "#2F55CC",
        clicked: "#244AA8",
        disabled: "#B9C6FA",
      },
      Danger: {
        default: "#F95E5A",
        hover: "#CC4C4C",
        clicked: "#A53F3F",
        disabled: "#FCAEAC",
      },
      Success: {
        default: "#0DCB7D",
        hover: "#10B26C",
        clicked: "#0E995D",
        disabled: "#88EDC4",
      },
    },
    Secondary: {
      Neutral: {
        default: "#E1E7FD",
        hover: "#CAD6FC",
        clicked: "#B9C6FA",
        disabled: "#E1E7FD",
      },
      Danger: {
        default: "#FEEFEE",
        hover: "#FCD7D6",
        clicked: "#FCC6C5",
        disabled: "#FEEFEE",
      },
      Success: {
        default: "#E7FBF3",
        hover: "#CFF9E6",
        clicked: "#B7F7D8",
        disabled: "#E7FBF3",
      },
    },
    Terciary: {
      Neutral: {
        default: "#E1E7FD",
        hover: "#CAD6FC",
        clicked: "#B9C6FA",
        disabled: "#E1E7FD",
      },
      Danger: {
        default: "#FEEFEE",
        hover: "#FCD7D6",
        clicked: "#FCC6C5",
        disabled: "#FEEFEE",
      },
      Success: {
        default: "#E7FBF3",
        hover: "#CFF9E6",
        clicked: "#B7F7D8",
        disabled: "#E7FBF3",
      },
    },
    Quartiary: {
      Neutral: {
        default: "",
        hover: "",
        clicked: "",
        disabled: "",
      },
      Danger: {
        default: "",
        hover: "",
        clicked: "",
        disabled: "",
      },
      Success: {
        default: "",
        hover: "",
        clicked: "",
        disabled: "",
      },
    },
  };

  const foundVariant = colors[variant] || colors["Primary"];

  const foundIntent = foundVariant[intent] || foundVariant["Neutral"];
  return foundIntent[mode];
};

const returnButtonPadding = (
  variant: keyof typeof ButtonVariants,
  noPadding: boolean
) => {
  if (!!noPadding)
    return {
      left: "0px",
      right: "0px",
      top: "0px",
      bottom: "0px",
    };

  const config = {
    Primary: {
      left: "26px",
      right: "26px",
      top: "13px",
      bottom: "13px",
    },
    Secondary: {
      left: "26px",
      right: "26px",
      top: "13px",
      bottom: "13px",
    },
    Terciary: {
      left: "18px",
      right: "18px",
      top: "6px",
      bottom: "6px",
    },
    Quartiary: {
      left: "26px",
      right: "26px",
      top: "13px",
      bottom: "13px",
    },
  };

  return config[variant] || config["Primary"];
};

const ButtonStyled = styled.button`
  background: ${(props: any) =>
      returnColorBasedOnIntent(props.variant, props.intent, "default")}
    0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;

  padding-right: ${(props: any) =>
    returnButtonPadding(props.variant, props.noPadding).right};
  padding-left: ${(props: any) =>
    returnButtonPadding(props.variant, props.noPadding).left};
  padding-top: ${(props: any) =>
    returnButtonPadding(props.variant, props.noPadding).top};
  padding-bottom: ${(props: any) =>
    returnButtonPadding(props.variant, props.noPadding).bottom};

  height: auto;
  width: auto;
  &:hover {
    background: ${(props: any) =>
        returnColorBasedOnIntent(props.variant, props.intent, "hover")}
      0% 0% no-repeat padding-box;
  }

  &:active {
    background: ${(props: any) =>
        returnColorBasedOnIntent(props.variant, props.intent, "clicked")}
      0% 0% no-repeat padding-box;
  }

  &:disabled {
    background: ${(props: any) =>
        returnColorBasedOnIntent(props.variant, props.intent, "disabled")}
      0% 0% no-repeat padding-box;
  }
  &:focus {
    outline: 0;
  }
`;

export default ButtonStyled;

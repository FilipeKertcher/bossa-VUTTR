import React, { ReactNode } from "react";
import Typography from "components/Typography";
import { StyledNotification, NotificationTypes } from "./style";
import ErrorTagIcon from "assets/icons/error";
import SuccessTagIcon from "assets/icons/success";
import WarningTagIcon from "assets/icons/warning";
import InfoIcon from "assets/icons/info";
import CloseIcon from "assets/icons/close";

interface INotification {
  variant: keyof typeof NotificationTypes;
  children: ReactNode;
}

const Notification = ({ variant = "neutral", children }: INotification) => {
  const builtProps = {
    variant,
  };

  const returnIcon = () => {
    const found = {
      neutral: null,
      warning: <WarningTagIcon fill={"#FFFFFF"} height={23} width={23} />,
      error: <ErrorTagIcon fill={"#FFFFFF"} height={23} width={23} />,
      success: <SuccessTagIcon fill={"#FFFFFF"} height={23} width={23} />,
      info: <InfoIcon fill={"#FFFFFF"} height={23} width={23} />,
    }[variant];

    return found;
  };
  return (
    <StyledNotification {...builtProps}>
      <div className="flex flex-col">
        <div className="flex flex-row">{!!returnIcon() && returnIcon()}</div>
        <div>{children}</div>
      </div>
    </StyledNotification>
  );
};

export default Notification;

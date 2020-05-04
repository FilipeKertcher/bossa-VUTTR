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

const Notification = ({ variant = "neutral" }: INotification) => {
  const builtProps = {
    variant,
  };
  return (
    <StyledNotification {...builtProps}>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <ErrorTagIcon fill={"#383838"} height={23} width={23} />
          <SuccessTagIcon fill={"#383838"} height={23} width={23} />
          <WarningTagIcon fill={"#383838"} height={23} width={23} />
          <InfoIcon fill={"#383838"} height={23} width={23} />
          <CloseIcon fill={"#383838"} height={23} width={23} />
        </div>
        <div></div>
      </div>
    </StyledNotification>
  );
};

export default Notification;

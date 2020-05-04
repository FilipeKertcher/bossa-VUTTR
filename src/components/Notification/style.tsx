import styled from "styled-components";

enum NotificationTypes {
  neutral = "BannerNotificationNeutral",
  warning = "BannerNotificationWarning",
  error = "BannerNotificationError",
  success = "BannerNotificationSuccess",
  info = "BannerNotificationSuccess",
}

const returnVariantBackground = (
  variant: keyof typeof NotificationTypes,
  theme: any
) => {
  const variantBackround = {
    neutral: theme.colors.white,
    warning: theme.colors.yellow,
    error: theme.colors.red,
    success: theme.colors.green,
    info: theme.colors.lighterInk,
  }[variant];

  return variantBackround;
};

const StyledNotification = styled.div<{
  variant: keyof typeof NotificationTypes;
}>`
  width: 489px;
  height: 123px;
  background: ${(props: any) =>
      returnVariantBackground(props.variant, props.theme)}
    0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border-radius: 5px;
  padding: 15px;
`;

export { StyledNotification, NotificationTypes };

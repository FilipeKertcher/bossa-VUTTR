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
  height: 253px;
  background: ${(props: any) =>
      returnVariantBackground(props.variant, props.theme)}
    0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  opacity: 1;

  @media (max-width: 576px) {
    width: 259px;
    height: 123px;
  }
`;

export { StyledNotification, NotificationTypes };

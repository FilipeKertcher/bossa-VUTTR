import React, { useEffect, useState, useContext, ReactNode } from "react";
import StyledRadioButton from "./style";
import Typography from "components/Typography";

interface IRadioButton {
  onChange?: (checked: boolean) => void;
  description?: string;

  restProps?: any;
}

const RadioButton = ({
  onChange,
  description,

  restProps,
}: IRadioButton) => {
  const [inputChecked, setInputChecked] = useState(false);
  return (
    <div className="flex items-center">
      <StyledRadioButton
        onChange={(e) => {
          if (!!onChange) onChange(!inputChecked);
          setInputChecked(!inputChecked);
        }}
        {...restProps}
      />
      {!!description && (
        <Typography
          tag={"span"}
          variant={"BodySmallest"}
          color={"ink"}
          style={{ marginLeft: 5 }}
        >
          {description}
        </Typography>
      )}
    </div>
  );
};

export default RadioButton;

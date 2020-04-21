import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import InputTag from "./index";
import Typography from "components/Typography";
import "../../index.css";
const story = storiesOf("Components | InputTag", module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo);

story.add("Full State", () => (
  <div className={"mx-4"} style={{ paddingBottom: 140 }}>
    <InputTag tags={["initial tag 1", "initial tag 2"]} />
  </div>
));

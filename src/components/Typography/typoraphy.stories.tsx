import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import Typography from "./index";

import "../../index.css";
const story = storiesOf("Components | Typography", module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo);

story.add("Heading 1", () => (
  <>
    <div className={"mx-4"}>
      <Typography tag={"span"} variant={"Heading1"}>
        Heading1
      </Typography>
    </div>
  </>
));

story.add("Heading 2", () => (
  <>
    <div className={"mx-4"}>
      <Typography tag={"span"} variant={"Heading2"}>
        Heading2
      </Typography>
    </div>
  </>
));
story.add("Heading 3", () => (
  <>
    <div className={"mx-4"}>
      <Typography tag={"span"} variant={"Heading3"}>
        Heading3
      </Typography>
    </div>
  </>
));
story.add("Heading 4", () => (
  <>
    <div className={"mx-4"}>
      <Typography tag={"span"} variant={"Heading4"}>
        Heading4
      </Typography>
    </div>
  </>
));
story.add("Heading 5", () => (
  <>
    <div className={"mx-4"}>
      <Typography tag={"span"} variant={"Heading5"}>
        Heading5
      </Typography>
    </div>
  </>
));
story.add("Body", () => (
  <>
    <div className={"mx-4"}>
      <Typography tag={"span"} variant={"Body"}>
        Body
      </Typography>
    </div>
  </>
));
story.add("Body Small", () => (
  <>
    <div className={"mx-4"}>
      <Typography tag={"span"} variant={"BodySmall"}>
        BodySmall
      </Typography>
    </div>
  </>
));
story.add("Body Smallest", () => (
  <>
    <div className={"mx-4"}>
      <Typography tag={"span"} variant={"BodySmallest"}>
        BodySmallest
      </Typography>
    </div>
  </>
));

import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import Card from "./index";
import Typography from "components/Typography";

const story = storiesOf("Components | Card", module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo);

story.add("Main Flat", () => (
  <div className={"mx-4 mt-4"}>
    <Card>
      <Typography tag={"span"} variant={"Heading4"}>
        Flat Card{" "}
      </Typography>
    </Card>
  </div>
));

story.add("Elevation Level 1", () => (
  <div className={"mx-4 mt-4"}>
    <Card elevationLevel={1}>
      <Typography tag={"span"} variant={"Heading4"}>
        Level 1
      </Typography>
    </Card>
  </div>
));

story.add("Elevation Level 2", () => (
  <div className={"mx-4 mt-4"}>
    <Card elevationLevel={2}>
      <Typography tag={"span"} variant={"Heading4"}>
        Level 2
      </Typography>
    </Card>
  </div>
));

story.add("Elevation Level 3", () => (
  <div className={"mx-4 mt-4"}>
    <Card elevationLevel={3}>
      <Typography tag={"span"} variant={"Heading4"}>
        Level 3
      </Typography>
    </Card>
  </div>
));

story.add("Elevation Level 4", () => (
  <div className={"mx-4 mt-4"}>
    <Card elevationLevel={4}>
      <Typography tag={"span"} variant={"Heading4"}>
        Level 4
      </Typography>
    </Card>
  </div>
));

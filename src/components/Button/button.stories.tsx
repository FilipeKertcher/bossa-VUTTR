import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
// @ts-ignore

import { withInfo } from "@storybook/addon-info";

import Button from "components/Button";
import Typography from "components/Typography";
// @ts-ignore

import { Meta, Story, Preview, Props } from "@storybook/addon-docs/blocks";

const story = storiesOf("Components | Button", module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo);

story.add("Primary", () => (
  <div className={"mx-4 mt-4"}>
    <Typography tag={"span"} variant={"Heading5"}>
      Neutral
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button variant={"Primary"} intent={"Neutral"} onClick={() => {}}>
        Button Text
      </Button>
    </div>
    <Typography tag={"span"} variant={"Heading5"}>
      Success
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button onClick={() => {}} variant={"Primary"} intent={"Success"}>
        Button Text
      </Button>
    </div>
    <Typography tag={"span"} variant={"Heading5"}>
      Danger
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button onClick={() => {}} variant={"Primary"} intent={"Danger"}>
        Button Text
      </Button>
    </div>
  </div>
));

story.add("Secondary", () => (
  <div className={"mx-4 mt-4"}>
    <Typography tag={"span"} variant={"Heading5"}>
      Neutral
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button variant={"Secondary"} intent={"Neutral"} onClick={() => {}}>
        Button Text
      </Button>
    </div>
    <Typography tag={"span"} variant={"Heading5"}>
      Success
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button onClick={() => {}} variant={"Secondary"} intent={"Success"}>
        Button Text
      </Button>
    </div>
    <Typography tag={"span"} variant={"Heading5"}>
      Danger
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button onClick={() => {}} variant={"Secondary"} intent={"Danger"}>
        Button Text
      </Button>
    </div>
  </div>
));

story.add("Terciary", () => (
  <div className={"mx-4 mt-4"}>
    <Typography tag={"span"} variant={"Heading5"}>
      Neutral
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button variant={"Terciary"} intent={"Neutral"} onClick={() => {}}>
        Button Text
      </Button>
    </div>
    <Typography tag={"span"} variant={"Heading5"}>
      Success
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button onClick={() => {}} variant={"Terciary"} intent={"Success"}>
        Button Text
      </Button>
    </div>
    <Typography tag={"span"} variant={"Heading5"}>
      Danger
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button onClick={() => {}} variant={"Terciary"} intent={"Danger"}>
        Button Text
      </Button>
    </div>
  </div>
));

story.add("Quartiary", () => (
  <div className={"mx-4 mt-4"}>
    <Typography tag={"span"} variant={"Heading5"}>
      Neutral
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button variant={"Quartiary"} intent={"Neutral"} onClick={() => {}}>
        Button Text
      </Button>
    </div>
    <Typography tag={"span"} variant={"Heading5"}>
      Success
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button onClick={() => {}} variant={"Quartiary"} intent={"Success"}>
        Button Text
      </Button>
    </div>
    <Typography tag={"span"} variant={"Heading5"}>
      Danger
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Button onClick={() => {}} variant={"Quartiary"} intent={"Danger"}>
        Button Text
      </Button>
    </div>
  </div>
));

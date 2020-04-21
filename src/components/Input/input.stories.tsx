import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import Input from "components/Input";

const story = storiesOf("Components | Input", module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo);

story.add("Optional", () => (
  <div className={"mx-4 mt-4"}>
    <div style={{ marginTop: 10 }}>
      <Input
        value={""}
        onChange={() => {}}
        label="Label"
        placeholder="placeholder"
      />
    </div>

    <div style={{ marginTop: 10 }}>
      <Input
        value={"Filled"}
        onChange={() => {}}
        label="Label"
        placeholder="Nome"
      />
    </div>

    <div style={{ marginTop: 10 }}>
      <Input
        value={"Filled"}
        onChange={() => {}}
        errorMessage={"Error Message"}
        label="Filled but with wrong value"
        placeholder="Some wrong value"
      />
    </div>
    <div style={{ marginTop: 10 }}>
      <Input
        value={""}
        onChange={() => {}}
        errorMessage={"Error Message"}
        label="Not Filled and with wrong value"
        placeholder="No value here"
      />
    </div>
  </div>
));

story.add("Required", () => (
  <div className={"mx-4 mt-4"}>
    <div style={{ marginTop: 10 }}>
      <Input
        value={""}
        required
        onChange={() => {}}
        label="Label"
        placeholder="placeholder"
      />
    </div>

    <div style={{ marginTop: 10 }}>
      <Input
        value={"Filled"}
        required
        onChange={() => {}}
        label="Label"
        placeholder="Nome"
      />
    </div>

    <div style={{ marginTop: 10 }}>
      <Input
        value={"Filled"}
        onChange={() => {}}
        required
        errorMessage={"Error Message"}
        label="Filled but with wrong value"
        placeholder="Some wrong value"
      />
    </div>
    <div style={{ marginTop: 10 }}>
      <Input
        value={""}
        onChange={() => {}}
        required
        errorMessage={"Error Message"}
        label="Not Filled and with wrong value"
        placeholder="No value here"
      />
    </div>
  </div>
));

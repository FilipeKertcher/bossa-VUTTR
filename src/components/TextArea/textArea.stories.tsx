import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import TextArea from "./index";
import Typography from "components/Typography";

import "../../index.css";
const story = storiesOf("Components | TextArea", module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo);

story.add("Optional", () => (
  <>
    <div className={"mx-4"}>
      <TextArea
        onChange={() => {}}
        value=""
        placeholder={"placeholder"}
        label={"Not Filled"}
      />
    </div>
    <div className={"mx-4"}>
      <TextArea
        onChange={() => {}}
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        placeholder={"placeholder"}
        label={"Filled"}
      />
    </div>
    <div className={"mx-4"}>
      <TextArea
        onChange={() => {}}
        value=""
        placeholder={"placeholder"}
        label={"With Error and no value"}
        errorMessage={"this input does not have a value and it is not correct"}
      />
    </div>
    <div className={"mx-4"}>
      <TextArea
        onChange={() => {}}
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        placeholder={"placeholder"}
        label={"With Error"}
        errorMessage={"this input have a value but it is not correct"}
      />
    </div>
  </>
));

story.add("Required", () => (
  <>
    <div className={"mx-4"}>
      <TextArea
        onChange={() => {}}
        required
        value=""
        placeholder={"placeholder"}
        label={"Not Filled"}
      />
    </div>
    <div className={"mx-4"}>
      <TextArea
        required
        onChange={() => {}}
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        placeholder={"placeholder"}
        label={"Filled"}
      />
    </div>
    <div className={"mx-4"}>
      <TextArea
        required
        onChange={() => {}}
        value=""
        placeholder={"placeholder"}
        label={"With Error and no value"}
        errorMessage={"this input does not have a value and it is not correct"}
      />
    </div>
    <div className={"mx-4"}>
      <TextArea
        required
        onChange={() => {}}
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        placeholder={"placeholder"}
        label={"With Error"}
        errorMessage={"this input have a value but it is not correct"}
      />
    </div>
  </>
));

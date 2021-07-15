import React from "react";
import { storiesOf } from "@storybook/react";
import Progress from "./index";

const DefaultProgress = () => {
  return (
    <>
      <Progress percent={15} />
    </>
  );
};

storiesOf("Progress", module).add("Progress", DefaultProgress);

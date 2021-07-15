import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./index";

const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e, "===>");
};

const DefaultIcon = () => {
  return (
    <>
      <Icon icon="times" size="3x" />
    </>
  );
};

storiesOf("Icon", module).add("icon Description", DefaultIcon);

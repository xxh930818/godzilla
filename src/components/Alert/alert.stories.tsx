import React from "react";
import { storiesOf } from "@storybook/react";
import CheckCircleFilled from "@ant-design/icons/CheckCircleFilled";
import TextLoop from "react-text-loop";
import Alert from "./index";

const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e, "===>");
};

const DefaultAlert = () => {
  return (
    <>
      <h1>Godzilla 是一个React UI组件库</h1>

      <Alert type="success" message="success" />
      <br></br>
      <Alert type="info" message="info" />
      <br></br>
      <Alert type="warning" message="warning" />
      <br></br>
      <Alert type="error" message="error" />
    </>
  );
};

const DescriptionAlert = () => {
  return (
    <>
      <Alert
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        onClose={onClose}
      />
      <Alert
        description="你们好呀"
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="error"
        closable
        onClose={onClose}
      />
      <Alert
        description="你们好呀"
        message="hello world"
        type="success"
        closable
        showIcon
        onClose={onClose}
      />
      <Alert
        description="你们好呀"
        message="hello world"
        type="success"
        closable
        showIcon
        onClose={onClose}
        icon={<CheckCircleFilled />}
      />
      <Alert
        description="你们好呀"
        message={
          <TextLoop mask>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </TextLoop>
        }
        type="success"
        closable
        showIcon
        onClose={onClose}
        icon={<CheckCircleFilled />}
      />
    </>
  );
};

storiesOf("Alert", module)
  .add("alert Default", DefaultAlert)
  .add("alert Description", DescriptionAlert);

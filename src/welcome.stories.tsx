import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("起源", module).add(
  "Godzilla",
  () => {
    return (
      <>
        <h1>Godzilla 是一个React UI组件库</h1>
        {/* <h3>安装试试</h3>
        <code>npm install Godzilla --save</code> */}
        <img
          className="home-img"
          src="https://img.zcool.cn/community/012e835d06d3e1a801205e4bb2f362.jpg@1280w_1l_2o_100sh.jpg"
          alt=""
        />
      </>
    );
  },
  { info: { disable: true } }
);

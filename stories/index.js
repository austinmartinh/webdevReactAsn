import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import TopBar from "../src/components/topBar/index.js";
import SideBar from "../src/components/sideBar/index";
import LoginForm from "../src/components/loginForm/index"

storiesOf("Navigation/TopBar", module).add("default", () => {
  return <TopBar />;
});

storiesOf("Navigation/SideBar", module).add("default", () => {
    return <SideBar />;
  });

storiesOf("Forms/Login",module).add("default", () => {
    return <LoginForm />;
  });

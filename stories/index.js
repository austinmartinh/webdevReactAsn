import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import TopBar from "../src/components/topBar/index.js";
import SideBar from "../src/components/sideBar/index";
import LoginForm from "../src/components/loginForm/index";
import RegistrationForm from "../src/components/registrationForm/index";
import CreateForm from "../src/components/createForm/index";
import Post from "../src/components/post/index";
import Feed from "../src/components/feed/index";

const testPost= {}

var testPosts =[ 
  {...testPost},
    {...testPost},
    {...testPost}
]
storiesOf("Navigation/TopBar", module).add("default", () => {
  return <TopBar />;
});

storiesOf("Navigation/SideBar", module).add("default", () => {
    return <SideBar />;
  });

storiesOf("Forms/Login",module).add("default", () => {
    return <LoginForm />;
  });

storiesOf("Forms/Register",module).add("default", () => {
  return <RegistrationForm />;
});

storiesOf("Forms/CreatePost",module).add("default", () => {
  return <CreateForm />;
});

storiesOf("Content/Post",module).add("default", () => {
  return <Post />;
});

storiesOf("Content/Feed",module).add("default", () => {
  return <Feed posts={testPosts} />;
});



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

const testPost1= {id:1,user:"testUser",time:"1:45",body:"This is test post number 1"}
const testPost2= {id:2,user:"testUser2",time:"2:45",body:"This is test post number 2\n also contains a second line"}
const testPost3= {id:3,user:"testUser3",time:"3:45",body:"This is test post number 3\n also contains \na third line"}


var testPosts =[ 
  {...testPost1},
    {...testPost2},
    {...testPost3}
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
  return <Post post={testPost1}/>;
});

storiesOf("Content/Feed",module).add("default", () => {
  return <Feed posts={testPosts} />;
});



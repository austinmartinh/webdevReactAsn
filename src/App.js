import React from 'react';
import TopBar from "../src/components/topBar/index"
import "../src/components/topBar/topBar.css" 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'
import LoginForm from './components/loginForm';
import Feed from "./components/feed"
import RegistrationForm from "./components/registrationForm"
import SideBar from './components/sideBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateForm from './components/createForm';
import Landing from './components/landing';



function App() {
  return (
    <div>
      <Row>
      <div><TopBar /></div>
      </Row>
      <Row>
        <Col sm={3} m={3} lg={3}><SideBar /></Col>
        <Col>
        <Router>
          <Switch>
            <Route exact path="/"><Landing /></Route>
            <Route path="/login"><LoginForm /></Route>
            <Route path="/register"><RegistrationForm /></Route>
            {/* <Route path="/Feed"><Feed /></Route> */}
            <Route path ="create"><CreateForm /></Route>
          </Switch>
        </Router>
        </Col>
      </Row>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
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
  Route
} from "react-router-dom";
import CreateForm from './components/createForm';
import Landing from './components/landing';
import * as ROUTES from './routes'
import {withFirebase}  from './components/Firebase'


class App extends Component {

constructor(props){
   super(props);
   this.state = {
     authUser: null
   };
 };

componentDidMount() {

  this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
    authUser ? this.setState({authUser}) : this.setState({authUser: null});
  });
}

componentWillUnmount() {
  this.listener();
}



render() {

  return (
      <div>
        <Row>
          <div><TopBar authUser={this.state.authUser} /></div>
        </Row>
        <Row>
          <Col sm={2} m={2} lg={2}><SideBar /></Col>
          <Col>
          <Router>
            <Switch>
              <Route exact path={ROUTES.HOME}><Landing /></Route>
              <Route path={ROUTES.LOGIN}><LoginForm /></Route>
              <Route path={ROUTES.REGISTER}><RegistrationForm /></Route>
              <Route path={ROUTES.FEED}><Feed /></Route>
              <Route path ={ROUTES.CREATE}><CreateForm /></Route>
            </Switch>
          </Router>
          </Col>
        </Row>
      </div>
    );
  }

}


export default withFirebase(App);

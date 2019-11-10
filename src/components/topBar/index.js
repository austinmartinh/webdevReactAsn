import React, { Component, Fragment } from "react";
import {Navbar, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import SignOut from "../signOut";
import LoginForm from '../loginForm';
import Feed from "../feed"
import RegistrationForm from "../registrationForm"
import CreateForm from '../createForm';
import Landing from '../landing';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import * as ROUTES from '../../routes'


const initialState = {
  authUser:false
}

class TopBar extends Component {
  constructor(props){
    super(props)
    this.state = {...initialState}
  }

  render() {
    return (
      <Fragment>
          <Navbar bg="primary" variant="dark" fixed="top">
                <Navbar.Brand>Social Web</Navbar.Brand>
              <Nav className="mr-auto">
                <NavLink className="unselected" activeClassName="active" to="/feed">Feed</NavLink>
                <NavLink className="unselected" activeClassName="active" to="/create">Create</NavLink>
                <NavLink className="unselected" activeClassName="active" to="/delete">Delete</NavLink>
                </Nav>
              <Nav className="ml-auto">
                {/* <NavLink> <SignOut/> </NavLink> */}
                <NavLink className="unselected" activeClassName="active" to="/login">Login</NavLink>
                <NavLink className="unselected" activeClassName="active" to="/register">Register</NavLink>
              
              </Nav>
          </Navbar>

        <Switch>
          <Route exact path={ROUTES.HOME}><Landing /></Route>
          <Route path={ROUTES.LOGIN}><LoginForm /></Route>
          <Route path={ROUTES.REGISTER}><RegistrationForm /></Route>
          <Route path={ROUTES.FEED}><Feed /></Route>
          <Route path ={ROUTES.CREATE}><CreateForm /></Route>
        </Switch>


      </Fragment>
    );

  
                   
  }
}
export default TopBar;
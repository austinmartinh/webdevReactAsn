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
import './navigation.css'
import * as ROUTES from '../../routes'




class Navigation extends Component {


  render() {
    if (this.props.authUser)
    {
      return (
        <Fragment>
        <Navbar bg="primary" variant="dark" fixed="top">
              <Navbar.Brand >Social Web</Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink className="unselected" activeClassName="active" to={ROUTES.HOME}>Home</NavLink>
              <NavLink className="unselected" activeClassName="active" to={ROUTES.FEED}>Feed</NavLink>
              <NavLink className="unselected" activeClassName="active" to={ROUTES.CREATE}>Create</NavLink>
              </Nav>
            <Nav className="ml-auto">
              <SignOut />
            </Nav>
        </Navbar>

      <Switch>
        <Route exact path={ROUTES.HOME}><Landing authUser={this.props.authUser} /></Route>
        <Route path={ROUTES.LOGIN}><LoginForm /></Route>
        <Route path={ROUTES.REGISTER}><RegistrationForm /></Route>
        <Route path={ROUTES.FEED}><Feed /></Route>
        <Route path ={ROUTES.CREATE}><CreateForm /></Route>
      </Switch>


    </Fragment>
      );
    }


    return (
      <Fragment>
          <Navbar bg="primary" variant="dark" fixed="top">
                <Navbar.Brand>Social Web</Navbar.Brand>
                <Nav className="mr-auto">
                  <NavLink className="unselected" activeClassName="active" to={ROUTES.HOME}>Home</NavLink>
                </Nav>


              <Nav className="ml-auto">
        
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
export default Navigation;
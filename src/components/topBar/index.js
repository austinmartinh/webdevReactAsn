import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap'
import SignOut from "../signOut";

const initialState = {
  loggedIn:false
}

class TopBar extends Component {
  constructor(props){
    super(props)
    this.state = {...initialState}
  }

  render() {
    return (
          <Navbar bg="primary" variant="dark" fixed="top">
                <Navbar.Brand>Social Web</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Item><Nav.Link to="/feed">Feed</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link to="/create">Create</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link to="/delete">Delete</Nav.Link></Nav.Item>
                </Nav>
              <Nav className="ml-auto">
                <Nav.Item> <SignOut/> </Nav.Item>
                <Nav.Item><Nav.Link to="/login">Login</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link to="/register">Register</Nav.Link></Nav.Item>
              
              </Nav>
          </Navbar>
    );

  
                   
  }
}
export default TopBar;
import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap'
import SignOut from "../signOut";


class TopBar extends Component {
  render() {
    return (
          <Navbar bg="primary" variant="dark" fixed="top">
                <Navbar.Brand>Social Web</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Item><Nav.Link href="/feed">Feed</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/create">Create</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/delete">Delete</Nav.Link></Nav.Item>
                </Nav>
              <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
                <Nav.Item> <SignOut/> </Nav.Item>
              </Nav>
          </Navbar>
    );
  }
}
export default TopBar;
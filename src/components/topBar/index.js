import React, { Component } from "react";
// import './topBar.css';
import {Navbar, Nav} from 'react-bootstrap'


class TopBar extends Component {
  render() {
    return (
          <Navbar bg="primary" variant="dark" fixed="top">
                <Navbar.Brand>Social Web</Navbar.Brand>
              <Nav justify-content="end">
                <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/reg">Register</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/feed">Feed</Nav.Link></Nav.Item>
              </Nav>
          </Navbar>
    );
  }
}
export default TopBar;
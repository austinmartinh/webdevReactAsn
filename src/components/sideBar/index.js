import React, { Component } from "react";
import './sideBar.css';
import {Button, ButtonGroup} from 'react-bootstrap'

class SideBar extends Component {
    render() {
      return (
        <fragment>
          <div id="sidebarContainer">
            <nav id="sideBar">
                <div id="imageHolder">
                  <img alt="default-Img" class="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRug2UCLT7maYYq9wpvyhdwo_BPAFvqU_-qVg7RtcdYSbOZzC&s"></img>
                </div>
                <div id="leftNav">
                    <ButtonGroup vertical id="navButtonList">
                        <Button variant="secondary" href="/login">Login</Button>
                        <Button variant="secondary" href="/register">Register</Button>
                        <Button variant="secondary" href="/create">Post</Button>
                        <Button variant="secondary" href="/feed">Feed</Button>
                    </ButtonGroup>
                </div>
            </nav>
            </div>
        </fragment>
      );
    }
  }
  
  export default SideBar;

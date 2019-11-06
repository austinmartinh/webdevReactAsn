import React, { Component } from "react";
import './sideBar.css';
import {Button, ButtonGroup} from 'react-bootstrap'

class SideBar extends Component {
    render() {
      return (
        <fragment>
            <nav id="sideBar">
                <div id="imageHolder">
                  <img class="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRug2UCLT7maYYq9wpvyhdwo_BPAFvqU_-qVg7RtcdYSbOZzC&s"></img>
                </div>
                <div id="leftNav">
                    <ButtonGroup vertical>
                        <Button variant="secondary">Login</Button>
                        <Button variant="secondary">Register</Button>
                        <Button variant="secondary">Post</Button>
                        <Button variant="secondary">Feed</Button>
                    </ButtonGroup>
                </div>
            </nav>
        </fragment>
      );
    }
  }
  
  export default SideBar;

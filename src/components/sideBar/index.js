import React, { Component } from "react";
import './sideBar.css';


class SideBar extends Component {
    render() {
      return (
        <fragment>
            <nav id="sideBar">
                <div id="imageHolder">
                  <img class="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRug2UCLT7maYYq9wpvyhdwo_BPAFvqU_-qVg7RtcdYSbOZzC&s"></img>
                </div>
                <div id="leftNav">
                    <ul id="navButtonList">
                        <li><button class="btn btn-secondary">Login</button></li>
                        <li><button class="btn btn-secondary">Register</button></li>
                        <li><button class="btn btn-secondary">Post</button></li>
                        <li><button class="btn btn-secondary">Feed</button></li>
                    </ul>
                </div>
            </nav>
        </fragment>
      );
    }
  }
  
  export default SideBar;

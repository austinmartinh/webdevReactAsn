import React, { Component } from "react";
import './topBar.css';


class TopBar extends Component {
  render() {
    return (
      <fragment>
          <nav class="topBar">
              <div class="pageHeading">
                <h1 class ="headerText">Social Web</h1>
              </div>
          </nav>
      </fragment>
    );
  }
}

export default TopBar;

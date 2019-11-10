import React, { Component } from 'react';
import TopBar from "../src/components/topBar/index"
import "../src/components/topBar/topBar.css" 
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router} from "react-router-dom";
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
  console.log("The user is: " + this.state.authUser)
}

componentWillUnmount() {
  this.listener();
}



render() {

  return (
          <Router>
            <div><TopBar authUser={this.state.authUser} /></div>
          </Router>
  
    );
  }

}


export default withFirebase(App);

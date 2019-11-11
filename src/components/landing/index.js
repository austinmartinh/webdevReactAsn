import React, { Component, Fragment } from "react";
import './landing.css';
import {Col,Button, Jumbotron} from 'react-bootstrap';


class Landing extends Component{
    render() {
    if(this.props.authUser){
        return <Fragment>
        <Jumbotron>
            <h1>Welcome back to SocialWeb</h1>
            <p>Hope you have some interesting thoughts to share!</p>
         </Jumbotron>
     </Fragment>
        
    }
       return <Fragment>
           <Jumbotron>
               <h1>Welcome to SocialWeb</h1>
               <p>Login in or sign up to share your thoughts with the world!</p>
            </Jumbotron>
        </Fragment>
    }
}
export default Landing;
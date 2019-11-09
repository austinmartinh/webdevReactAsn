import React, { Component, Fragment } from "react";
import './landing.css';
import {Col,Button, Jumbotron} from 'react-bootstrap';


class Landing extends Component{
    render() {
       return <Fragment>
           <Jumbotron>
               <h1>Welcome to SocialWeb</h1>
               <p>It appears you're not logged in, so click below to sign up or login!</p>
               <div>
                    <Col><Button href="/register" variant="success">Register</Button></Col>
                    <Col><Button href="/login" variant="primary">Login</Button></Col>
               </div>
            </Jumbotron>
        </Fragment>
    }
}
export default Landing;
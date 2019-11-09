import React, { Component, Fragment } from "react";
import {Form,Button, Col} from 'react-bootstrap';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../../routes';
import { withRouter } from 'react-router-dom';
import {Card}  from "react-bootstrap";

const SignOut = ({firebase}) =>(
                <Button 
                    type="submit" 
                    variant="dark"
                    onClick={firebase.doSignOut}>Sign Out</Button>
        );

export default withFirebase(SignOut);

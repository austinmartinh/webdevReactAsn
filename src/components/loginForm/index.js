import React, { Component, Fragment } from "react";
import './loginForm.css';
import {Form,Button, Card} from 'react-bootstrap'

import {withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../../routes';

const intitialState = {
    email: '',
    password: ''
}

class LoginFormBase extends Component{
    
    constructor(props) {
        super(props);
        this.state ={...intitialState };
    }

    onSubmit = event => {
        const { email,password} = this.state;

        this.props.firebase
        .doSignInWithEmailAndPassword(email,password)
        .then(() => {
            this.setState({...intitialState});
            this.props.history.push(ROUTES.FEED);
        });
        event.preventDefault();
    };
    

    onChange = event => {
        this.setState({ [event.target.name]:event.target.value});
    };

    render() {
        const {email,password} = this.state;
        
        const emptyInput = password==='' ||email==='';

        return <Fragment>
            <Card class="loginBox">
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="usernameLogin">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email" 
                                type="email"
                                placeholder="email"
                                value={email}
                                onChange={this.onChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="passForLogin">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                name="password" 
                                type="password"
                                placeholder="*******"
                                value={password}
                                onChange={this.onChange}>
                            </Form.Control>
                        </Form.Group>
                       {/* <Form.Group>*/}
                             <Button type="submit">Login</Button>
                      {/*}  </Form.Group> */}
                    </Form>
                </Card.Body>
            </Card>
        </Fragment>
    }
    
}

const LoginForm = withRouter(withFirebase(LoginFormBase));

const LoginPanel= () =>
(
    <Fragment>
        <LoginForm />
    </Fragment>
);
export default LoginPanel;
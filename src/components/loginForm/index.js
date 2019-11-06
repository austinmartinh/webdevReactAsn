import React, { Component, Fragment } from "react";
import './loginForm.css';
import {Form,Button } from 'react-bootstrap'

class LoginForm extends Component{
    render() {
        return <fragment>
            <div class="loginBox">
            <Form>
                <Form.Group controlId="usernameLogin">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username"></Form.Control>
                </Form.Group>
                <Form.Group controlId="passForLogin">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="*******"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Login</Button>
                </Form.Group>

            </Form>
            </div>
        </fragment>
    }
}
export default LoginForm;
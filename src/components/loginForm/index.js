import React, { Component, Fragment } from "react";
import './loginForm.css';
import {Form,Button, Card} from 'react-bootstrap'

class LoginForm extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         userName='',
    //         password=''
    //     }
    // }

    render() {
        return <fragment>
            <Card class="loginBox">
            <Card.Header>Login</Card.Header>
            <Card.Body>
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
            </Card.Body>
            </Card>
        </fragment>
    }
}
export default LoginForm;
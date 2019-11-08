import React, { Component } from "react";
import './registrationForm.css';
import {Form,Button,Card, Col} from 'react-bootstrap'
import ROUTES from '../../routes'
const initialState={
    fname:"",
    sname:"",
    email:"",
    password:"",
    confirmedPassword:""
}


class RegistrationForm extends Component{
   
    constructor(props){
        super(props);
        this.state ={...initialState}
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value });
        console.log("State Updated");
    };

    onSubmit = event => {
        const {fname,sname,email,password} = this.state;
        
    }
    
    render() {
        const {
            fname,
            sname,
            email,
            password,
            confirmedPassword
        }
        
        return <Card>
            <Card.Header>Register</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Control 
                                        onChange={this.onChange} 
                                        name="fname"
                                        value={fname}
                                        placeholder="First Name">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Control 
                                        onChange={this.onChange} 
                                        name="sname"
                                        value={sname}
                                        placeholder="Surname">
                                    </Form.Control>
                                </Form.Group>
                        </Form.Row>  
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                onChange={this.onChange} 
                                name="email" 
                                value={email}
                                type="email" 
                                placeholder="email">
                            </Form.Control>
                        </Form.Group>
                        <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label>Select a Password</Form.Label>
                                    <Form.Control 
                                        onChange={this.onChange} 
                                        name="password"
                                        value={password} 
                                        placeholder="*********">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control 
                                        onChange={this.onChange} 
                                        name="confirmedPassword" 
                                        value={confirmedPassword}
                                        placeholder="*********">
                                    </Form.Control>
                                </Form.Group>
                        </Form.Row>
                                    <Button variant="danger" size="lg" href={ROUTES.HOME}>Cancel</Button>
                                    <Button variant="primary" size="lg" type="submit">Register</Button>
                    </Form>
                </Card.Body>
            </Card>

    }
}
export default RegistrationForm;
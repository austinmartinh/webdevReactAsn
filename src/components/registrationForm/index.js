import React, { Component } from "react";
import './registrationForm.css';
import {Form,Button,Card, Col} from 'react-bootstrap'

const initialState={
    fname:"",
    sname:"",
    email:"",
    password:"",
    confirmPassword:""
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
        return <Card>
            <Card.Header>Register</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Control 
                                        onChange={this.onChange} 
                                        id="fname" 
                                        placeholder="First Name">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Control 
                                        onChange={this.onChange} 
                                        id="sname"
                                        placeholder="Surname">
                                    </Form.Control>
                                </Form.Group>
                        </Form.Row>
                    
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                onChange={this.onChange} 
                                id="email" 
                                type="email" 
                                placeholder="email">
                            </Form.Control>
                        </Form.Group>

                        <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label>Select a Password</Form.Label>
                                    <Form.Control 
                                        onChange={this.onChange} 
                                        id="password" 
                                        placeholder="*********">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control 
                                        onChange={this.onChange} 
                                        id="confirmPassword" 
                                        placeholder="*********">
                                    </Form.Control>
                                </Form.Group>
                        </Form.Row>

                       
                        <div class="spaceButtonsOut">
                                    <Button variant="danger" size="lg">Cancel</Button>
                                    <Button variant="primary" size="lg">Register</Button>
                        </div>
              
                    </Form>
                </Card.Body>
            </Card>

    }
}
export default RegistrationForm;
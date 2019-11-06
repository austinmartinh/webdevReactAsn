import React, { Component } from "react";
import './registrationForm.css';
import {Form,Button,Card, Col} from 'react-bootstrap'

class RegistrationForm extends Component{
    render() {
        return <Card>
            <Card.Header>Register</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Row>
                                <Form.Group as={Col} id="regFormFirstName">
                                    <Form.Control placeholder="First Name"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} id="regFormSurame">
                                    <Form.Control placeholder="Surname"></Form.Control>
                                </Form.Group>
                        </Form.Row>
                    
                        <Form.Group controlId="regFormEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="email"></Form.Control>
                        </Form.Group>

                        <Form.Row>
                                <Form.Group as={Col} id="regFormPassword">
                                    <Form.Label>Select a Password</Form.Label>
                                    <Form.Control placeholder="*********"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} id="regFormConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control placeholder="*********"></Form.Control>
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
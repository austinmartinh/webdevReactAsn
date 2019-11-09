import React, { Component, Fragment } from "react";
import {Form,Button, Col} from 'react-bootstrap';
import './registrationForm.css';

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../routes';
// import { CardHeader, CardBody } from "react-bootstrap/Card";
import { withRouter } from 'react-router-dom';

const initialState={
    fname:"",
    sname:"",
    email:"",
    password:"",
    confirmedPassword:""
}


class RegistrationFormBase extends Component{
   
    constructor(props){
        super(props);
        this.state ={...initialState}
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value });
        console.log("State Updated");
    };

    onSubmit = event => {
        const {fname,sname,email,password} = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(fname,sname,email,password)
            .then(authUser => {
                this.setState({ ...initialState});
                this.props.history.push(ROUTES.FEED);
        });
        event.preventDefault();
    };
    
    render() {
        const {
            fname,
            sname,
            email,
            password,
            confirmedPassword} = this.state;
        
    return <Fragment>
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
                                    <Button variant="success" size="lg" type="submit">Register</Button>
                    </Form>
            </Fragment>
    };
};

const RegistrationForm = withRouter(withFirebase(RegistrationFormBase));

const RegistrationPanel = () => (
    <Fragment>
        {/* <Card>          
            <CardHeader>Register Below</CardHeader>
            <CardBody> */}
                <RegistrationForm />
            {/* </CardBody>    
        </Card> */}
    </Fragment>
);

export default RegistrationPanel;
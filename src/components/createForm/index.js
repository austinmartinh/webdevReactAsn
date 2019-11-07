import React, { Component, Fragment } from "react";
import './createForm.css';
import {Form,Button, Card, Col, Row, TextArea} from 'react-bootstrap'

class CreateForm extends Component{
    render() {
        return <Fragment>
            <Card class="createForm">
            <Card.Header>Create Post</Card.Header>
            <Card.Body>
              
                <Row>
                    <Col id="userName">{this.props.header.user}</Col>
                    <Col id="timeStamp">{this.props.header.time}</Col>
                </Row>
                <Row id="textArea">
                            <Form>
                                <Form.Control as={TextArea} placeholder="Whats on your mind?">
                                   
                                </Form.Control>
                            </Form>
                </Row>
                <Row>
                    <Col sm={4} m={4} lg ={4} id="radioButtons">
                        
                    </Col>
                    <Col id="buttonArea">
                        <Button variant="danger">Cancel</Button>
                        <Button variant="success">Post</Button>
                    </Col>
                </Row>
            </Card.Body>
            </Card>
        </Fragment>
    }
}
export default CreateForm;
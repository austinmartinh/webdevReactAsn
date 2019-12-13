import React, { Component, Fragment } from "react";
import './createForm.css';
import {Form,Button, Card, Col, Row} from 'react-bootstrap'
import * as ROUTES from '../../routes'
import axios from 'axios';
import * as api from '../../api'

const initialState ={
    postBody:'',
    username:''
}


class CreateForm extends Component{
    constructor(props){
        super(props);
        this.state={...initialState};
    }


    onSubmit = event => {
        event.preventDefault();
        const {username, postBody} = this.state;
        console.log(postBody)
        this.submitPost(username, postBody);
        this.setState({...initialState});
      
    };


    submitPost = async (username, postBody) => {
      
       await api.addPost(username, postBody)
   
    };

    
   

    onChange = event => {
        this.setState({[event.target.name]: event.target.value });
        console.log("State Updated");
    };

    render() {
        const {postBody} = this.state;
        const emptyInput = postBody ===''
        
        return <Fragment>
            <Card class="createForm">
            <Card.Header>Create Post</Card.Header>
            <Card.Body>
              
                <Row>
                    <Col id="userName">User: {this.props.username}</Col>
                </Row> 
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Control
                            name='postBody'
                            value={postBody}
                            onChange={this.onChange}
                            placeholder="Whats on your mind?">
                        </Form.Control>
                    </Form.Group>
                    <Button variant="danger">Cancel</Button>
                    <Button isdisabled={emptyInput} type="submit" variant="success">Post</Button>
                </Form>
               
            </Card.Body>
            </Card>
        </Fragment>
    }
}
export default CreateForm;
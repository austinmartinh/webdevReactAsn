import React, { Component, Fragment } from "react";
import './createForm.css';
import {Form,Button, Card, Col, Row} from 'react-bootstrap'
import * as ROUTES from '../../routes'
import axios from 'axios';

const initialState ={
    postBody:'',
    user:'',
    time:''
}


class CreateForm extends Component{
    constructor(props){
        super(props);
        this.state={...initialState};
    }

    submitPost(postBody, user, time) {
      
        axios.post(ROUTES.ALLPOSTS, {postBody:postBody,user:user, time:time
        },  { headers: { 'Content-Type': 'application/json' } }
        ).then(res => {
            console.log(res);
            console.log(res.data);
        }).catch(err => console.log(err));
    };

    
    onSubmit = event => {
        const {postBody,user,time} = this.state;

        event.preventDefault();
        this.submitPost(postBody,user,time);
        this.setState({...initialState});
        // this.props.history.push(ROUTES.FEED);
      
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
                    <Col id="userName">User{/*{this.props.user}*/}</Col>
                    <Col id="timeStamp">Time{/*{this.props.time}*/}</Col>
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
                    <Button isDisabled={emptyInput} type="submit" variant="success">Post</Button>
                </Form>
               
            </Card.Body>
            </Card>
        </Fragment>
    }
}
export default CreateForm;
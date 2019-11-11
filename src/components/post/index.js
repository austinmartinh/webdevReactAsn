import React, { Component, Fragment } from "react";
import './post.css';
import {Button, Card, Col, Row} from 'react-bootstrap'
import { MDBIcon } from 'mdbreact';
import axios from 'axios'




class Post extends Component{

    onClick= event => {
        axios.delete(`http://localhost:3333/posts/${this.props.postId}`,
                 {headers: { 'Content-Type': 'application/json' }})
                .then(res => console.log(res.data));
    }

    render() {
        return <Fragment>
            <Card>
            
            <Card.Body>
                <Row>
                    <Col xs={2} s={2} m={2} lg={2}>
                        <Row>
                            <div id="imgBox"></div>
                        </Row>
                        <Row>
                            <div><MDBIcon icon="angle-double-down" className="red-text" /></div>
                            <div><MDBIcon icon="angle-double-up" className="green-text"/></div>
                            <Button 
                                size="sm" 
                                type="submit" 
                                variant="danger"
                                onClick={this.onClick}>Delete</Button>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col id="username">
                            {this.props.user}
                            </Col>
                            <Col id="timestamp">
                            {this.props.postId}
                            </Col>
                        </Row>
                        <Row id="textArea">
                            {this.props.postBody}
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
            </Card>
        </Fragment>
    }
}
export default Post;
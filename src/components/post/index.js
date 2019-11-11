import React, { Component, Fragment } from "react";
import './post.css';
import {Button, Card, Col, Row} from 'react-bootstrap'



class Post extends Component{
    render() {
        return <Fragment>
            <Card class="loginBox">
            
            <Card.Body>
                <Row>
                    <Col xs={2} s={2} m={2} lg={2}>
                        <Row>
                            <div id="imgBox"></div>
                        </Row>
                        <Row>
                            <div>icon1</div>
                            <div>icon2</div>
                            <Button size="sm" variant="danger">Report</Button>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col id="username">
                            {this.props.user}
                            </Col>
                            <Col id="timestamp">
                            {this.props.time}
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
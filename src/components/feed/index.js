import React, { Component, Fragment } from "react";
import './feed.css';
import {Form,Button, Card} from 'react-bootstrap'
import Post from "../post/index"

class Feed extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         posts =[],
    //         userId=0
    //     }
    // }
    render() {
        var posts= this.props.posts.map(n =>(
            <Post key={n.id} post={n}/>
        ));
        return <fragment>
            <Card class="feed">
                <Card.Header>Posts</Card.Header>
                <Card.Body>
                   {posts}
                </Card.Body>
            </Card>
        </fragment>
    }
}
export default Feed;
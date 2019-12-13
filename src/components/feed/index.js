import React, { Component, Fragment } from "react";
import './feed.css';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import * as ROUTES from '../../routes'
import Post from "../post/index";
import * as api from '../../api';
import _ from 'lodash';


const initialState ={
    posts:[]
}

class Feed extends Component{


    constructor(props)
    {
        super(props);
        this.state= {...initialState}
    }

    getAllPosts(){
        api.getAll()
            .then(resp => {
                this.setState({posts:resp});
            }).catch(console.error);
    };

    upvotePost = (id) => {
        api.upvote(id)
        .then(resp=> {
            var upvotedPost = findById(this.state.posts, post => post.id ===id);
            console.log(upvotedPost.upvotes)
            upvotedPost.upvotes+=1;
        });
    }

    componentDidMount()
    {
     this.getAllPosts();
    }
    
    

    render() {
        const postObjects=this.state.posts.map(n => (
            <Post key={n._id} postBody={n.postBody} username={n.username} upvotes={n.upvotes} upvoteHandler={this.upvotePost} postId={n._id}/>
          ));

        return <Fragment>
  
        
            <Card class="feed">
                <Card.Header>Posts</Card.Header>
                <Card.Body>
                    {postObjects}
                </Card.Body>
            </Card>
        </Fragment>

    }
}
export default Feed;
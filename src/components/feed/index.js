import React, { Component } from "react";
import './feed.css';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import * as ROUTES from '../../routes'
import Post from "../post/index";


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
        axios.get(ROUTES.ALLPOSTS)
            .then(res =>{
                this.setState({posts:res.data});
            });
    }

    componentDidMount()
    {
    this.getAllPosts();
    
    

    }
    
    

    render() {
        const postObjects=this.state.posts.map(n => (
            <Post key={n.id} postBody={n.postBody} username={n.user} time={n.time}/>
          ));

        return <fragment>
  
        
            <Card class="feed">
                <Card.Header>Posts</Card.Header>
                
                <Card.Body>
                    {postObjects}
                </Card.Body>
            </Card>
        </fragment>

    }
}
export default Feed;
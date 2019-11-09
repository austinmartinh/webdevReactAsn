import React, { Component } from "react";
import './feed.css';
import {Card} from 'react-bootstrap'
import Post from "../post/index"
const testPost1= {id:1,user:"testUser",time:"1:45",body:"This is test post number 1"}
const testPost2= {id:2,user:"testUser2",time:"2:45",body:"This is test post number 2"}
const testPost3= {id:3,user:"testUser3",time:"3:45",body:"This is test post number 3"}


var testPosts =[ 
  {...testPost1},
    {...testPost2},
    {...testPost3}
]



class Feed extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         posts =[],
    //         userId=0
    //     }
    // }
    
    render() {
        // var posts= this.props.posts.map(n =>(
        //     <Post key={n.id} post={n}/>
        // ));

        var posts= testPosts.map(n =>(
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
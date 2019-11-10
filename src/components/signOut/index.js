import React from "react";
import {Button} from 'react-bootstrap';
import {withFirebase} from '../Firebase';


const SignOut = ({firebase}) =>(
                <Button 
                    type="submit" 
                    variant="dark"
                    onClick={firebase.doSignOut}>Sign Out</Button>
        );

export default withFirebase(SignOut);

import React from "react";
import {Button} from 'react-bootstrap';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../../routes'

const SignOut = ({firebase}) =>(
                <Button 
                    type="submit" 
                    variant="dark"
                    onClick={firebase.doSignOut}
                    href={ROUTES.HOME}>Sign Out</Button>
        );

export default withFirebase(SignOut);

import React, { useState } from "react";
import {Header} from '../components/'
import * as ROUTES from '../constants/routes'
import logo from '../logo.png'
import { getAuth, signOut } from "firebase/auth";
import {useHistory} from 'react-router-dom'
import { useAuthListner } from "../hooks";



export  function HeaderContainer({children}){
    const [error, setError] = useState('')
    const history = useHistory();

    const handleSignOut = (event)=>{
        console.log('signout button clicked')

        event.preventDefault();

        signOut(auth)
        .then(()=>{
            history.push(ROUTES.BROWSE )
            console.log('Signout successfull')

        }).catch((error)=>{
           
            setError(error.message);
            console.log('signout failed ' + error.message)
        })
    }
    const auth = getAuth();
    const {user} = useAuthListner();
    if(!user==null){
        console.log('Header container, a user is found and the email of the user is ==> ' +auth.currentUser.email)
    }else{
        console.log('Header container: No user found!')
    }
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt='Netflix' src={logo} />

                {user && <Header.ButtonLink onClick={handleSignOut} to={ROUTES.SIGN_OUT}>Sign Out</Header.ButtonLink> }
                {!user && <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> }
                {error&& <p>{error}</p>}
            </Header.Frame>
            {children}
        </Header>

    )
}
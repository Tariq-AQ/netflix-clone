import React, { useState } from "react";
import {Header} from '../components/'
import * as ROUTES from '../constants/routes'
import logo from '../logo.png'
import { getAuth, signOut } from "firebase/auth";
import {useHistory} from 'react-router-dom'
import { Form } from "../components";



export  function HeaderContainer({children}){
    const [error, setError] = useState('')
    const navigate = useHistory();

    const handleSignOut = (event)=>{
        console.log('signout button clicked')

        event.preventDefault();

        signOut(auth)
        .then(()=>{
            navigate(ROUTES.BROWSE )
            console.log('Signout successfull')


        }).catch((error)=>{
           
            setError(error.message);
            console.log('signout failed')
        })
    }
    const auth = getAuth();
    const user = auth.currentUser;
    // console.log(auth.currentUser.email)
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt='Netflix' src={logo} />

                {/* {user && 
                <Form onSubmit={handleSignOut}>
                     <Form.Submit  type='submit'>
                Sign Out
                    </Form.Submit>
                </Form>
                } */}

                {user && <Header.ButtonLink onClick={handleSignOut} to={ROUTES.SIGN_OUT}>Sign Out</Header.ButtonLink> }
                {!user && <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> }
                {/* {user && <Header.ButtonLink to={ROUTES.SIGN_OUT}>Sign Out</Header.ButtonLink> } */}
                {error&& <p>{error}</p>}
                {/* <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> */}
            </Header.Frame>
            {children}
        </Header>

    )
}
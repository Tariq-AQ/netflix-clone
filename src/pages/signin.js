import React,{useState, useContext} from "react";
import {FirebaseContext} from '../context/firebase'
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from '../constants/routes'
import {useHistory} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";





export default function SignIn(){
    const navigate = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();
    

    const isInvalid = password == '' || emailAddress == '';
    const handleSignIn = (event)=>{

        event.preventDefault();

        signInWithEmailAndPassword(auth, emailAddress, password)
        .then(()=>{
            navigate(ROUTES.BROWSE )

        }).catch((error)=>{
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        })
    }
    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error&& <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method='POST' >
                    <Form.Input 
                    placeholder='Email Address' 
                    value={emailAddress} 
                    onChange={({target})=>setEmailAddress(target.value)} />
                    <Form.Input 
                     type="password"
                    placeholder='Password'
                    autoComplete='off' 
                    value={password} 
                    onChange={({target})=>setPassword(target.value)} />

                    <Form.Submit disabled={isInvalid} type='submit'>
                        Sign In
                    </Form.Submit>
                    </Form.Base>
                    <Form.Text>New to Netflix? <Form.Link to='/signup'>Sign up now!</Form.Link></Form.Text>
                    <Form.TextSmall>
                        This page is protected by Goolge reCAPCHA to ensure you're not a bot.
                    </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}
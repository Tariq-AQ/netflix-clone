import React,{useState, useContext} from "react";
import {FirebaseContext} from '../context/firebase'
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from '../constants/routes'
import {useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





export default function SignUp(){
    const navigate = useNavigate();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();
    

    const isInvalid = password == '' || emailAddress == '';
    const handleSignUp = (event)=>{

        event.preventDefault();

     createUserWithEmailAndPassword(auth, emailAddress, password, firstname)
        .then((result)=>{
           result.user.updateProfile({displayName: firstname,
        photoURL: Math.floor(Math.random()*5)+1})

        }).then(()=>{
            navigate(ROUTES.BROWSE);
        }).catch((error)=>{
            setEmailAddress('');
            setPassword('');
            setFirstname('');
            setError(error.message);
        })
    }
    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error&& <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignUp} method='POST' >
                    <Form.Input 
                    placeholder='First Name' 
                    value={firstname} 
                    onChange={({target})=>setFirstname(target.value)} />
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
                        Sign Up
                    </Form.Submit>
                    </Form.Base>
                    <Form.Text>Already a member? <Form.Link to='/signin'>Sign in now!</Form.Link></Form.Text>
                    <Form.TextSmall>
                        This page is protected by Goolge reCAPCHA to ensure you're not a bot.
                    </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}
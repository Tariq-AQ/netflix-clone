import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import {Home, SignIn, SignUp, Browse} from './pages/index';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListner } from './hooks';
import * as ROUTES from './constants/routes'




export default function App() {
  const {user} = useAuthListner();

  // const {user} =useAuthListner();
  // const user = null;
 if(user){

console.log(user)
} else{
  console.log('app.js: no user found!')
}
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
    
   
  );
}


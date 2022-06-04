import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Home, SignIn, SignUp, Browse} from './pages/index';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
    
   
  );
}


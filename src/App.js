import React from 'react';
import { FaqsContainer } from './components/faq';
import { FooterContainer } from './containers/footer';
import JumbotronContainer from './containers/jumbotron';

export default function App() {
  return (
    <>
    <JumbotronContainer/>
    <FaqsContainer/>
    <FooterContainer/>
    </>
   
  );
}


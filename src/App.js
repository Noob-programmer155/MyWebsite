import React from 'react';
import Background from './component/background';
import Section1 from './component/section1';
import Section2 from './component/section2';
import Section3 from './component/section3';
import Section4 from './component/section4';
import Contact from './component/contact';
import ApplicationLetter from './component/lettereditor';
import { Route, Routes } from 'react-router';
import Section5 from './component/section5';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Background/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Contact/>
        </>
      }>
      </Route>
      <Route 
        // loader={({params}) => {params.data}}
        // action={({params}) => {params.data}}
        path='/application-letter/:data'
        element={<ApplicationLetter/>}/>
    </Routes>
  );
}

export default App;

import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Background from './component/background';
import Section1 from './component/section1';
import Section2 from './component/section2';
import Section3 from './component/section3';
import Section4 from './component/section4';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Background/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </>
  );
}

export default App;

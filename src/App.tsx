import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax' 
import { SkillsSection } from './components/SkillsSection';


function App() { 

  const parallaxRef = useRef<IParallax>(null!)

  return (
    <div style={{width:'100%', height:'100%', background:'#253535'}} data-testid={"app"} className="App">
      <Parallax ref={parallaxRef} data-testid={"pageContainer"} pages={7}>
        {/* Personal history section */}
        <ParallaxLayer offset={0} speed={1} data-testid={"page1"}>Early Life</ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={1} data-testid={"page2"}>Tech School</ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} data-testid={"page3"}>Software Test Analyst</ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={1} data-testid={"page4"}>Junior Software Engineer</ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} data-testid={"page5"}>Database Maintenance Technician</ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={1} data-testid={"page6"}>Lead Database Maintenance Technician</ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} data-testid={"page7"}>NCOIC, Platform One Cloud Development</ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={1} data-testid={"page8"}>Lead Front End Engineer, Hyve</ParallaxLayer>
        {/* Personal history section */}

        
        {/* skills section */}
        <ParallaxLayer offset={4} speed={1} data-testid={"page1"}>
          <SkillsSection/>
        </ParallaxLayer>

        {/* skills section */}



      </Parallax>
    </div>
  );
}

export default App;

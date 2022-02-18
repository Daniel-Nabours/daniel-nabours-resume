import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
 


function App() {

  

  const parallaxRef = useRef<IParallax>(null!)

  return (
    <div style={{width:'100%', height:'100%', background:'#253535'}} data-testid={"app"} className="App">
      <Parallax ref={parallaxRef} data-testid={"pageContainer"} pages={5}>
        <ParallaxLayer style={{ backgroundColor: 'green', backgroundSize: 'cover',}} offset={0.5} speed={1} data-testid={"page1"}>hello 1</ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} data-testid={"page2"}>hello 2</ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={1} data-testid={"page3"}>hello 3</ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} data-testid={"page4"}>hello 4</ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={1} data-testid={"page5"}>hello 5</ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

import { ParallaxLayer } from "@react-spring/parallax"
import cloud from '../res/cloud.svg'

export const CloudSprites = () => {
    {/* clouds */ }
   return (<>
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} style={{ opacity: 0.1 }}>
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={-0.1} style={{ opacity: 0.4 }}>
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.4} style={{ opacity: 0.6 }}>
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={0.8} style={{ opacity: 0.1 }}>
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={0.5} style={{ opacity: 0.1 }}>
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={8} speed={0.2} style={{ opacity: 0.2 }}>
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={9} speed={-0.1} style={{ opacity: 0.4 }}>
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={10} speed={0.4} style={{ opacity: 0.6 }}>
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img className="floating" alt="a sprite of a bouncing cloud" src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>
    </>)
}
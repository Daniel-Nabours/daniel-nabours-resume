import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { SkillsSection } from './components/SkillsSection';
import stars from './res/stars.svg'
import awacs from './res/awacs.svg'
import cloud from './res/cloud.svg'

const sta = ["Wrote, analyzed, maintained, and executed test plans for the E - 3 Sentry inline-block 30 / 35 software systems."]
const jse = ["Tested, maintained, and developed software tools for the E-3 Sentry inline-block 40/45 ground systems."]
const dbm = [
  "Maintained, updated, and troubleshot 5 mission-critical AWACS databases",
  "Maintained deployability status for enabler forces in SWA",
  "Trained and mentored new database technicians",
  "Developed resources and curriculums to reduce new hire spin-up time."
]
const ldbm = [
  "Collaborated with electronic intelligence community on Signal Identification",
  "System failure analysis and prevention",
  "Menial process automation."
]
const ncoic = [
  "Lead training and development of cloud-based software systems in collaboration with Platform One",
  "Provided software factory services to the AOC under discretion of the commander",
  "Established initial processes and created Agile workplace culture and infrastructure."
]
const hyve = [
  "Solved complex and time consuming issues related to the Hyve front end",
  "Worked with designers to create and validate Figma designs for new features",
  "Mentored junior developers",
  "Maintained and managed cloud CI/CD pipeline."
]


function App() {

  const music = React.useMemo(() => new Audio(`/lofi.mp3`), [])
  const [playing, setPlaying] = React.useState(false)
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const parallaxRef = useRef<IParallax>(null!)

  function playMusic() {
    if (!playing) {
      music.play()
      setPlaying(true)
    }
  }
  window.addEventListener('', playMusic)

  function* navigate(i: number) {
    yield i;
    yield i + 2;
    yield i + 4;
    yield i + 6;
    yield i + 8;
    yield i + 10;
    yield 13;
    yield 14;
  }

  const page = navigate(1.67)

  return (
    <div className="background" >
      <Parallax onClick={() => {
        playMusic();
        let a = page.next()
        if (a.value) parallaxRef.current.scrollTo(a.value)
      }} ref={parallaxRef} data-testid={"pageContainer"} style={{ backgroundImage: `url(${stars})` }} pages={50}>

        {/* Personal history section */}

        {/* header */}
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className="section-header">Work Experience</p> 
          <h6><br/>(click or scroll)</h6>
        </ParallaxLayer>

        {/* awacs svg */}
        <ParallaxLayer offset={3} factor={1} sticky={{ start: 1, end: 12 }} speed={-1.2} style={{ bottom: '80%', opacity: 0.4 }}>
          <img alt="An e-3 sentry in the sky" className='floating' src={awacs} />
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={1} sticky={{ start: 1, end: 2 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky">
            <p>Software Test Analyst</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} sticky={{ start: 1.33, end: 1.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax">
            {sta.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>


        <ParallaxLayer  offset={2} speed={1} sticky={{ start: 3, end: 4 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky ">
            <p>Junior Software Engineer</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} sticky={{ start: 3.33, end: 3.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax">
            {jse.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer  offset={3} speed={1} sticky={{ start: 5, end: 6 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky">
            <p>Database Maintenance Technician</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} sticky={{ start: 5.33, end: 5.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax sticky">
            {dbm.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer  offset={4} speed={1} sticky={{ start: 7, end: 8 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky">
            <p>Lead Database Maintenance Technician</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1} sticky={{ start: 7.33, end: 7.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax">
            {ldbm.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer  offset={5} speed={1} sticky={{ start: 9, end: 10 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky">
            <p>NCOIC, Cloud Development</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1} sticky={{ start: 9.33, end: 9.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax">
            {ncoic.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer  offset={6} speed={1} sticky={{ start: 11, end: 12 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky">
            <p>Front End Lead, Hyve</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={1} sticky={{ start: 11.33, end: 11.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax sticky">
            {hyve.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>
        {/* Personal history section */}


        {/* skills section */}

        <ParallaxLayer offset={13} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className="section-header">Skills, Languages, and Technologies</p>
        </ParallaxLayer>

        <ParallaxLayer offset={14} sticky={{ start: 14, end: 16 }} speed={1} data-testid={"skillsPage"}>
          <SkillsSection />
        </ParallaxLayer>

        {/* skills section */}

        {/* clouds */}
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


      </Parallax>
    </div>
  );
}

export default App;

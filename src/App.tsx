import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import stars from './res/stars.svg'
import awacs from './res/awacs.svg'
import logo from './res/hyve.svg'
import { CloudSprites } from './components/CloudSprites';
import { SkillsSection } from './components/SkillsSection';
import { Socials } from './components/Socials';
import PlayButton from './util/PlayButton';

const sta = [
  "In my first squadron they had a policy of not throwing the new programmers into dev positions, we all had to start out as legacy system testing.",
  "I wrote, analyzed, maintained, and executed test plans for the E-3 Sentry block 30/35 software systems.",
]
const jse = [
  "This was my first professional development position. We used an antiquated, document-driven process.",
  "I tested, maintained, and developed software tools for the E-3 Sentry block 40/45 ground systems.",
  "I mostly worked on a data translation tool called TACT, and a process automation tool called TRON. Both written in C#."
]
const dbm = [
  "I wanted to deploy overseas, but programmers dont get to do that. If I wanted to go, I had to go as a different job.",
  "To that end, I spent 8 hours a day in a locked, classified room studying everything I could for 3 months.",
  "It was here that I gained a solid understanding of inter-system architectures, scripting, databases, and protocols.",
  "My responsibilities were to maintain updates for all the mission-critical AWACS databases.",
]
const ldbm = [
  "I became so well versed in the AWACS mission system that I was designated a SME and given the responsibility of collaborating with electronic intelligence community on Signal Identification.",
  "I was also in charge of system failure analysis/prevention, and menial process automation.",
  "During this time I did deploy to the middle east for about 6 months between 09/2019 and 03/2020."
]
const ncoic = [
  "By the time I returned from deployment I was a few short months from becoming a Staff Sergeant (E-5).",
  "Our squadron was modernizing and I was put in charge of standing up a team for cloud-based development in collaboration with a contractor called Platform One.",
  "This new team provided software factory services to the AOC under discretion of the commander.",
  "I had to established the initial processes, seek training opportunities, and configure infrastructure to support the new ways of doing things."
]
const hyve = [
  "It wasn't until my second duty station that I got a taste of what real industry looked like.",
  "I was onboarded as a junior dev but showcased enough talent and motivation to move up very quickly. After 4 months I was designated as a Sr. developer.",
  "The project was an enterprise-scale SPA tactical chat application for the DoD, hosted on Kessel Run's ADCP platform.",
  "Working with our backend lead eng, Cole Peabody, as well as our team of 6 junior devs and interns, we delivered a 1.0 to Kessel run after 10 months."
]


function App() {
 
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const parallaxRef = useRef<IParallax>(null!) 

  const navigate = () => { 
    let page = Math.round((parallaxRef.current.current / window.innerHeight))  
    if (page === 0) page += 1
    else if (page >= 1 && page <= 11) page += 1.67 
    else if (page > 11 && page <= 15) page +=2
    parallaxRef.current.scrollTo(page)
  }

  return (
    <div className="background" > 
      <Parallax
        onClick={() => { 
        navigate();
        }} ref={parallaxRef} style={{ backgroundImage: `url(${stars})` }} pages={21}> 

        {/* header */}
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className="section-header">Daniel Nabours
            <p style={{ fontSize: 28 }}>Software Engineer, Tech geek, Veteran.
              <p style={{ fontSize: 14 }}>Click or scroll to navigate</p>
            </p>
          </p>
        </ParallaxLayer>
        {/* header */}
        <ParallaxLayer offset={1} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className="section-header">Work Experience</p>
        </ParallaxLayer>
        {/* awacs svg */}
        <ParallaxLayer offset={4} factor={1} sticky={{ start: 2, end: 11 }} speed={-1.2} style={{ opacity: 0.4, width:"40vw", height:"20vh" }}>
          <img alt="An e-3 sentry in the sky" className='floating' src={awacs} />
        </ParallaxLayer>
        {/* hyve svg */}
        <ParallaxLayer offset={8} factor={1} sticky={{ start: 12, end: 13 }} speed={-1.2} style={{ bottom: '80%', opacity: 0.4 }}>
          <img alt="7 teal hexagons arranged in a beehive patter" src={logo} />
        </ParallaxLayer>

        {/* Personal history section */}
        <ParallaxLayer offset={2} speed={1} sticky={{ start: 2, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky">
            <p>Software Test Analyst</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} sticky={{ start: 2.33, end: 2.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax">
            {sta.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} sticky={{ start: 4, end: 5 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky ">
            <p>Junior Software Engineer</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} sticky={{ start: 4.33, end: 4.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax">
            {jse.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1} sticky={{ start: 6, end: 7 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky">
            <p>Database Maintenance Technician</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1} sticky={{ start: 6.33, end: 6.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax sticky">
            {dbm.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1} sticky={{ start: 8, end: 9 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky">
            <p>Lead Database Maintenance Technician</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1} sticky={{ start: 8.33, end: 8.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax">
            {ldbm.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={1} sticky={{ start: 10, end: 11 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky">
            <p>NCOIC, Cloud Development</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={1} sticky={{ start: 10.33, end: 10.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax">
            {ncoic.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={1} sticky={{ start: 12, end: 13 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="blurb parallax sticky">
            <p>Front End Lead, Hyve</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={1} sticky={{ start: 12.33, end: 12.67 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="blurb parallax sticky">
            {hyve.map(s => (<p key={s}>{s}</p>))}
          </div>
        </ParallaxLayer>
        <CloudSprites />
        {/* Personal history section */}


        {/* skills section */}
        <ParallaxLayer offset={15} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className="section-header">Skills, Languages, and Technologies</p>
        </ParallaxLayer>
        <ParallaxLayer offset={16} sticky={{ start: 16, end: 18 }} speed={1}>
          <SkillsSection />
        </ParallaxLayer>
        {/* skills section */}

        <ParallaxLayer offset={0} sticky={{ start: 0, end: 50 }} style={{ height: 100, width: "100%", display:"flex" }} speed={0} >
          <div style={{position:'absolute', left:5, top:5}}><Socials /></div> 
          <div style={{position:'absolute', right:15, top:15}}><PlayButton /></div>
        </ParallaxLayer>
        <ParallaxLayer offset={20} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p style={{fontSize:20}}>Thank you for taking the time to look at my website, check the top left for links to my socials.</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

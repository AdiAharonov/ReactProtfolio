import React from 'react';
import { NavBar } from './cmps/NavBar';
import { LandingPage } from './cmps/LandingPage';
import { Social } from './cmps/Social';
import { Mail } from './cmps/Mail';
import { About } from './cmps/About';
import { Skills } from './cmps/Skills';
import { Work } from './cmps/Work';
import { Contact } from './cmps/Contact';
import { Footer } from './cmps/Footer';
import { CircuitAnimationCmp } from './cmps/StyledCmps/CircuitAnimationCmp';
import { SpaceBgSvg } from './cmps/StyledCmps/SpaceBgSvg';


function App() {
  return (
    <div className="home-page" >
     {/* <NavBar /> */}
     {/* <div className="bg-circuit-animation">

     <CircuitAnimationCmp width={window.innerWidth * 3} />
     </div> */}
     <SpaceBgSvg />
    
     <LandingPage />
     <About />
     <Skills />
     <Work />
     <Contact />
     {/* <Social />
     <Mail />

     
     <Footer /> */}
     

    </div>
  );
}

export default App;

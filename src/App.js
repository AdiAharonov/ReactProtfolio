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


function App() {
  return (
    <div className="home-page">
     <NavBar />
     <LandingPage />
     <Social />
     <Mail />

     <About />
     <Skills />
     <Work />
     <Contact />
     
     <Footer />
     

    </div>
  );
}

export default App;

import React from 'react';
import { NavBar } from './cmps/NavBar';
import { LandingPage } from './cmps/LandingPage';
import { Social } from './cmps/Social';
import { Mail } from './cmps/Mail';
import { About } from './cmps/About';

function App() {
  return (
    <div className="home-page">
     <NavBar />
     <LandingPage />
     <Social />
     <Mail />

     <About />

    </div>
  );
}

export default App;

import React from 'react';
import Typical from 'react-typical';

export function LandingPage() {
  return (
    <div className="landing">
      <p className="opening">Hi, my name is</p>
      <h1 className="name">Adi Aharonov.</h1>
      <h1>I build things for the web.</h1>
      <p className="sentence">
        I'm a Full-Stack web developer specializing in
      building (and occasionally designing) exceptional websites, applications, and everything in between.
        I like to keep my code

        <Typical
        steps={[' clean.', 1000, ' short.', 1000, '  reusable.', 1000]}
        loop={Infinity}
        wrapper="span"
      />
      </p>
      
      <button className="resume-btn">Get In Touch</button>
    </div>
  );
}

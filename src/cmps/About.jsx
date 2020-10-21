import React, {useState} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import RealImage  from "../assets/images/about/real.png";
import AnimatedImage  from "../assets/images/about/animated.png";

export  function About() {
    


    

    return (
        <div className="about">
            
            
          {/* <img className="my-image" src={FormalImage} alt="formal" /> */}

          

          <div className="img-container">
          <img className="real-img" src={RealImage} alt="" />
          <img className="animated-img" src={AnimatedImage} alt="" />
          </div>
           
           <div className="content">
           <h3>Who is this guy?</h3>
           <h4>My motto: <span>"Just tell me what you want, I'll find the best way to do it."</span></h4>
            <p>Front-end Web Developer with proficiency in writing single-page-applications using the latest WEB technologies (Specialist in react, but familiar with angular and vue as well).
Coding Academy - 640 hours of an intensive coding bootcamp that qualifies Full-Stack developers. 1+ years experience working with JavaScript Html Css (open source projects). 

Highly motivated tech enthusiast, Active in various web developing communities. 
Always up to date with the latest technologies. Passionate about writing clean and reusable code and experience with testing.

            </p>
            </div>

            <button className="center-btn" onClick={() => window.scrollTo(window.innerWidth, window.innerHeight)}>Continue Exploring</button>
            
        </div>
    )
}

import React from 'react'
import { BlackHole } from './StyledCmps/BlackHole';


export function Skills() {
    return (
        <div className="skills" name="skills">
        <BlackHole w={300} h={300} icons={[]} p={"Proffeciance"}  maxorbit={20}/>
        
        
             {/* <h2>What i can bring to the table?</h2>
             <section className="skill-groups">
             <div className="skill-group">
             <h2>Human Assets</h2>
             <div className="skill-container">
                 <p>Capability to learn any needed tech to solve a problem/find a solution</p>
                 <p>Always looking where to improve</p>
                 <p>Great team player but also can push to the right direction when needed</p>
                 <p>Deep understanding of the web development world</p>
                 <p>Exceptional researcher</p>
             </div>
             </div>
             <div className="skill-group">
                 <h2>Technical Skills</h2>
                 <div className="skill-container">
                 <p>Specializing with React & Typescript but also comfortable around all Front-end frameworks</p>
                 <p>Strong Html, Css, Javascript skills</p>
                 <p>Familiarity in Back-end enviorment (Node.js, express, mongoDb and many more)</p>
                 <p>Have background in testing</p>
                 <p>Have Expirience with large scale projects </p>
                 </div>
             </div>
             <div className="skill-group">
             <h2>Extras</h2>
             <div className="skill-container">
                <p>Alot of expirience with git & npm</p>
                <p>Pixel Perfect developing</p>
                <p>MVC based order</p>
             </div>
             </div>
             </section> */}
             <button className="center-btn" onClick={() => window.scrollTo(window.innerWidth, window.innerHeight)} >Continue Exploring</button>
        </div>
    )
}

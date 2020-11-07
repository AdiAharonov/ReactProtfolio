import React from 'react'
import { BlackHole } from './StyledCmps/BlackHole';
import { ReactComponent as G1 } from '../assets/images/skills/g1.svg';
import { ReactComponent as G2 } from '../assets/images/skills/g2.svg';
import { ReactComponent as G3 } from '../assets/images/skills/g3.svg';
import { ReactComponent as ArrowBtn } from '../assets/images/arrow-btn.svg';


export function Skills({mode}) {
    return (
        <div className="skills" >
        {/* <BlackHole w={300} h={300} icons={[]} p={"Proffeciance"}  maxorbit={20}/> */}
        
        <div className="header">
        <h2>What can I do?</h2>
        <p>My best qualities are being a quick learner and a sharp problem solver ( aside from having a great sense of humor, of course).
            On the technical side i've spent a lot of time, money and tears to get comfortable with many technologies and work environments,
            from any popular framework in the front-end field (React ❤, Vue, Angular) to the far back-end with node.js, mongoDb, SQL, PHP.
        </p>
        </div>

        <div className="left skill"><G1 stroke={mode ? "#fff" : "#222"} fill={mode ? "#fff" : "#222"}/>
        Big & Complex Systems</div>
        <div className="middle skill"><G2 stroke={mode ? "#fff" : "#222"} fill={mode ? "#fff" : "#222"}/>
        Friendly UI/UX</div>
        <div className="right skill"><G3 stroke={mode ? "#fff" : "#222"} fill={mode ? "#fff" : "#222"}/>
        Interactive & Dynamic</div>
        
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
             <div className="center-btn">
    <button  style={mode ? {color: "#fff"} : {color: "#222"}} onClick={() => window.scrollTo(window.innerWidth, window.innerHeight)}>{mode ? "Explore" : "Back"}</button>
            <ArrowBtn fill={mode ? "#fff" : "#222"}/>
            </div>
        </div>
    )
}

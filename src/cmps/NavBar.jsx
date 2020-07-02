import React from 'react'
import Logo from '../assets/images/logo.svg'
export function NavBar() {
    return (
        <nav className="navbar">
          <img className="logo" src={Logo} /> 

        <div className="navbar-content-box">
            <button className="navbar-btn"><span className="navbar-num">01. </span>About</button>
            <button className="navbar-btn"><span className="navbar-num">02. </span>Skills</button>
            <button className="navbar-btn"><span className="navbar-num">03. </span>Work</button>
            <button className="navbar-btn"><span className="navbar-num">04. </span>Contact</button>
            <button className="resume-btn">Resume</button>
        </div> 
        </nav>
    )
}

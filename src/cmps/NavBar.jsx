import React from 'react'

export function NavBar() {
    return (
        <nav className="navbar">
          <h2 className="logo">Logo</h2> 

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

import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <img className="logo" src={Logo} alt="" />
{/* 
      <div className="hamburger">
        <input type="checkbox" onClick={toggle} />

        <span></span>
        <span></span>
        <span></span>
      </div> */}

      <div className={isOpen ? 'navbar-content-box' : 'navbar-content-box close'} >
        <Link
          to="about"
          smooth={true}
          offset={50}
          duration={500}
          className="navbar-btn"
        >
          <span className="navbar-num">01. </span>About
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={50}
          duration={500}
          className="navbar-btn"
        >
          <span className="navbar-num">02. </span>Skills
        </Link>
        <Link
          to="work"
          smooth={true}
          offset={50}
          duration={500}
          className="navbar-btn"
        >
          <span className="navbar-num">03. </span>Work
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={50}
          duration={500}
          className="navbar-btn"
        >
          <span className="navbar-num">04. </span>Contact
        </Link>
        <a
          download="Adi-Aharonov-CV.pdf"
          href="resume/CV.pdf"
          className="resume-btn"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

import React from 'react'
import { Astroid } from "./StyledCmps/Astroid";

export function Contact() {
    const onClick = () => {
        window.location.href = `mailto:adi.ahronov@gmail.com`;
    }
    return (
        <div className="contact" name="contact">
             <button onClick={() => window.scrollTo(window.innerWidth, window.innerHeight)} style={{position: 'absolute',top: '50%', left: '20%', width: '300px', zIndex: '9999'}}>To the mainframe</button>
             <h3><span className="clr3">04. </span>Get In Touch!</h3>
             <div className="contact-content">
             <p> Currently looking for any new opportunities, my inbox is always open.</p>
             <button onClick={onClick} className="resume-btn">Contact Me</button>
             </div>
             <Astroid />
        </div>
    )
}

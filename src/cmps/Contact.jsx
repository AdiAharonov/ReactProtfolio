import React from 'react'

export function Contact() {
    const onClick = () => {
        window.location.href = `mailto:adi.ahronov@gmail.com`;
    }
    return (
        <div className="contact" name="contact">
             <h3><span className="clr3">04. </span>Get In Touch!</h3>
             <div className="contact-content">
             <p> Currently looking for any new opportunities, my inbox is always open.</p>
             <button onClick={onClick} className="resume-btn">Contact Me</button>
             </div>
        </div>
    )
}

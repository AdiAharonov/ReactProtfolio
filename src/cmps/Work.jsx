import React from 'react'

export function Work() {
    return (
        <div className="work" name="work">
             <h3><span className="clr3">03. </span>Some Things I've Built</h3>
             <div className="proj start">
                 <div className="proj-info">
                 <h2>Venyou</h2>
                 <p>Inspired by Meetup, a full-scale marketplace web application.
based on MERN (MongoDB / Express / React / Node.js),
includes: 
<br/>
-Sign in with Facebook/Google
<br/>
-Socket for live comments
<br/>
-Notification system
<br/>
-Google MAPS
<br/>
and many more features
</p>
                 <div className="proj-tech">
                     <h4>MongoDB</h4>
                     <h4>Express.js</h4>
                     <h4>React.js</h4>
                     <h4>Node.js</h4>
                 </div>
                 </div>
                 <a href="https://venyouformisterbit.herokuapp.com/"><div className="proj-image"></div></a>
             </div>
             <div className="proj end"></div>
             <div className="proj start"></div>
        </div>
    )
}

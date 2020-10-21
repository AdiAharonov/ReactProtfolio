import React, {useState} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { ReactComponent as Image } from "../assets/images/formalimage.jpg";

export  function About() {
    const [active, setActive] = useState(false)
    const [animate, setAnimation] = useState('work')


    useScrollPosition(({prevPos, currPos}) => {
        console.log(prevPos, currPos)
        if (currPos.x * -1 === 0 ) {
          setActive(true)
          setAnimation('work3')
        }
      })

    return (
        <div className="about">
            
            
          <Image />
           
            <p>Full-Stack Web Developer with proficiency in writing single-page-applications using the latest WEB technologies (Vue.js, Vuex, Node.js, React.js, Angular, etc.).
Graduate of the Coding Academy - 640 hours of an intensive coding bootcamp that qualifies Full-Stack developers. 1+ years experience working with JavaScript Html Css (open source projects). 
<br/>
Highly motivated tech enthusiast, Active in various web developing communities. 
Always up to date with the latest technologies. Passionate about writing clean and reusable code and experience with testing.

            </p>
            

            <button onClick={() => window.scrollTo(window.innerWidth, window.innerHeight)}
        style={{position: 'absolute',top: '50%', left: '20%', width: '300px', zIndex: '9999'}}>To the mainframe</button>
            
        </div>
    )
}

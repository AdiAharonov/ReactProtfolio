import React from 'react'
import { ReactComponent as Star1 } from "../../assets/images/stars/1.svg";
import { ReactComponent as Star2 } from "../../assets/images/stars/2.svg";
import { ReactComponent as Star3 } from "../../assets/images/stars/3.svg";
import { ReactComponent as Star4 } from "../../assets/images/stars/4.svg";
import { ReactComponent as Star5 } from "../../assets/images/stars/5.svg";
import { ReactComponent as Star6 } from "../../assets/images/stars/6.svg";
import { ReactComponent as Star7 } from "../../assets/images/stars/7.svg";
import { ReactComponent as Group1 } from "../../assets/images/stars/8.svg";
import { ReactComponent as Group2 } from "../../assets/images/stars/9.svg";
import { ReactComponent as Group3 } from "../../assets/images/stars/10.svg";
import { ReactComponent as Group4 } from "../../assets/images/stars/11.svg";
import { ReactComponent as Group5 } from "../../assets/images/stars/12.svg";
import { ReactComponent as Group6 } from "../../assets/images/stars/13.svg";
import { ReactComponent as Group7 } from "../../assets/images/stars/14.svg";
import { useSpring, animated } from 'react-spring'

export const StarsAnimation = () => {

const calc = (x, y) => [x - window.innerWidth / 2, y + window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
const trans5 = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`
const trans6 = (x, y) => `translate3d(${x / 13}px,${y / 3.5}px,0)`
const trans7 = (x, y) => `translate3d(${x / 7}px,${y / 10}px,0)`
const trans8 = (x, y) => `translate3d(${x / 5}px,${y / 10}px,0)`
const trans9 = (x, y) => `translate3d(${x / 14}px,${y / 4}px,0)`
const trans10 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`
const trans11 = (x, y) => `translate3d(${x / 3}px,${y / 4}px,0)`
const trans12 = (x, y) => `translate3d(${x / 7}px,${y / 2}px,0)`
const trans13 = (x, y) => `translate3d(${x / 14}px,${y / 2}px,0)`
const trans14 = (x, y) => `translate3d(${x / 3}px,${y / 8}px,0)`
  
const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (
        <div className="stars" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
             <animated.div className="star" style={{ transform: props.xy.interpolate(trans1) }} >
                <Star1  />
             </animated.div>
             <animated.div className="star" style={{ transform: props.xy.interpolate(trans2) }} >
                <Star2 />
             </animated.div>
             <animated.div className="star" style={{ transform: props.xy.interpolate(trans3) }} >
                <Star3 />
             </animated.div>
             <animated.div className="star" style={{ transform: props.xy.interpolate(trans4) }} >
                <Star4 />
             </animated.div>
             <animated.div className="star" style={{ transform: props.xy.interpolate(trans5) }} >
                <Star5 />
             </animated.div>
             <animated.div className="star" style={{ transform: props.xy.interpolate(trans6) }} >
                <Star6 />
             </animated.div>
             <animated.div className="star" style={{ transform: props.xy.interpolate(trans7) }} >
                <Star7 />
             </animated.div>
             <animated.div className="star" style={{ transform: props.xy.interpolate(trans8) }} >
                <Group1 />
             </animated.div>
             <animated.div className="group" style={{ transform: props.xy.interpolate(trans9) }} >
                <Group2 />
             </animated.div>
             <animated.div className="group" style={{ transform: props.xy.interpolate(trans10) }} >
                <Group3 />
             </animated.div>
             <animated.div className="group" style={{ transform: props.xy.interpolate(trans11) }} >
                <Group4 />
             </animated.div>
             <animated.div className="group" style={{ transform: props.xy.interpolate(trans12) }} >
                <Group5 />
             </animated.div>
             <animated.div className="group" style={{ transform: props.xy.interpolate(trans13) }} >
                <Group6 />
             </animated.div>
             <animated.div className="group" style={{ transform: props.xy.interpolate(trans14) }} >
                <Group7 />
             </animated.div>
        </div>
    )
}

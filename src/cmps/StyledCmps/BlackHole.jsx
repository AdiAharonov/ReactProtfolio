import React, { useRef, useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring';


export const BlackHole = ({ w, h, icons, p,  maxorbit }) => {

  const [stars, setStars] = useState([]);
  const [colStars, setColStars] = useState([]);
  const [collapse, setCollapse] = useState(false)

  const canvasRef = useRef(null);

  const createStars = () => {

    for (let i = 0; i < 400; i++) {
      stars.push({x: w / 2 , y: h / 2, r: Math.floor(Math.random() * w / 4) + (w/4), startRadian: Math.random() * Math.PI * 2 })
    }
  }

  const createColStars = () => {
    // colStars = [...stars];
    for (let i = 0; i < 400; i++) {
      colStars[i] = stars[i];
      // colStars.push({x: w / 2 , y: h / 2, r: Math.floor(Math.random() * w / 4) + (w/4), startRadian: Math.random() * Math.PI * 2 })
    }
  }

  const draw = (ctx) => {
    ctx.fillStyle = "rgba(31, 17, 34, 0.10)"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    

    if (!collapse) {
      stars.forEach(star => {
        star.startRadian += 0.01
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(star.x + Math.cos(star.startRadian) * star.r, star.y + Math.sin(star.startRadian) * star.r, 0.5 , 0, 2*Math.PI, false)
        ctx.fill()

    })
  } else {
    colStars.forEach(colStars => {
      if(colStars.r > (w*(3/8))) colStars.r -= 1
      colStars.startRadian += 0.01
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.arc(colStars.x + Math.cos(colStars.startRadian) * (colStars.r) , colStars.y + Math.sin(colStars.startRadian) * (colStars.r), 0.5 , 0, 2*Math.PI, false)
      ctx.fill()

    })

  }  
  }

  useEffect(() => {
    createStars()
    createColStars()
  }, [])

  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    
    let animationFrameId;
    
    
    //Our draw came here
    const render = () => {
     
      draw(context)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  


const handleClick = (e) => {
    e.preventDefault()
  
}

const handleCollapse = (e) => {
  e.preventDefault()
   collapse ? setCollapse(false) : setCollapse(true);
}



  return (
    <div className="blackhole" style={{ width: w, height: h}} >
    <canvas ref={canvasRef} style={{ width: w, height: h}}></canvas>
    
      <div className="centerHover">
        <button
          onClick={(e) => handleClick(e)}
          onMouseEnter={(e) => handleCollapse(e)}
          onMouseLeave={(e) => handleCollapse(e)}
        >
          {p}
        </button>
      </div>
    </div>
  );
};



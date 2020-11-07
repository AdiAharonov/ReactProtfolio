import React, { useRef, useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring';


export const BlackHole = ({ w, h, icons, p,  maxorbit }) => {

  const [stars, setStars] = useState([]);
  const [colStars, setColStars] = useState([]);
  const [collapse, setCollapse] = useState(false);
  const [expanse, setExpanse] = useState(false);
  const [currCtx, setCurrCtx] = useState();
  const [cntColEnd, setCntColEnd] = useState(0);
  const [tempMaxR, setTempMaxR] = useState(0);
  const [currSize, setCurrSize] = useState({w: 0, h: 0})

  const canvasRef = useRef(null);

  const createStars = () => {

    for (let i = 0; i < 600; i++) {
      stars.push({x: w / 2 , y: h / 2, r: Math.floor(Math.random() * w / 4) + (w/4), startRadian: Math.random() * Math.PI * 2 })
    }
  }

  const createColStars = () => {
    // setColStars([...stars]) ;
    
    for (let i = 0; i < 600; i++) {
      let star = Object.assign({}, stars[i]);
      colStars.push(star);
      // colStars.push({x: w / 2 , y: h / 2, r: Math.floor(Math.random() * w / 4) + (w/4), startRadian: Math.random() * Math.PI * 2 })
    }
  }

  const draw = (ctx) => {
    
    ctx.fillStyle = "rgba(31, 17, 34, 0.1)"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // if(expanse){
    //   let maxColstars = 0;
    //   for (let i = 0; i < 600; i++) {
    //     if(colStars[i] > maxColstars){

    //     }
    //     if(colStars[i].r !== stars[i].r) stars[i].r -=1;
        
    //   }
    //   stars.forEach(star => {
    //     star.startRadian += 0.01
    //     ctx.fillStyle = '#fff'
    //     ctx.beginPath()
    //     ctx.arc(star.x + Math.cos(star.startRadian) * star.r, star.y + Math.sin(star.startRadian) * star.r, 0.5 , 0, 2*Math.PI, false)
    //     ctx.arc(star.x + Math.cos(colStars.startRadian) * star.r, star.y + Math.sin(colStars.startRadian) * star.r, 0.5 , 0, 2*Math.PI, false)
    //     ctx.fill()

    // })
    // }

    if (!collapse) {
      for (let i = 0; i < 600; i++) {
        if(colStars[i].r !== stars[i].r) stars[i].r +=2;
      }
      stars.forEach(star => {
        star.startRadian += 0.01
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(star.x + Math.cos(star.startRadian) * star.r, star.y + Math.sin(star.startRadian) * star.r, 0.5 , 0, 2*Math.PI, false)
        ctx.fill()

    })
  } 
  if(collapse) {
     
    // let tempMaxR = 0;
    for (let i = 0; i < 600; i++) {
      if(colStars[i].r > tempMaxR) setTempMaxR(i);
      if(stars[i].r > (w/4)){
        if(colStars[i].r > (w*(3/8))) {
          stars[i].r -=2;
          
        }
         
        
      } 
    } 
    if((stars[tempMaxR].r <= (w*(3/8)+1)) && (cntColEnd ===0)){
      
      setCntColEnd(1);
    }
    // console.log('colStars R ' + colStars[0].r)
    // console.log('Stars R ' + stars[0].r)
    

    // if ( clearCanvas ) {
    //   setClearCanvas(false)
    //   console.log(clearCanvas)
    // }
    
    stars.forEach(stars => { 
      stars.startRadian += 0.01
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.arc(stars.x + Math.cos(stars.startRadian) * (stars.r) , stars.y + Math.sin(stars.startRadian) * (stars.r), 0.5 , 0, 2*Math.PI, false)
      ctx.fill()
      

    })
   
  }  
  }

  useEffect(() => {
    createStars()
    createColStars()
    setCurrSize({w, h})
  }, [])

  useEffect(() => {
    if ((cntColEnd ===1 && currCtx)) {
      currCtx.clearRect(0, 0, currCtx.canvas.width, currCtx.canvas.height);
      
      // console.log(cntColEnd)
      if(stars[tempMaxR].r === colStars[tempMaxR].r){
        setCntColEnd(0);
      }
    } 
    
    
    
  }, [cntColEnd, collapse, colStars, stars,tempMaxR])

  // useEffect(() => {
  //   // if (currCtx && clearCanvas) ;
  //   setClearCanvas(true)
  //   // console.log('im here')
  // }, [collapse])
  
  

  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d');
    setCurrCtx(context);
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
    setExpanse(true);
  
}

const handleCollapse = (e) => {
  e.preventDefault()
   if (collapse) {
    setCollapse(false)
    // setCurrSize({w, h})
  } else {
    setCollapse(true);
    // setClearCanvas(true)
    // setCurrSize({w: (w - (w/4)), h: (h - (h/4))})

   } 

}



  return (
    <div className="blackhole" style={{ width: currSize.w, height: currSize.h}} >
    <canvas ref={canvasRef} style={{ width: currSize.w, height: currSize.h}}></canvas>
    
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
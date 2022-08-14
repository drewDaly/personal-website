/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useCallback, useEffect} from 'react'
import "./Intro.scss"
function Intro() {
  const ref = useRef();
  var bool = true;
  var bool2 = true;
  let myInt, myInt2;
  const listenHover = useCallback((event) => {
    if (!bool) ref.current.style.color = '#1F4096';
        else ref.current.style.color = '#E84A27';
    myInt = setInterval(function() {
        if (!bool) ref.current.style.color = '#1F4096';
        else ref.current.style.color = '#E84A27';
        bool = !bool;
    }, 700);
      myInt2 = setInterval(function() {
        if (bool2) ref.current.innerHTML = 'ILL!';
        else ref.current.innerHTML = 'INI!';
        bool2 = !bool2;
      }, 2800);
  }, [])
  const listenLeave = (event) => {
    if (event) return (clearInterval(myInt), 
    clearInterval(myInt2), 
    ref.current.style.color = '#F8F8F8',
     ref.current.innerHTML = "University of Illinois '25");
  }
  useEffect(() => {
    window.addEventListener('mouseenter', listenHover);
    return () => {
      window.removeEventListener('mouseenter', listenHover);
    }
  }, [listenHover])
  
  return (
    <div className="intro-container">
    <div className="title-container">
        <h1 className='name'>ANDREW K. DALY</h1>
        <h1 className='mirror'>ANDREW K. DALY</h1>
        </div>
        <h2 className='subtitle'>Software Developer</h2>
        <h3 className='subtitle2' ref={ref} onMouseEnter={listenHover} onMouseLeave={listenLeave}>University of Illinois '25</h3>
    </div>
  )
}

export default Intro
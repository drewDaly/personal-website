import React, {useEffect, useRef} from 'react'
import profile from "./../images/20210117_132027.jpg";
import profile2 from "./../images/20210117_131631.jpg"
import "./About.scss"
function About() {
  const imgRef = useRef();
  const listenHover = (event) => {
    imgRef.current.src = profile2;
  }
  const listenLeave = (event) => {
    imgRef.current.src = profile;
  }
  useEffect(() => {
    window.addEventListener('mouseenter', listenHover);
  
    return () => {
      window.removeEventListener('mouseenter', listenHover);
    }
  }, [])
  
  return (
    <div className="about-container">
        <h2 className="about-title">
            About Me
        </h2>
        <div className="about-content">
        <p className="about-para">
            I do stuff and like things
        </p>
        <div className="aboutImg-wrap">
          <img ref={imgRef} onMouseEnter={listenHover} onMouseLeave={listenLeave} src={profile} alt="profile" style={{width: "100%"}} id="profile"/>
        </div>
        </div>
    </div>
  )
}

export default About
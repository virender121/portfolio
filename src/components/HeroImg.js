import "./HeroImgStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
         <img className="into-img" src="https://raw.githubusercontent.com/tech2etc/React-JS-Crash-Course/main/src/assets/intro-bg.jpg"
         alt="IntroImg"/>
      </div>
      <div className="content">
        <p>HI, I'M A FRONT-END.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="/project"
            className="btn">Projects</Link>
            <Link to="/contact"
            className="btn btn-light">contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg

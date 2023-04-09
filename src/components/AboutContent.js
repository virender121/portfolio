import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a react front-end developer. I create responsive secure websites for my clients.</p>
            <a href="/Virender's Resume.pdf"
              download="Virender's Resume.pdf">
            <button className="btn">Resume</button>
            </a>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src="https://raw.githubusercontent.com/tech2etc/React-JS-Crash-Course/main/src/assets/react1.jpg"
                className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src="https://raw.githubusercontent.com/tech2etc/React-JS-Crash-Course/main/src/assets/react2.webp"
                className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent

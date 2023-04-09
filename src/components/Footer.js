import "./FooterStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-conainer">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: '#fff', marginRight:"2rem"}}/>
                <div>
                    <p>Strawberry Hills Shimla.</p>
                    <p>Himachal Pradesh.</p>
                </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color: '#fff', marginRight:"2rem"}}/>
              +91-6230668898</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color: '#fff', marginRight:"2rem"}}/>
              panku6688t@gmail.com</h4>
            </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>This is me virender a Front-end Developer.I
                am enjoy discussing new projects and design challenges.    
            </p>
            <div>
            <NavLink to="https://www.facebook.com/profile.php?id=100075671088355"><FaFacebook size={30} style={{color: '#fff', marginRight:"1rem"}}/></NavLink>
            <NavLink to="https://twitter.com/panku6688t"><FaTwitter size={30} style={{color: '#fff', marginRight:"1rem"}}/></NavLink>
            <NavLink to="https://www.linkedin.com/in/pankaj-thakur-852792242/"><FaLinkedin size={30} style={{color: '#fff', marginRight:"1rem"}}/></NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

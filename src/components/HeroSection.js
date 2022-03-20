import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
function HeroSection() {
  return (
    <div className="hero-container">
        {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
        <img  className="navbar-logo-header"  src="/images/GWlogo.png" alt="logo"/>
        <h1>Graeter Woodworking</h1>
        
        <div className="hero_btns">
          
            <Button className="btns" buttonStyle='btn--primary'
            buttonSize='btn--large'>CHECK GALLERY
            <i className="far fa-play-circle"></i></Button>
        </div>
      
    </div>
  )
}

export default HeroSection;
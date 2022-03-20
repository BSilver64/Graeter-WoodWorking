import React from 'react'
import './AboutSection.css'

function AboutSection() {
  return (
    <div>
        <h1 className="MainAbout1">About Me </h1>
        <div className="wrapper">
            
            <div className="left">
                <img className="chris" src="/images/chris.jpg" alt=""></img>
               
             </div>
            <div className="right">
                 <h1 className="chrisText">I have over 25yrs of experience working as a high end carpenter, builder, cabinet maker, and woodworker. I'm a master craftsman who truly loves to work with my hands and wood to create a lasting product for my customers.</h1>
            </div>
            
        </div>
        <a className="EtsyLinkHome"href="https://www.etsy.com/shop/GraeterWoodworking?ref=seller-platform-mcnav"><h1 className="MainAbout">Check out my Etsy To Order</h1></a>
    </div>
  )
}

export default AboutSection

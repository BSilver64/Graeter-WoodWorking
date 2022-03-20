import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/Contact'><i class="fas fa-envelope"></i>Contact</Link>
              <a href="https://www.google.com/maps/@44.5247094,-73.1321289,13z"><i class="fas fa-map-marker-alt"></i>Location</a>
              
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <a href='https://www.instagram.com/graeter_woodworking/"'><i class="fab fa-instagram"></i>Instagram</a>
              <a href='https://www.facebook.com/Graeter-Woodworking-108281477605182'><i class="fab fa-facebook-f"></i>Facebook</a>
              <a href='https://www.etsy.com/shop/GraeterWoodworking?ref=seller-platform-mcnav'><i class="fab fa-etsy"></i>Etsy</a>
              
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
          
            <h1 className='website-rights'>Graeterwoodworking © 2022</h1>
            
         
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;

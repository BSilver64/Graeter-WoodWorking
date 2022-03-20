import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
      
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <p>Graeter Woodworking</p>
            <img  className="navbar-logo"  src="/images/GWlogo.png" alt="logo"/>
          </Link>
         

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <i className="Icon"class="fas fa-home"></i>
                <p className="nav-link-text">Home</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fas fa-images"></i>
                <p className="nav-link-text">Gallery</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fas fa-dolly-flatbed"></i>
                <p className="nav-link-text">Products</p>
              </Link>
              
            </li>
            <li className='nav-item'>
              <Link
              
                to='/Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               <i class="fas fa-phone"></i>
                <p className="nav-link-text">Contact</p>
              </Link>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navigation;

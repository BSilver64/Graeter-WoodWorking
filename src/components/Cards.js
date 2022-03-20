import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import { Link } from 'react-router-dom'

function Cards() {
  return (
    <div className='cards'>
      <h1>All products are available at the following Etsy Page:</h1>
    <a className="EtsyLink" href="https://www.etsy.com/shop/GraeterWoodworking?ref=seller-platform-mcnav"><h1>Graeter Wood Working Etsy Page</h1></a>

      <Link to="/Contact" href="https://www.etsy.com/shop/GraeterWoodworking?ref=seller-platform-mcnav"><h1>Also Custom orders are available. Contact me with details</h1></Link>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/c3.jpeg'
              text='wood coaster set'
              label='Available'
              path='/Products'
            />
            <CardItem
              src='images/d1.jpeg'
              text='footed charcuterie board'
              label='Available'
              path='/Products'
            />
          
          </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/e1.jpg'
              text='rectangular cutting board⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              label='Available'
              path='/Products'
            />
            <CardItem
              src='images/h1.jpeg'
              text='handle cutting board⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              label='Available'
              path='/Products'
            />
            <CardItem
              src='images/p1.jpeg'
              text='pizza peel⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              label='Available'
              path='/Products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
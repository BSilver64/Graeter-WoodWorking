import React, {useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {

  const [toggler, setToggler] = useState(false);

  return (
    <div className='cards'>
      <h1>Here are some projects that I have completed</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          
          <CardItem

              src='images/img-1.jpg'
              text='Entertainment Cabinet⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              
              path='/Gallery'
            
            />
            <CardItem
              src='images/img-2.jpg'
              text='Outdoor Deck Chair⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              
              path='/Gallery'
            />
d2            
            <CardItem
              src='images/img-9.jpg'
              text='Childrens Play stand'
              
              path='/Gallery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our vision</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/programming.jpg'
              text='Esey to learn Programming'
              label='Programmer'
              path='/vision'
            />
            <CardItem
              src='images/image2hacker.jpg'
              text='Top Ethical Hacking books'
              label='Only for Hackers'
              path='/vision'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image3.jpg'
              text='Keep it always in your  table'
              label='Varity'
              path='/vision'
            />
            <CardItem
              src='images/image4.png'
              text='Jada busy ho pocket Me rkho'
              label='Mobile friendly'
              path='/vision'
            />
            <CardItem
              src='images/image5.jpg'
              text='Free Pdhne wale edhr aao'
              label='Generality'
              path='/vision'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
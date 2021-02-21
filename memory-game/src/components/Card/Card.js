import React, { Component } from 'react';

import cobweb from './cobweb.png';
import owl from './owl.png';
import broom from './broom.png';
import witchHat from './witch-hat.png';

import './Card.css';

export default class Card extends Component {
  render() {
    const {
      card: { name, imageUrl, isFlipped },
      flipCard,
    } = this.props;

    return (
      <div className={`card ${isFlipped ? 'visible' : ''}`} onClick={() => flipCard(name)}>
        <div className='card-back card-face'>
          <img src={cobweb} alt='' className='cobweb top-left' />
          <img src={cobweb} alt='' className='cobweb top-right' />
          <img src={cobweb} alt='' className='cobweb bottom-left' />
          <img src={cobweb} alt='' className='cobweb bottom-right' />
          <img src={broom} alt='' className='broom' />
        </div>
        <div
          className='card-front card-face'
          style={{ backgroundImage: `url(/images/${imageUrl})` }}>
          <div className='scroll-name card-face'>
            <p>{name}</p>
          </div>
        </div>
      </div>
    );
  }
}

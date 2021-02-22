import React, { Component } from 'react';

import cobweb from './cobweb.png';

import './Card.css';

export default class Card extends Component {
  render() {
    const { card, flipCard, cardBack } = this.props;
    const { name, imageUrl, isFlipped, matched } = card;

    return (
      <div
        className={`card ${isFlipped ? 'visible' : ''} ${matched ? 'matched' : ''}`}
        onClick={() => flipCard(card)}>
        <div className='card-back card-face'>
          <img src={cobweb} alt='' className='cobweb top-left' />
          <img src={cobweb} alt='' className='cobweb top-right' />
          <img src={cobweb} alt='' className='cobweb bottom-left' />
          <img src={cobweb} alt='' className='cobweb bottom-right' />
          <img src={`./images/${cardBack}.png`} alt='' className={cardBack} />
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

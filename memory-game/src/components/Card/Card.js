import React, { Component } from 'react';

import cobweb from './cobweb.png';

import './Card.css';

export default class Card extends Component {
  render() {
    const {
      card: { id, name, imageUrl, isFlipped },
      flipCard,
      cardBack,
    } = this.props;

    return (
      <div className={`card ${isFlipped ? 'visible' : ''}`} onClick={() => flipCard(id)}>
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

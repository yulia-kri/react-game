import React, { Component } from 'react';

import Card from '../Card/Card';
import cards from '../../data/cards.data';

import './Game.css';

export default class Board extends Component {
  state = {
    cards: cards,
  };

  flipCard = (card) => {
    console.log(card);
  };

  render() {
    const { cards } = this.state;

    return (
      <div className='game__board'>
        {cards.map((card) => (
          <Card card={card} isFlipped={false} flipCard={this.flipCard} key={card.name} />
        ))}
      </div>
    );
  }
}

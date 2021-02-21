import React, { Component } from 'react';

import Card from '../Card/Card';
import cards from '../../data/cards.data';

import './Board.css';

export default class Board extends Component {
  state = {
    cards: cards,
  };

  render() {
    const { cards } = this.state;

    return (
      <div className='game__board'>
        {cards.map(({ name, imageUrl }) => (
          <Card name={name} imageUrl={imageUrl} isFlipped={false} key={name} />
        ))}
      </div>
    );
  }
}

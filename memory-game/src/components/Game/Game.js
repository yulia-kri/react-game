import React, { Component } from 'react';

import Card from '../Card/Card';
import cards from '../../data/cards.data';

import './Game.css';

export default class Board extends Component {
  state = {
    cards: cards.map((card) => {
      return { ...card, isFlipped: false };
    }),
  };

  flipCard = (name) => {
    console.log(name);
    this.setState(({ cards }) => {
      return {
        cards: cards.map((card) =>
          card.name === name ? { ...card, isFlipped: !card.isFlipped } : card,
        ),
      };
    });
  };

  render() {
    const { cards } = this.state;

    console.log(cards);

    return (
      <div className='game__board'>
        {cards.map((card) => (
          <Card card={card} flipCard={this.flipCard} key={card.name} />
        ))}
      </div>
    );
  }
}

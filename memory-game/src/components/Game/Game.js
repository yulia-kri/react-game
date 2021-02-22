import React, { Component } from 'react';

import Card from '../Card/Card';
import Timer from '../Timer/Timer';
import FlipsCounter from '../FlipsCounter/FlipsCounter';
import Spinner from '../Spinner/Spinner';

import cardsArray from '../../data/cards.data';
import shuffleArray from '../../utils/helpers';

import './Game.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTime: props.totalTime,
      numberOfCards: props.numberOfCards,
      cardBack: props.cardBack,
      totalClicks: 0,
      cards: null,
      matchedCards: null,
    };
  }

  componentDidMount() {
    const { numberOfCards } = this.state;

    let newCards = cardsArray.map((card) => {
      return { ...card, isFlipped: false, id: card.name.replace(/\s/g, '') };
    });
    newCards = shuffleArray(newCards);
    newCards = newCards
      .slice(0, numberOfCards)
      .flatMap((card) => [card, { ...card, id: `2nd${card.id}` }]);
    newCards = shuffleArray(newCards);

    this.setState({
      cards: newCards,
    });
  }

  canFlipCard = (card) => {
    return true;
  };

  flipCard = (id) => {
    console.log(id);
    this.setState(({ cards, totalClicks }) => {
      const newTotalClicks = ++totalClicks;

      return {
        cards: cards.map((card) =>
          card.id === id ? { ...card, isFlipped: !card.isFlipped } : card,
        ),
        totalClicks: newTotalClicks,
      };
    });
  };

  render() {
    const { cards, cardBack, totalTime, totalClicks } = this.state;

    if (!cards) return <Spinner />;

    return (
      <div className='game'>
        <div className='game__info'>
          <Timer timeRemaining={totalTime} />
          <FlipsCounter totalClicks={totalClicks} />
        </div>
        {cards.map((card) => (
          <Card card={card} flipCard={this.flipCard} cardBack={cardBack} key={card.id} />
        ))}
      </div>
    );
  }
}

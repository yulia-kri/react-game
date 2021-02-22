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
    };
    this.cardToCheck = null;
    this.matchedCards = [];
    this.busy = false;
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

  canFlipCard(card) {
    return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
  }

  flipCard = (card) => {
    if (!this.canFlipCard(card)) return;

    const { id } = card;

    this.setState(({ cards, totalClicks }) => {
      const newTotalClicks = ++totalClicks;

      return {
        cards: cards.map((card) =>
          card.id === id ? { ...card, isFlipped: !card.isFlipped } : card,
        ),
        totalClicks: newTotalClicks,
      };
    });

    if (this.cardToCheck) {
      this.checkForMatch(card);
    } else {
      this.cardToCheck = card;
    }
  };

  checkForMatch = (card) => {
    card.name === this.cardToCheck.name
      ? this.cardsMatch(card, this.cardToCheck)
      : this.cardsMismatch(card, this.cardToCheck);

    this.cardToCheck = null;
    console.log('card to check', this.cardToCheck);
  };

  cardsMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);

    console.log('matched cards:', this.matchedCards);

    this.setState(({ cards }) => {
      return {
        cards: cards.map((card) => {
          const { id } = card;
          const card1Id = card1.id;
          const card2Id = card2.id;
          if (id === card1Id || id === card2Id) return { ...card, matched: true };
          return card;
        }),
      };
    });

    this.cardToCheck = null;

    if (this.matchedCards.length === this.state.cards.length) {
      console.log('win');
    }
  }

  cardsMismatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      this.busy = false;
      this.setState(({ cards }) => {
        return {
          cards: cards.map((card) => {
            const { id } = card;
            const card1Id = card1.id;
            const card2Id = card2.id;
            if (id === card1Id || id === card2Id) return { ...card, isFlipped: false };
            return card;
          }),
        };
      });
    }, 1000);
  }

  render() {
    const { cards, cardBack, totalTime, totalClicks } = this.state;
    console.log(this.state);

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

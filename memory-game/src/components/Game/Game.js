import React, { Component } from 'react';

import Card from '../Card/Card';
import Timer from '../Timer/Timer';
import FlipsCounter from '../FlipsCounter/FlipsCounter';
import Spinner from '../Spinner/Spinner';
import Victory from '../Victory/Victory';
import Defeat from '../Defeat/Defeat';

import cardsArray from '../../data/cards.data';
import shuffleArray from '../../utils/helpers';
import AudioController from '../../services/audioController';
import { set, get } from '../../utils/localStorage';

import './Game.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.ac = new AudioController(
      props.bgMusic,
      props.musicVolume,
      props.sounds,
      props.soundsVolume,
    );
    this.state = {
      totalClicks: 0,
      cards: null,
      victory: false,
      gameOver: false,
    };
    this.cardToCheck = null;
    this.matchedCards = [];
    this.busy = false;
  }

  componentDidMount() {
    set('gameData', this.props);

    const { numberOfCards } = this.props;

    let newCards = cardsArray.map((card) => {
      return { ...card, isFlipped: false, id: card.name.replace(/\s/g, '') };
    });
    newCards = shuffleArray(newCards);
    newCards = newCards
      .slice(0, numberOfCards / 2)
      .flatMap((card) => [card, { ...card, id: `2nd${card.id}` }]);
    newCards = shuffleArray(newCards);

    this.setState({
      cards: newCards,
    });

    this.ac.startMusic();

    set('cards', newCards);
  }

  canFlipCard(card) {
    let sameCards;
    if (this.cardToCheck) sameCards = card.id === this.cardToCheck.id;
    return !this.busy && !this.matchedCards.includes(card) && !sameCards;
  }

  flipCard = (card) => {
    if (!this.canFlipCard(card)) return;

    this.ac.flip();

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
  };

  cardsMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);

    this.ac.match();

    set('matched', this.matchedCards);

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
      this.victory();
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

  victory = () => {
    this.ac.stopMusic();
    this.saveToRecords(true);
    this.setState({ victory: true });
  };

  gameOver = () => {
    this.ac.stopMusic();
    this.saveToRecords(false);
    this.setState({ gameOver: true });
  };

  saveToRecords(isWin) {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    const date = new Date().toLocaleString('ru', options);

    const gameObj = {
      date,
      numberOfCards: this.props.numberOfCards,
      time: +this.props.totalTime - +get('time'),
      clicks: this.state.totalClicks,
      result: isWin ? 'Win' : 'Lose',
    };
    const records = JSON.parse(get('records')) || [];
    records.push(gameObj);
    localStorage.clear();
    set('records', records);
  }

  render() {
    const { victory, gameOver, cards, totalClicks } = this.state;
    const { totalTime, cardBack } = this.props;

    if (victory) return <Victory />;

    if (gameOver) return <Defeat />;

    if (!cards) return <Spinner />;

    return (
      <div className='game'>
        <div className='game__info'>
          <Timer timeRemaining={totalTime} endGame={this.gameOver} />
          <FlipsCounter totalClicks={totalClicks} />
        </div>
        {cards.map((card) => (
          <Card card={card} flipCard={this.flipCard} cardBack={cardBack} key={card.id} />
        ))}
      </div>
    );
  }
}

import React, { Component } from 'react';

import Game from '../Game/Game';
import Settings from '../Settings/Settings';

const Autoplay = () => {
  return class extends Component {
    state = {
      gameStarted: false,
      gameData: {},
    };

    updateData = (value) => {
      this.setState({ gameData: value, gameStarted: true });
    };

    render() {
      const {
        gameData: {
          bgMusic,
          musicVolume,
          sounds,
          soundsVolume,
          totalTime,
          numberOfCards,
          cardsBack,
        },
        gameStarted,
      } = this.state;

      if (!gameStarted) return <Settings updateData={this.updateData} autoplay={true} />;

      return (
        <Game
          totalTime={totalTime}
          numberOfCards={numberOfCards}
          cardBack={cardsBack}
          bgMusic={bgMusic}
          musicVolume={musicVolume}
          sounds={sounds}
          soundsVolume={soundsVolume}
          saved={false}
          autoplay={true}
        />
      );
    }
  };
};

export default Autoplay();

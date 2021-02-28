import React, { Component } from 'react';

import Game from '../Game/Game';
import Settings from '../Settings/Settings';

import './App.css';
class App extends Component {
  state = {
    gameStarted: false,
    gameData: {},
  };

  updateData = (value) => {
    this.setState({ gameData: value, gameStarted: true });
  };

  render() {
    console.log('from App', this.state);
    const {
      gameData: { bgMusic, musicVolume, sounds, soundsVolume, totalTime, numberOfCards, cardsBack },
      gameStarted,
    } = this.state;

    if (!gameStarted) return <Settings updateData={this.updateData} />;

    return (
      <React.Fragment>
        <h1 className='page-title'>Memory Game in Hogwarts</h1>
        <Game
          totalTime={totalTime}
          numberOfCards={numberOfCards}
          cardBack={cardsBack}
          bgMusic={bgMusic}
          musicVolume={musicVolume}
          sounds={sounds}
          soundsVolume={soundsVolume}
        />
      </React.Fragment>
    );
  }
}

export default App;

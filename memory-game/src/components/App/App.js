import React from 'react';

import Game from '../Game/Game';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <h1 className='page-title'>Memory Game in Hogwarts</h1>
      <Game totalTime={100} numberOfCards={8} cardBack={'hat'} />
    </React.Fragment>
  );
};

export default App;

import React from 'react';

import Board from '../Board/Board';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <h1 className='page-title'>Harry Potter Memory Game</h1>
      <div className='game'>
        <div className='game__info'>
          <div className='info__time'>
            Time <span>100</span>
          </div>
          <div className='info__flips'>
            Flips <span>10</span>
          </div>
        </div>
        <Board />
      </div>
    </React.Fragment>
  );
};

export default App;

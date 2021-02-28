import React from 'react';

import gif from './victory.gif';

import './Victory.css';

const Victory = () => {
  return (
    <div className='gameover'>
      <h2>5 points to your house!</h2>
      <img src={gif} alt='' />
    </div>
  );
};

export default Victory;

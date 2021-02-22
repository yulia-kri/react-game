import React from 'react';

const FlipsCounter = (props) => (
  <div className='info__flips'>
    Flips <span>{props.totalClicks}</span>
  </div>
);

export default FlipsCounter;

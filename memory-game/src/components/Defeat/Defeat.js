import React from 'react';

import gif from './defeat.gif';

const Defeat = () => {
  return (
    <div className='gameover'>
      <h2>There will be more games...</h2>
      <img src={gif} alt='' />
    </div>
  );
};

export default Defeat;

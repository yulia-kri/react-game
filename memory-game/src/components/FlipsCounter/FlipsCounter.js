import React from 'react';

import { set } from '../../utils/localStorage';

const FlipsCounter = (props) => {
  const { totalClicks } = props;

  set('clicks', totalClicks);

  return (
    <div className='info__flips'>
      Flips <span>{totalClicks}</span>
    </div>
  );
};

export default FlipsCounter;

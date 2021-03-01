import React from 'react';

import './Toggle.css';

const Toggle = (props) => {
  const { label, id, isChecked, handleClick } = props;

  return (
    <div className='settings-item'>
      {label}
      <div className={`toggle ${isChecked ? 'on' : ''}`} id={id} onClick={handleClick}>
        <button className='toggle__dot'></button>
      </div>
    </div>
  );
};

export default Toggle;

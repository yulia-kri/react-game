import React from 'react';

import './Range.css';

const Range = (props) => {
  const { label, isChecked, value, name, handleChange } = props;

  return (
    <div className={`${isChecked ? 'visible' : 'fade'}`}>
      {label}
      <input
        type='range'
        name={name}
        value={value}
        onChange={handleChange}
        min='0'
        max='1'
        step='0.1'
      />
    </div>
  );
};

export default Range;

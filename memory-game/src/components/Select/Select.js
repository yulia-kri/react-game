import React from 'react';

import './Select.css';

const Select = (props) => {
  const { label, name, value, handleChange } = props;

  return (
    <div>
      {label}
      <select name={name} value={value} onChange={handleChange}>
        {props.children}
      </select>
    </div>
  );
};

export default Select;

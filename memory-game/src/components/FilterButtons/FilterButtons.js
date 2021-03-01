import React from 'react';

import './FilterButtons.css';

const FilterButtons = (props) => {
  const btns = [
    { label: 'All', id: 'all' },
    { label: 'Best 10', id: 'best' },
  ];

  const { filter, onFilterChange } = props;

  const buttons = btns.map(({ id, label }) => {
    const isActive = filter === id;
    return (
      <button
        className={`btn ${isActive ? 'active' : ''}`}
        onClick={() => onFilterChange(id)}
        key={id}>
        {label}
      </button>
    );
  });

  return <div className='btn-group'>{buttons}</div>;
};

export default FilterButtons;

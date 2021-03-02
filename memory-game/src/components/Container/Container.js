import React from 'react';

import './Container.css';

const Container = (props) => {
  const { classes } = props;
  return <div className={`container ${classes ? classes : ''}`}>{props.children}</div>;
};

export default Container;

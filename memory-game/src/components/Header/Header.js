import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <h1 className='page-title'>Memory Game in Hogwarts</h1>
      <ul className='links-list'>
        <li>
          <Link className='link' to='/newgame'>
            New Game
          </Link>
        </li>
        <li>
          <Link className='link' to='/saved'>
            Saved Game
          </Link>
        </li>
        <li>
          <Link className='link' to='/statistics'>
            Statistics
          </Link>
        </li>
        <li>
          <Link className='link' to='/autoplay'>
            Autoplay
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Header;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <h1 className='page-title'>
        <Link className='logo' to='/'>
          Memory Game in Hogwarts
        </Link>
      </h1>
      <ul className='links-list'>
        <li>
          <NavLink className='link' to='/newgame' activeClassName='active'>
            New Game
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/saved' activeClassName='active'>
            Saved Game
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/statistics' activeClassName='active'>
            Statistics
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/autoplay' activeClassName='active'>
            Autoplay
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Header;

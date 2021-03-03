import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
  state = {
    isOpen: false,
  };

  toggleIsOpen = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    const infoEl = (
      <div className='info'>
        <div className='keys'>
          <p>
            <span className='keys__descr'>Alt + N</span>
            &nbsp;- Open new game
          </p>
          <p>
            <span className='keys__descr'>Alt + S</span>
            &nbsp;- Open saved game
          </p>
          <p>
            <span className='keys__descr'>Alt + T</span>
            &nbsp;- Open statistics
          </p>
          <p>
            <span className='keys__descr'>Alt + A</span>
            &nbsp;- Open autoplay
          </p>
          <p>
            <span className='keys__descr'>Alt + W</span>
            &nbsp;- Open welcome page
          </p>
        </div>
        <div className='footer__links'>
          <a href='https://github.com/yulia-kri' target='_blank'>
            yulia-kri&nbsp;
          </a>
          <span>| 2021 |</span>
          <a href='https://rs.school/js/' target='_blank'>
            &nbsp;
            <img className='link__img' src='https://rs.school/images/rs_school_js.svg' />
          </a>
        </div>
      </div>
    );

    return (
      <footer>
        <button className='info-toggle-btn' onClick={this.toggleIsOpen}>
          <em>i</em>
        </button>
        {isOpen && infoEl}
      </footer>
    );
  }
}

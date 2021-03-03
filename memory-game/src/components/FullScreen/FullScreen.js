import React, { Component } from 'react';

import './FullScreen.css';

export default class FullScreen extends Component {
  toggleFullScreen = (e) => {
    const elem = document.querySelector('.game');

    if (elem) {
      if (!document.fullscreenElement) {
        elem.requestFullscreen();

        e.currentTarget.firstElementChild.className = 'fas fa-compress-arrows-alt';
      } else if (document.exitFullscreen) {
        document.exitFullscreen();

        e.currentTarget.firstElementChild.className = 'fas fa-expand-arrows-alt';
      }
    }
  };

  render() {
    return (
      <button className='fullscreen-btn' onClick={this.toggleFullScreen}>
        <i className='fas fa-expand-arrows-alt'></i>
      </button>
    );
  }
}

import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    timeRemaining: this.props.timeRemaining,
  };

  componentDidMount() {
    this.interval = setInterval(this.startCountdown, 1000);
  }

  startCountdown = () => {
    const { timeRemaining } = this.state;

    if (timeRemaining > 0) {
      this.setState(({ timeRemaining }) => {
        const time = --timeRemaining;
        return { timeRemaining: time };
      });
    } else {
      this.props.endGame();
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { timeRemaining } = this.state;

    return (
      <div className='info__time'>
        Time <span>{timeRemaining}</span>
      </div>
    );
  }
}

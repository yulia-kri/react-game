import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: props.timeRemaining,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.startCountdown, 1000);
  }

  startCountdown = () => {
    this.setState(({ timeRemaining }) => {
      const time = --timeRemaining;
      return { timeRemaining: time };
    });
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

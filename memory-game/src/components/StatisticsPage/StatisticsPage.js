import React, { Component } from 'react';

import Container from '../Container/Container';

import { get } from '../../utils/localStorage';

import './StatisticsPage.css';

export default class StatisticsPage extends Component {
  render() {
    const records = JSON.parse(get('records'));

    if (!records) return <h3>Sorry, you don't have any statictics yet. Play some games first.</h3>;

    return (
      <Container>
        <ul className='table__header'>
          <li>Played at</li>
          <li>Total time</li>
          <li>Number of clicks</li>
          <li>Number of cards</li>
          <li>Result</li>
        </ul>
        {records.map(({ date, time, clicks, numberOfCards, result }, i) => (
          <div className='table__line' key={i}>
            <span>{date}</span>
            <span>{time}</span>
            <span>{clicks}</span>
            <span>{numberOfCards}</span>
            <span>{result}</span>
          </div>
        ))}
      </Container>
    );
  }
}

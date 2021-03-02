import React, { Component } from 'react';

import Container from '../Container/Container';

import { get } from '../../utils/localStorage';

import './StatisticsPage.css';
import FilterButtons from '../FilterButtons/FilterButtons';

export default class StatisticsPage extends Component {
  state = {
    filter: 'all',
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'best':
        return items
          .filter((item) => item.result === 'Win')
          .sort((a, b) => a.clicks - b.clicks)
          .slice(0, 10);
      default:
        return items;
    }
  }

  render() {
    const records = JSON.parse(get('records')).reverse();

    if (!records) return <h3>Sorry, you don't have any statictics yet. Play some games first.</h3>;

    const { filter } = this.state;
    const visibleItems = this.filter(records, filter);

    return (
      <Container classes={'statistics'}>
        <FilterButtons filter={filter} onFilterChange={this.changeFilter} />
        <ul className='table__header'>
          <li>Played at</li>
          <li>Total time</li>
          <li>Number of clicks</li>
          <li>Number of cards</li>
          <li>Result</li>
        </ul>
        {visibleItems.map(({ date, time, clicks, numberOfCards, result }, i) => (
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

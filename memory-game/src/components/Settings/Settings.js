import React, { Component } from 'react';

import Container from '../Container/Container';
import Toggle from '../Toggle/Toggle';
import Range from '../Range/Range';
import Select from '../Select/Select';

import './Settings.css';

export default class Settings extends Component {
  state = {
    bgMusic: true,
    musicVolume: 0.5,
    sounds: true,
    soundsVolume: 0.5,
    totalTime: 100,
    numberOfCards: 16,
    cardsBack: 'broom',
  };

  handleClick = (e) => {
    const { id } = e.currentTarget;

    this.setState((state) => ({ [id]: !state[id] }));
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      bgMusic,
      musicVolume,
      sounds,
      soundsVolume,
      totalTime,
      numberOfCards,
      cardsBack,
    } = this.state;

    console.log(this.state);

    return (
      <Container>
        {
          <React.Fragment>
            <Toggle
              label={'Background music'}
              id={'bgMusic'}
              isChecked={bgMusic}
              handleClick={this.handleClick}
            />
            <Range
              label={'Music volume'}
              isChecked={bgMusic}
              name={'musicVolume'}
              value={musicVolume}
              handleChange={this.handleChange}
            />
            <Toggle
              label={'Sounds'}
              id={'sounds'}
              isChecked={sounds}
              handleClick={this.handleClick}
            />
            <Range
              label={'Sounds volume'}
              isChecked={sounds}
              name={'soundsVolume'}
              value={soundsVolume}
              handleChange={this.handleChange}
            />
            <Select
              label={'Time'}
              name={'totalTime'}
              value={totalTime}
              handleChange={this.handleChange}>
              <option value='60'>60</option>
              <option value='100'>100</option>
              <option value='150'>150</option>
            </Select>
            <Select
              label={'Number of cards'}
              name={'numberOfCards'}
              value={numberOfCards}
              handleChange={this.handleChange}>
              <option value='16'>16</option>
              <option value='20'>20</option>
              <option value='24'>24</option>
            </Select>
            <Select
              label={'Cards back'}
              name={'cardsBack'}
              value={cardsBack}
              handleChange={this.handleChange}>
              <option value='broom'>🧹</option>
              <option value='owl'>🦉</option>
              <option value='hat'>🧙‍♀️</option>
            </Select>
            <button
              className='button'
              onClick={() => {
                this.props.updateData(this.state);
              }}>
              Start Game
            </button>
          </React.Fragment>
        }
      </Container>
    );
  }
}

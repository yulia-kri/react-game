import React, { Component } from 'react';

import Game from '../Game/Game';

import { get } from '../../utils/localStorage';

const SavedGamePage = () => {
  const gameData = JSON.parse(get('gameData'));

  if (!gameData) return <h3>Sorry, you don't have any unfinished games.</h3>;

  const cards = JSON.parse(get('cards'));
  const matched = JSON.parse(get('matched')) || [];
  const totalClicks = get('clicks') || 0;
  const timeRemaining = get('time');

  const saved = {
    cards,
    matched,
    totalClicks,
    timeRemaining,
  };

  const {
    bgMusic,
    musicVolume,
    sounds,
    soundsVolume,
    totalTime,
    numberOfCards,
    cardsBack,
  } = gameData;

  return (
    <Game
      totalTime={totalTime}
      numberOfCards={numberOfCards}
      cardBack={cardsBack}
      bgMusic={bgMusic}
      musicVolume={musicVolume}
      sounds={sounds}
      soundsVolume={soundsVolume}
      saved={saved}
      autoplay={false}
    />
  );
};

export default SavedGamePage;

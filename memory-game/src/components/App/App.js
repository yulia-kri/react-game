import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import NewGamePage from '../NewGamePage/NewGamePage';
import SavedGamePage from '../SavedGamePage/SavedGamePage';
import StatisticsPage from '../StatisticsPage/StatisticsPage';
import Autoplay from '../Autoplay/Autoplay';

import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route path='/newgame' component={NewGamePage} />
          <Route path='/saved' component={SavedGamePage} />
          <Route path='/statistics' component={StatisticsPage} />
          <Route path='/autoplay' component={Autoplay} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

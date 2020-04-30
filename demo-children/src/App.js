import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Accordion from './components/Accordion';
import Perfomance from './components/Perfomance';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Heading">
          Demo children
        </Accordion>
        <Perfomance heading="Perfomance">
          <p>Cash Diposits</p>
          <h3>1.7M</h3>
          <p>54.1% less earning</p>
        </Perfomance>
      </div>
    );
  }
}

export default App;

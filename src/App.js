import React, { Component } from 'react';
import './App.css';
import StuffList from './components/stuffList';
import Banner from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <StuffList />
      </div>
    );
  }
}

export default App;

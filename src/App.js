import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Banner/></div>
      </div>
    );
  }
}

export default App;

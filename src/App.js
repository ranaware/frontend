import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Routing from './Router';
import NavBar from './NavBar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Banner"><Banner /></div>
        
          <div className="side"><NavBar /></div>
          
        
      </div>
    );
  }
}

export default App;

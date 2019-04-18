import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import * as Constants from './Constants';
import Home from './Home';
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';
import Game4 from './Game4';
import Game5 from './Game5';
import Game6 from './Game6';
import Game7 from './Game7';
import Game8 from './Game8';
import Game9 from './Game9';

class NavBar extends Component {
  render() {
    return (

      <Router>

        <div className="container">
          <div className="grid1">
            <div><NavLink to="/"><Button variant="info">Home</Button></NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_1}><Button variant="info">Game 1</Button></NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_2}><Button variant="info">Game 2</Button></NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_3}><Button variant="info">Game 3</Button></NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_4}><Button variant="info">Game 4</Button></NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_5}><Button variant="info">Game 5</Button></NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_6}><Button variant="info">Game 6</Button></NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_7}><Button variant="info">Game 7</Button></NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_8}><Button variant="info">Game 8</Button></NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_9}><Button variant="info">Game 9</Button></NavLink></div>
          </div>


          <div><Route exact path="/" component={Home} /></div>
          <div><Route exact path={Constants.GAME_PATH_1} component={Game1} /></div>
          <div><Route exact path={Constants.GAME_PATH_2} component={Game2} /></div>
          <div><Route exact path={Constants.GAME_PATH_3} component={Game3} /></div>
          <div><Route exact path={Constants.GAME_PATH_4} component={Game4} /></div>
          <div><Route exact path={Constants.GAME_PATH_5} component={Game5} /></div>
          <div><Route exact path={Constants.GAME_PATH_6} component={Game6} /></div>
          <div><Route exact path={Constants.GAME_PATH_7} component={Game7} /></div>
          <div><Route exact path={Constants.GAME_PATH_8} component={Game8} /></div>
          <div><Route exact path={Constants.GAME_PATH_9} component={Game9} /></div>
        </div>
      </Router>



    );
  }
}
// Rename later
export default NavBar;
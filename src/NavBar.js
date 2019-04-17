import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
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
            <div className="grid1">
            <div><NavLink to="/">Home</NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_1}>Game 1</NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_2}>Game 2</NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_3}>Game 3</NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_4}>Game 4</NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_5}>Game 5</NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_6}>Game 6</NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_7}>Game 7</NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_8}>Game 8</NavLink></div>
            <div><NavLink to={Constants.GAME_PATH_9}>Game 9</NavLink></div>
            </div>
            
                       
            <div><Route exact path="/" component={Home}/></div>
            <div><Route exact path={Constants.GAME_PATH_1} component={Game1}/></div>
            <div><Route exact path={Constants.GAME_PATH_2} component={Game2}/></div>
            <div><Route exact path={Constants.GAME_PATH_3} component={Game3}/></div>
            <div><Route exact path={Constants.GAME_PATH_4} component={Game4}/></div>
            <div><Route exact path={Constants.GAME_PATH_5} component={Game5}/></div>
            <div><Route exact path={Constants.GAME_PATH_6} component={Game6}/></div>
            <div><Route exact path={Constants.GAME_PATH_7} component={Game7}/></div>
            <div><Route exact path={Constants.GAME_PATH_8} component={Game8}/></div>
            <div><Route exact path={Constants.GAME_PATH_9} component={Game9}/></div>
           
        </Router>
        
      
    );
  }
}
// Rename later
export default NavBar;
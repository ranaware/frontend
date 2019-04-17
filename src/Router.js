import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import * as Constants from './Constants';
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';
import Game4 from './Game4';
import Game5 from './Game5';
import Game6 from './Game6';
import Game7 from './Game7';
import Game8 from './Game8';
import Game9 from './Game9';

class Routing extends Component {
    render(){
        return (
            <Router>
               <div className="gridsquare">
                   <div><img src={Constants.PIC_1}/></div>
                   <div><NavLink to={Constants.GAME_PATH_1}>Game 1</NavLink></div>
                   
                </div>
               <div className="gridsquare">
                   <div><img src={Constants.PIC_2}/></div>
                   <div><NavLink to={Constants.GAME_PATH_2}>Game 2</NavLink></div>
                </div>
               <div className="gridsquare">
                   <div><img src={Constants.PIC_3}/></div>
                   <div><NavLink to={Constants.GAME_PATH_3}>Game 3</NavLink></div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_4}/></div>
                   <div><NavLink to={Constants.GAME_PATH_4}>Game 4</NavLink></div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_5}/></div>
                   <div><NavLink to={Constants.GAME_PATH_5}>Game 5</NavLink></div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_6}/></div>
                   <div><NavLink to={Constants.GAME_PATH_6}>Game 6</NavLink></div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_7}/></div>
                   <div><NavLink to={Constants.GAME_PATH_7}>Game 7</NavLink></div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_8}/></div>
                   <div><NavLink to={Constants.GAME_PATH_8}>Game 8</NavLink></div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_9}/></div>
                   <div><NavLink to={Constants.GAME_PATH_9}>Game 9</NavLink></div>
                </div>
                <div><Route exact path={Constants.GAME_PATH_1} component={Game1}/></div>
                              
            </Router>
        )
    }
}

export default Routing;
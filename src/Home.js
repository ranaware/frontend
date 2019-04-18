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

class Home extends Component {
    render() {
        return (
            <Router>
                <div className="grid2">
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_1} width="200" height="200"/></div>
                        <div>Game 1</div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_2} width="200" height="200"/></div>
                        <div>Game 2</div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_3} width="200" height="200"/></div>
                        <div>Game 3</div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_4} width="200" height="200"/></div>
                        <div>Game 4</div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_5} width="200" height="200"/></div>
                        <div>Game 5</div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_6} width="200" height="200"/></div>
                        <div>Game 6</div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_7} width="200" height="200"/></div>
                        <div>Game 7</div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_8} width="200" height="200"/></div>
                        <div>Game 8</div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_9} width="200" height="200"/></div>
                        <div>Game 9</div>
                    </div>
                </div>

            </Router>
        )
    }
}

export default Home;
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
                <div className="grid2">
                    <div className="gridsquare">

                        <div><img src={Constants.PIC_1} width="200" height="200"/></div>
                        <div><p>Game 1</p></div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_2} width="200" height="200"/></div>
                        <div><p>Game 2</p></div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_3} width="200" height="200"/></div>
                        <div><p>Game 3</p></div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_4} width="200" height="200"/></div>
                        <div><p>Game 4</p></div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_5} width="200" height="200"/></div>
                        <div><p>Game 5</p></div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_6} width="200" height="200"/></div>
                        <div><p>Game 6</p></div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_7} width="200" height="200"/></div>
                        <div><p>Game 7</p></div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_8} width="200" height="200"/></div>
                        <div><p>Game 8</p></div>
                    </div>
                    <div className="gridsquare">
                        <div><img src={Constants.PIC_9} width="200" height="200"/></div>
                        <div><p>Game 9</p></div>

                    </div>
                </div>
        )
    }
}

export default Home;
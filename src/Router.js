import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import * as Constants from './Constants';

class Routing extends Component {
    render(){
        return (
            <Router>
               <div className="gridsquare">
                   <div><img src={Constants.PIC_1}/></div>
                   <div>Game 1</div>
                </div>
               <div className="gridsquare">
                   <div><img src={Constants.PIC_2}/></div>
                   <div>Game 2</div>
                </div>
               <div className="gridsquare">
                   <div><img src={Constants.PIC_3}/></div>
                   <div>Game 3</div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_4}/></div>
                   <div>Game 4</div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_5}/></div>
                   <div>Game 5</div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_6}/></div>
                   <div>Game 6</div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_7}/></div>
                   <div>Game 7</div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_8}/></div>
                   <div>Game 8</div>
                </div>
                <div className="gridsquare">
                   <div><img src={Constants.PIC_9}/></div>
                   <div>Game 9</div>
                </div>
                              
            </Router>
        )
    }
}

export default Routing;
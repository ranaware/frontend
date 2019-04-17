import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Routing extends Component {
    render(){
        return (
            <Router>
               <div className="gridsquare">Game 1</div>
               <div className="gridsquare">Game 1</div>
               <div className="gridsquare">Game 1</div>
               <div className="gridsquare">Game 1</div>
               <div className="gridsquare">Game 1</div>
               <div className="gridsquare">Game 1</div>
               <div className="gridsquare">Game 1</div>
               <div className="gridsquare">Game 1</div>
               <div className="gridsquare">Game 1</div>
                              
            </Router>
        )
    }
}

export default Routing;
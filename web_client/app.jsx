import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
 
ReactDOM.render(
    <NavBar/>,
    document.getElementById("app")
)
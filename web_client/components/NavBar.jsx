import React from "react";
import DeputiesList from './DeputiesList.jsx';
import DeputyInfo from './DeputyInfo.jsx';
import Home from './Home.jsx';
import IncomesBar from './IncomesBar.jsx';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Label  } from 'react-bootstrap';
import {  Image } from 'react-bootstrap';

const NavBar = () => (
  <Router>
    <div>

   <h1>
    DeputyDeclaration <Label> New </Label>
  </h1>

   <Image src="https://dev.mydex.org/images/data-logo.png" circle />






      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/DeputiesList">DeputiesList</Link>
        </li>
        <li>
          <Link to="/IncomesBar">IncomesBar</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/DeputiesList" component={DeputiesList} />
      <Route path="/IncomesBar" component={IncomesBar} /> 
      <Route path="/deputies/:id" component={DeputyInfo} />
    </div>
  </Router>
);



export default NavBar;
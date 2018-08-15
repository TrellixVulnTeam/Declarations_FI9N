import React from "react";
import DeputiesList from './DeputiesList.jsx';
import DeputyInfo from './DeputyInfo.jsx';

import IncomesBar from './IncomesBar.jsx';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => (
  <Router>
    <div>
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

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);



export default NavBar;
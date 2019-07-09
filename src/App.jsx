import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

const App = ({ children }) => (
  <div className="App">
    <ul className="menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
    </ul>

    {children}
  </div>
);

export default App;

App.propTypes = {
  children: PropTypes.element.isRequired,
};

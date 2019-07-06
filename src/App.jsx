import PropTypes from 'prop-types';
import React from 'react';
import './App.css';

const App = ({ children }) => (
  <div className="App">
    {children}
  </div>
);

export default App;

App.propTypes = {
  children: PropTypes.element.isRequired,
};

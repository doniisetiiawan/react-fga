import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header className="App-header">
    <h1>{title}</h1>
  </header>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

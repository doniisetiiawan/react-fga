import PropTypes from 'prop-types';
import React from 'react';

const Display = ({ counter }) => (
  <h1>{counter}</h1>
);

export default Display;

Display.propTypes = {
  counter: PropTypes.number,
};

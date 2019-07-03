import PropTypes from 'prop-types';
import React from 'react';
import Circle from './Circle';

const RedCircle = ({ x, y, radius }) => (
  <Circle x={x} y={y} radius={radius} fill="red" />
);

export default RedCircle;

RedCircle.propTypes = {
  radius: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
};

import PropTypes from 'prop-types';
import React from 'react';

const Circle = ({
  x, y, radius, fill,
}) => (
  <svg>
    <circle cx={x} cy={y} r={radius} fill={fill} />
  </svg>
);

export default Circle;

Circle.propTypes = {
  fill: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

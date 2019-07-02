import PropTypes from 'prop-types';
import React from 'react';

const Buttons = ({ onDecrement, onIncrement }) => (
  <div>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
);

export default Buttons;

Buttons.propTypes = {
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
};

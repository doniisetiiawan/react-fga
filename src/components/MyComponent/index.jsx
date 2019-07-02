/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import withInnerWidth from './WithInnerWidth';

const MyComponent = ({ innerWidth }) => {
  console.log('window.innerWidth', innerWidth);

  return (
    <div>innerWidth: {innerWidth}</div>
  );
};

export default withInnerWidth(MyComponent);

MyComponent.propTypes = {
  innerWidth: PropTypes.number,
};

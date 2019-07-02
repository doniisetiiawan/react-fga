/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Geolocation = ({ latitude, longitude }) => (
  <div>
    <h1>Geolocation:</h1>
    <div>Latitude: {latitude}</div>
    <div>Longitude: {longitude}</div>
  </div>
);

export default Geolocation;

Geolocation.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

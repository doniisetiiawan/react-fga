import React, { Component } from 'react';

class Geolocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
    };

    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    }
  }

  handleSuccess({ coords: { latitude, longitude } }) {
    this.setState({
      latitude,
      longitude,
    });
  }

  render() {
    const { longitude, latitude } = this.state;

    return (
      <div>
        <h1>Geolocation:</h1>
        <div>Latitude: {latitude}</div>
        <div>Longitude: {longitude}</div>
      </div>
    );
  }
}

export default Geolocation;

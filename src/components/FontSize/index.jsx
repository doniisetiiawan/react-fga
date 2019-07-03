import React, { Component } from 'react';

class FontSize extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 16,
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      value: Number(value),
    });
  };

  render() {
    const { value } = this.state;

    return (
      <input
        type="number"
        value={value}
        onChange={this.handleChange}
        style={{ fontSize: value }}
      />
    );
  }
}

export default FontSize;

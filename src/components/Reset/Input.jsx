import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  reset = () => {
    this.setState({
      value: '',
    });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;

    return (
      <input
        type="text"
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;

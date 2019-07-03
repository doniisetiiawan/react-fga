/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import Input from './Input';

class Reset extends Component {
  handleClick = () => {
    this.element.reset();
  };

  render() {
    return (
      <>
        <Input ref={element => (this.element = element)} />
        <button onClick={this.handleClick}>Reset</button>
      </>
    );
  }
}

export default Reset;

/* eslint-disable no-return-assign */
import React, { Component } from 'react';

class Focus extends Component {
  handleClick = () => {
    this.element.focus();
  };

  render() {
    return (
      <>
        <input
          type="text"
          ref={element => (this.element = element)}
        />
        <button onClick={this.handleClick}>Focus</button>
      </>
    );
  }
}

export default Focus;

import React, { Component } from 'react';
import Buttons from './Buttons';
import Display from './Display';

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
  }

  handleIncrement() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Display counter={counter} />

        <Buttons
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;

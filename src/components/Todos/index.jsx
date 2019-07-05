import React, { Component } from 'react';
import List from './List';
import Form from './Form';

export class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar'],
    };
  }

  handleSubmit = (value) => {
    const { items: items1 } = this.state;

    const items = items1.slice();
    items.unshift(value);

    this.setState({
      items,
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <List items={items} />
        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Todos;

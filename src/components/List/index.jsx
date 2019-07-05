import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar'],
    };
  }

  handleClick = () => {
    const { items: items1 } = this.state;

    const items = items1.slice();
    items.unshift('baz');

    this.setState({
      items,
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <ul>
          {items.map(item => (
            <Item key={item} item={item} onClick={console.log} />
          ))}
        </ul>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default List;

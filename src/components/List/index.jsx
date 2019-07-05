import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar'],
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    const { items } = this.state;
    return items !== nextState.items;
  };

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
          {items.map(item => <li key={item}>{item}</li>)}
        </ul>

        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default List;

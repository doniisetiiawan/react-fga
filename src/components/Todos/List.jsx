import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class List extends PureComponent {
  static propTypes = {
    items: PropTypes.array,
  };

  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }
}

export default List;

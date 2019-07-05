import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Item extends PureComponent {
  static propTypes = {
    item: PropTypes.string,
  };

  render() {
    const { item } = this.props;

    return (
      <div>
        <li>{item}</li>
      </div>
    );
  }
}

export default Item;

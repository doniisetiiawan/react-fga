import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Item extends PureComponent {
  static propTypes = {
    item: PropTypes.string,
    onClick: PropTypes.func,
  };

  handleClick = () => {
    const { onClick, item } = this.props;
    onClick(item);
  };

  render() {
    const { item } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <li onClick={this.handleClick}>
        {item}
      </li>
    );
  }
}

export default Item;

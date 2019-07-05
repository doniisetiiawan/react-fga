import PropTypes from 'prop-types';
import React from 'react';

function Item(props) {
  const { item } = props;

  return (
    <div>
      <li>{item}</li>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.string,
};

export default Item;

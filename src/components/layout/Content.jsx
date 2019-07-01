import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
  <div className="Content">
    {children}
  </div>
);

export default Content;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

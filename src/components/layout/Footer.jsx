import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ copyright }) => (
  <div className="Footer">
    <p>&copy; {copyright}</p>
  </div>
);

export default Footer;

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
};

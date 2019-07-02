import PropTypes from 'prop-types';
import React from 'react';
import withData from './WithData';

const List = ({ data: gists }) => (
  <ul>
    {gists.map(gist => (
      <li key={gist.id}>{gist.description}</li>
    ))}
  </ul>
);

const withGists = withData(
  props => `https://api.github.com/users/${props.username}/gists`,
);

export default withGists(List);

List.propTypes = {
  data: PropTypes.array,
};

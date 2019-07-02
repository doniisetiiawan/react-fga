import React from 'react';
import { ListProvider, ListContext } from './ListContext';

const List = () => (
  <ListProvider>
    <ListContext.Consumer>
      {({ gists, myLogAction }) => (
        <ul>
          {myLogAction()}
          {gists.map(gist => (
            <li key={gist.id}>{gist.description}</li>
          ))}
        </ul>
      )}
    </ListContext.Consumer>
  </ListProvider>
);

export default List;

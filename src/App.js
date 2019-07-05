/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import List from './components/List';
import './App.css';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;

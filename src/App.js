/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleRoot } from 'radium';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <StyleRoot>
      <div className="App">
        <Button />
      </div>
    </StyleRoot>
  );
}

export default App;

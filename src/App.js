/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Circle from './components/Circles/Circle';
import RedCircle from './components/Circles/RedCircle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Circle fill="blue" radius={40} x={40} y={40} />
      <RedCircle radius={40} x={40} y={40} />
    </div>
  );
}

export default App;

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Dev Education" />

      <Content>
        <p>This is our <strong>Content</strong> component</p>
      </Content>

      <Footer
        copyright={`Dev.education ${new Date().getFullYear()}`}
      />
    </div>
  );
}

export default App;

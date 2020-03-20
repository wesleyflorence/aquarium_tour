import React from 'react';
import logo from './logo_white.png';
import './App.css';
import { Tour } from './Tour';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Tour />
    </div>
  );
}

export default App;

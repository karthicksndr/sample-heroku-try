import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey Team, enjoying lockdown? I am fed up being locked up in this room. Madly need to visit WZ! 
        </p>
        <a
          className="App-link"
          href="https://github.com/karthicksndr"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
      </header>
    </div>
  );
}

export default App;

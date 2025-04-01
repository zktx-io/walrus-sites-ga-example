import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/walrus-testnet.png" className="App-logo" alt="logo" />
        <p>
          Walrus Sites GA Example
        </p>
        <span>
          <a
            className="App-link"
            href="https://docs.walrus.site/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Walrus
          </a>
          &nbsp;
          <a
            className="App-link"
            href="https://github.com/marketplace/actions/walrus-sites-ga"
            target="_blank"
            rel="noopener noreferrer"
          >
            Walrus Sites GA
          </a>
          &nbsp;
          <a
            className="App-link"
            href="https://github.com/zktx-io/walrus-sites-ga-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            Example
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;

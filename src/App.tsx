import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/walrus.svg" className="App-logo" alt="Walrus logo" />
          <img src="/slsa.svg" className="App-logo" alt="SLSA logo" />
        </div>
        <p>
          Walrus Sites Provenance Workflow Example
        </p>
        <span>
          <a
            className="App-link"
            href="https://docs.wal.app"
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
          &nbsp;
          <a
            className="App-link"
            href="https://notary.wal.app/site/workflow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Provenance
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;

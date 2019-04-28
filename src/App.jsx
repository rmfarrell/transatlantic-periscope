import React from 'react';
import logo from './logo.svg';
import './App.css';
import style from './style/Main.module.css';
import APIExplorer from './APIExplorer.jsx';
import Home from './APIExplorer.jsx';
import { Router, Link } from '@reach/router';

function App() {
  return (
    <Router>
      <Main path="/">
        <APIExplorer path="api/:model" />
      </Main>
    </Router>
  );
}

export default App;

function Main({ children }) {
  return (
    <div className={style.root}>
      <nav>
        <ul>
          <li>
            API
            <ul>
              <li>
                <Link to="api/relationship">Country Relationship</Link>
              </li>
              <li>
                <Link to="api/deepdive">Deep Dive</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

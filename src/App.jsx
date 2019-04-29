import React from 'react';
import StoreContext from 'storeon/react/context';
import store from './store/index.js';
import './App.css';
import style from './style/Main.module.css';
import APIExplorer from './api-explorer/Index.jsx';
import { Router, Link } from '@reach/router';

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Router>
        <Main path="/">
          <APIExplorer path="api/:model" />
        </Main>
      </Router>
    </StoreContext.Provider>
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

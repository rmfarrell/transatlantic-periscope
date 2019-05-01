import React from 'react';
import StoreContext from 'storeon/react/context';
import store from './store/index.js';
import './App.css';
import style from './style/Main.module.css';
import APIExplorer from './api-explorer/Index.jsx';
import DeepDive from './DeepDive.jsx';
import Relationship from './Relationship.jsx';
import { Router, Link } from '@reach/router';
import deepDiveGenerator from './api/generators/deepDive';
import relationshipPageGenerator from './api/generators/relationshipPage';
import deepDiveSchema from './api/schemae/deepDive';
import relationshipSchema from './api/schemae/relationshipPage';

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Router>
        <Main path="/">
          <APIExplorer
            path="api/relationships"
            model="relationship"
            generate={relationshipPageGenerator}
            schema={relationshipSchema}
          />
          <APIExplorer
            path="api/deepdives"
            model="deepdive"
            generate={deepDiveGenerator}
            schema={deepDiveSchema}
          />
          <DeepDive path="deepdives/:model" />
          <Relationship path="relationships/:model" />
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
            Relationship
            <ul>
              <li>
                <Link to="api/relationships">API</Link>
              </li>
              <li>
                <Link to="/relationships/example">Wireframe</Link>
              </li>
            </ul>
          </li>
          <li>
            Deep Dive
            <ul>
              <li>
                <Link to="api/deepdives">API</Link>
              </li>
              <li>
                <Link to="/deepdives/example">Wireframe</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

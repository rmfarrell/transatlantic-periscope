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
            <h4>Relationship</h4>
            <ul>
              <li>
                <NavLink to="api/relationships">API</NavLink>
              </li>
              <li>
                <NavLink to="/relationships/example">Wireframe</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <h4>Deep Dive</h4>
            <ul>
              <li>
                <NavLink to="api/deepdives">API</NavLink>
              </li>
              <li>
                <NavLink to="/deepdives/example">Wireframe</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? style.active : ''
      };
    }}
  />
);

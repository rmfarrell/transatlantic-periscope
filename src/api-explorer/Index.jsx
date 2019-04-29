import React, { useState } from 'react';
import ss from '../style/Main.module.css';
import useStoreon from 'storeon/react';
import deepDiveGenerator from '../api/generators/deepDive';

export default function({ model = '' }) {
  const stringify = json => {
      try {
        return JSON.stringify(json, null, 4);
      } catch (e) {
        console.error(e);
        return {};
      }
    },
    { deepdive, dispatch } = useStoreon('deepdive'),
    [json, setJson] = useState(stringify(deepdive)),
    [error, setError] = useState(null),
    [isDirty, setIsDirty] = useState(false),
    generate = () => {
      switch (model) {
        case 'deepdive':
          return deepDiveGenerator();
        default:
          return {};
      }
    },
    onSubmit = ev => {
      ev.preventDefault();
      let parsed;
      try {
        parsed = JSON.parse(json);
      } catch (e) {
        setError('JSON Parsing Error');
        return;
      }
      setJson(stringify(parsed));
      setError(null);
      dispatch(`${model}/update`, parsed);
      setIsDirty(false);
    },
    update = val => {
      setJson(val);
      setIsDirty(true);
    },
    ranomizeModel = () => {
      const { error, value } = generate();
      if (error) {
        return setError(error);
      } else {
        update(stringify(value));
      }
    },
    reset = () => {
      update(stringify(deepdive));
      setIsDirty(false);
    };

  return (
    <div className={ss.root}>
      <form onSubmit={onSubmit} styles={error ? 'error' : ss.error}>
        <textarea
          rows="50"
          cols="80"
          value={json}
          onChange={ev => update(ev.target.value)}
        />
        <input type="submit" value="save" disabled={!isDirty} />
        <button onClick={ranomizeModel} type="button">
          <span role="img" aria-label="die">
            🎲
          </span>
        </button>
        <button onClick={reset} type="button">
          <span role="img" aria-label="die">
            🔄
          </span>
        </button>
        {error && <div className={ss.error}>{error}</div>}
      </form>
    </div>
  );
}

const json2 = `
{ "test": true, "test2": false, hi: "true" }
`;

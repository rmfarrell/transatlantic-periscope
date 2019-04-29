import React, { useState, useEffect } from 'react';
import ss from '../style/Main.module.css';
import useStoreon from 'storeon/react';
import deepDiveGenerator from '../api/generators/deepDive';
import relationshipPageGenerator from '../api/generators/relationshipPage';

export default function(props) {
  console.log(props);
  const { model } = props,
    stringify = json => {
      try {
        return JSON.stringify(json, null, 4);
      } catch (e) {
        console.error(e);
        return {};
      }
    },
    { relationship, deepdive, dispatch } = useStoreon(
      'relationship',
      'deepdive'
    ),
    data = { relationship, deepdive }[model],
    [json, setJson] = useState(''),
    [error, setError] = useState(null),
    [isDirty, setIsDirty] = useState(false),
    generate = () => {
      switch (model) {
        case 'deepdive':
          return deepDiveGenerator();
        case 'relationship':
          return relationshipPageGenerator();
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
      update(stringify(data));
      setIsDirty(false);
    };

  useEffect(() => {
    setJson(stringify(data));
  }, [data]);

  return (
    <div className={ss.root}>
      <form onSubmit={onSubmit} styles={error ? 'error' : ss.error}>
        <textarea
          rows="50"
          cols="80"
          value={json}
          onChange={ev => update(ev.target.value)}
        />
        <input type="submit" value="💾" disabled={!isDirty} />
        <button onClick={ranomizeModel} type="button">
          <span role="img" aria-label="die">
            🎲
          </span>
        </button>
        <button onClick={reset} type="button" disabled={!isDirty}>
          <span role="img" aria-label="die">
            🔄
          </span>
        </button>
        {error && <div className={ss.error}>{error}</div>}
      </form>
    </div>
  );
}

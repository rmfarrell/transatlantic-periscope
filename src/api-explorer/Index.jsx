import React, { useState, useEffect } from 'react';
import ss from '../style/Main.module.css';
import useStoreon from 'storeon/react';

export default function(props) {
  const { model, generate = () => {}, validate = () => true } = props,
    { relationship, deepdive, dispatch } = useStoreon(
      'relationship',
      'deepdive'
    ),
    data = { relationship, deepdive }[model],
    [json, setJson] = useState(''),
    [error, setError] = useState(null),
    [isDirty, setIsDirty] = useState(false),
    onSubmit = ev => {
      ev.preventDefault();
      let parsed;
      try {
        parsed = JSON.parse(json);
      } catch (e) {
        setError('JSON Parsing Error');
        return;
      }
      const { error } = validate(parsed);
      if (error) {
        setError(error);
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
        {error && <div className={ss.error}>{error.toString()}</div>}
      </form>
    </div>
  );
}

function stringify(json) {
  try {
    return JSON.stringify(json, null, 4);
  } catch (e) {
    console.error(e);
    return {};
  }
}

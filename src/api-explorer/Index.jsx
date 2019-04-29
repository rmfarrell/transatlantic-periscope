import React, { useState } from 'react';
import ss from '../style/Main.module.css';
import useStoreon from 'storeon/react';

export default function({ model = '' }) {
  const { deepdive, dispatch } = useStoreon('deepdive'),
    [json, setJson] = useState(JSON.stringify(deepdive, null, 4)),
    [error, setError] = useState(null),
    onSubmit = ev => {
      let parsed;
      ev.preventDefault();
      try {
        parsed = JSON.parse(json);
      } catch (e) {
        setError('JSON Parsing Error');
        return;
      }
      setJson(stringify(parsed));
      setError(null);
      dispatch(`${model}/update`, parsed);
    },
    stringify = json => {
      try {
        return JSON.stringify(json, null, 4);
      } catch (e) {
        console.error(e);
        return {};
      }
    };

  return (
    <div className={ss.root}>
      <form onSubmit={onSubmit} styles={error ? 'error' : ss.error}>
        <textarea
          rows="50"
          cols="80"
          value={json}
          onChange={ev => setJson(ev.target.value)}
        />
        <input type="submit" value="save" />
        {error && <div className={ss.error}>{error}</div>}
      </form>
    </div>
  );
}

const json2 = `
{ "test": true, "test2": false, hi: "true" }
`;

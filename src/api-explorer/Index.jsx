import React, { useState, useEffect } from 'react';
import ss from '../style/API.module.css';
import useStoreon from 'storeon/react';
import Joi from '@hapi/joi';

export default function(props) {
  const { model, generate = () => {}, schema = {} } = props,
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

      const { error } = Joi.validate(parsed, schema);
      if (error) {
        setError(error);
        return;
      }
      setJson(stringify(parsed));
      setError(null);
      dispatch(`${model}/update`, parsed);
      setIsDirty(false);
    },
    update = val => {
      setError(null);
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
    <div className={[ss.root, error ? ss.error : ''].join(' ')}>
      <form onSubmit={onSubmit}>
        <textarea
          rows="50"
          cols="80"
          value={json}
          onChange={ev => update(ev.target.value)}
        />
        {error && <p className={ss.errorMsg}>{error.toString()}</p>}
        <div className={ss.buttonRow}>
          <button onClick={ranomizeModel} type="button">
            <span role="img" aria-label="die">
              🎲Randomize
            </span>
          </button>
          <button onClick={reset} type="button" disabled={!isDirty}>
            <span role="img" aria-label="die">
              🔄Reset
            </span>
          </button>
          <input type="submit" value="💾 Save" disabled={!isDirty} />
        </div>
      </form>
    </div>
  );
}

function stringify(json) {
  try {
    return JSON.stringify(json, null, 2);
  } catch (e) {
    console.error(e);
    return {};
  }
}

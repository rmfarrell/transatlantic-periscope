import React from 'react';
import ss from './style/Card.module.css';

export default function({
  backgroundColor = 'transparent',
  classNames = ['grid--item__quarter'],
  children = [],
  style = {}
}) {
  style = Object.assign({ backgroundColor }, style);
  return (
    <div className={[...classNames, ss.root].join(' ')} style={style}>
      {children}
    </div>
  );
}

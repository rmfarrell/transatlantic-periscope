import React from 'react';
import ss from './style/Card.module.css';

export default function({
  backgroundColor = 'transparent',
  className = '',
  children = [],
  style = {}
}) {
  style = Object.assign({ backgroundColor }, style);
  return (
    <div
      className={[className, 'grid--item__quarter', ss.root].join(' ')}
      style={style}
    >
      {children}
    </div>
  );
}

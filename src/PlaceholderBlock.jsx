import React from 'react';

export default function({
  backgroundColor = '#666',
  className = '',
  children = [],
  style = {}
}) {
  style = Object.assign({ backgroundColor }, style);
  return (
    <div className={[className].join(' ')} style={style}>
      {children}
    </div>
  );
}

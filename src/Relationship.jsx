import React, { useState, useEffect } from 'react';
import useStoreon from 'storeon/react';

export default function(props) {
  const {
    relationship: {
      articles: { featured, collection }
    }
  } = useStoreon('deepdive');

  console.log(featured);
  console.log(collection);

  // separate colleciton by type
  collection.reduce((acc, item) => {
    console.log(item.type);
  }, {});

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

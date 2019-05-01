import React, { useState, useEffect } from 'react';
import { reduceArticleCollection } from './helpers';
import useStoreon from 'storeon/react';

import Card from './Card';

export default function(props) {
  const {
      deepdive: {
        articles: { featured, collection }
      }
    } = useStoreon('deepdive'),
    articles = collection.reduce(reduceArticleCollection, {}),
    tiles = featured
      .map(f => Object.assign(f, { featured: true }))
      .concat(
        Object.keys(articles).map(cat => ({ cat, content: articles[cat] }))
      );

  console.log(tiles);

  return (
    <div className="grid">
      {tiles.map((data, idx) => {
        return (
          <Card key={idx}>
            <div>
              <h4>
                {data.featured ? 'Featured' : data.cat}
                {data.content && `(${data.content.length})`}
              </h4>
              <pre>{JSON.stringify(data, null, 4)}</pre>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

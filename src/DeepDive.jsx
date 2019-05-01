import React, { useState, useEffect } from 'react';
import { reduceArticleCollection } from './helpers';
import useStoreon from 'storeon/react';

// libs
import { Grid, Row } from './grid';

// modules
import Card from './Card';

export default function(props) {
  const [isLoading, setIsLoading] = useState(true);
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
      )
      .map(widthDecorator);
  console.log(tiles);

  // console.log(makeGrid(tiles));

  useEffect(() => {
    setTimeout(setIsLoading, 800);
  }, [isLoading]);

  return (
    <div className="grid">
      {isLoading
        ? 'Loading'
        : tiles.map((data, idx) => {
            return (
              <Card key={idx}>
                <div>
                  <h4>
                    {data.featured ? 'Featured' : data.cat}
                    {data.content && ` (${data.content.length})`}
                  </h4>
                  <pre>{JSON.stringify(data.content || data, null, 4)}</pre>
                </div>
              </Card>
            );
          })}
    </div>
  );
}

function widthDecorator(item) {
  item.width = 1;
  item.canExpand = item.width < 2;
  return item;
}

/*
function makeGrid(featuredCount = 0, categories = {}) {
  // TODO: single article no image??
  const keys = Object.keys(categories),
    agg = keys.reduce(
      (acc = 0, item) => {
        acc.total += categories[item].total;
        acc.images += categories[item].images;
        return acc;
      },
      { images: 0, total: 0 }
    ),
    tiles = {
      map: mapTile(),
      status: showStatus && newStatusTile(),
      rest: [],
      featured: []
    },
    uniqueCategories = keys.filter(cat => categories[cat].total > 0),
    grid = Grid(Row(3));

  if (agg.total <= 4) {
    // If there are four or less articles and they all have images they are expanded as Single Article Tiles.
    if (agg.total === agg.images) {
      keys.forEach(cat => {
        for (let x = 0; x < categories[cat].total; x++) {
          tiles.rest.push(singleArticleTile(cat));
        }
      });
      // If there are four or less articles total and any one does not have an image they are
      // all put in one Short Article List.
    } else {
      tiles.rest.push(
        shortListTile(
          agg.total,
          uniqueCategories.length > 1 ? 'mixed' : keys[0]
        )
      );
    }
  } else {
    keys.forEach(cat => {
      if (!categories[cat].total) {
        return;
      }
      tiles.rest.push(
        categoryTile(categories[cat].total, cat, categories[cat].images)
      );
    });
  }
}
*/

import React, { useState, useEffect } from 'react';
import { reduceArticleCollection } from './helpers';
import useStoreon from 'storeon/react';

// libs
import { Grid, Row } from './grid';

// modules
import Card from './Card';

export default function(props) {
  const [isLoading, setIsLoading] = useState(false),
    { relationship } = useStoreon('relationship');
  if (!relationship.articles) return '';
  const {
      articles: { featured, collection }
    } = relationship,
    articles = collection.reduce(reduceArticleCollection, {}),
    tiles = [
      {
        cat: 'Map',
        content: {
          name: 'FooBaria',
          label: 'FBA',
          colors: ['#454334', '#345392'],
          abstract: {
            position: [4, 9]
          },
          geographic: {
            svg: '...',
            x: 0,
            y: 0
          }
        }
      },
      {
        cat: 'Status',
        content: relationship.relationship_status
      },
      ...featured.map(f => Object.assign(f, { featured: true }))
    ]
      .concat(
        Object.keys(articles).map(cat => ({ cat, content: articles[cat] }))
      )
      .map(addWidths),
    rows = makeGrid(tiles);

  function loadingView() {
    return <div className="loading">Loading....</div>;
  }

  function tilesView() {
    return rows.map(({ items, size }, idx) => {
      return (
        <div className="grid" key={idx}>
          {items.map((data, idx) => {
            return (
              <Card key={idx} classNames={[getClass(size, data.width)]}>
                <div>
                  <h4>
                    {data.featured ? 'Featured' : data.cat}
                    {data.content &&
                      data.content.length &&
                      ` (${data.content.length})`}
                  </h4>
                  <pre>{JSON.stringify(data.content || data, null, 2)}</pre>
                </div>
              </Card>
            );
          })}
        </div>
      );
    });
  }

  return <div>{isLoading ? loadingView() : tilesView()}</div>;
}

function getClass(rowSize = 4, width = 1) {
  console.log(rowSize);
  const isWide = width > 1;
  if (rowSize === 3) {
    return isWide ? 'grid--item__two-thirds' : 'grid--item__third';
  }
  if (rowSize === 4) {
    return isWide ? 'grid--item__half' : 'grid--item__quarter';
  }
}

function addWidths(item) {
  item.width = item.width || 1;
  item.canExpand = item.width < 2;
  return item;
}

function makeGrid(tiles = []) {
  const grid = Grid(Row(3));
  grid.add(tiles);
  grid.separateFeatured();
  grid.balance();

  return grid.rows;
}

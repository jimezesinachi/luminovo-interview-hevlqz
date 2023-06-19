import * as React from 'react';
import { useState } from 'react';
import { move } from './help';
import { TreeSegment } from './TreeSegment';

interface TreeProps {
  numberOfIterations: number;
}

export function RecursiveTree() {
  const [data, setData] = useState([
    <TreeSegment
      width={10}
      from={{ x1: 500, y1: 1000 }}
      to={{ x2: 500, y2: 900 }}
    />,
  ]);

  const Tree = (iterator: TreeProps) => {
    function recursor(
      n: number,
      x: number,
      y: number,
      angle: number,
      number: number
    ) {
      setData((data) => {
        data.push(
          <TreeSegment
            width={10}
            from={{ x1: x, y1: y - 100 }}
            to={{ x2: x - 100, y2: y - 200 }}
          />
        );

        data.push(
          <TreeSegment
            width={10}
            from={{ x1: x, y1: y - 100 }}
            to={{ x2: x + 100, y2: y - 200 }}
          />
        );

        return data;
      });

      const newCoordinates1 = move(
        { x: x - 100, y: y - 100 },
        angle / 2,
        number
      );

      const newCoordinates2 = move(
        { x: x + 100, y: y - 100 },
        angle / 2,
        number
      );

      if (n > 1) {
        recursor(n - 1, newCoordinates1.x, newCoordinates1.y, angle, number);
        recursor(n - 1, newCoordinates2.x, newCoordinates2.y, angle, number);
      } else return;
    }

    recursor(iterator.numberOfIterations, 500, 1000, 60, 10);

    return <>{data}</>;
  };

  return (
    <svg
      viewBox="0 0 1000 1000"
      style={{
        width: 400,
        height: 400,
        background: '#fafafa',
        borderRadius: '8px',
      }}
    >
      <Tree numberOfIterations={4} />
    </svg>
  );
}

// Tip #1: drawing polygons by entering pixels is hard!
// Let's make an abstraction <TreeSegment width={number} from={point} to={point} />

// Tip #2: use randomness!

// Tip #3: Done is better than perfect!

// Tip #4: Divide and conquer: what are the fundamental sub-problems
// that you need to solve in order to draw a tree?
// Examples: draw a tree segment, decide when to stop branching,
//

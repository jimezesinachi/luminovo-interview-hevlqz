import * as React from 'react';

export interface TreeSegmentProps {
  width: number;
  from: {
    x1: number;
    y1: number;
  };
  to: {
    x2: number;
    y2: number;
  };
}

export const TreeSegment = (segmentData: TreeSegmentProps) => {
  return (
    <>
      <line
        strokeWidth={segmentData.width}
        stroke="#111"
        x1={segmentData.from.x1}
        y1={segmentData.from.y1}
        x2={segmentData.to.x2}
        y2={segmentData.to.y2}
      />

      {/* <line
        strokeWidth="10"
        stroke="#111"
        x1={segmentData.from.x1}
        y1={segmentData.from.y1 - 100}
        x2={segmentData.to.x2 - 100}
        y2={segmentData.to.y2 - 200}
      />

      <line
        strokeWidth="10"
        stroke="#111"
        x1={segmentData.from.x1}
        y1={segmentData.from.y1 - 100}
        x2={segmentData.to.x2 + 100}
        y2={segmentData.to.y2 - 200}
      /> */}
    </>
  );
};

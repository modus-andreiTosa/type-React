import React from 'react';
import { arc } from 'd3';

const mouthArc = arc();
const PI = Math.PI;

export const Face = () => {
  const svgWidth = 1820;
  const svgHeight = 1000;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const faceRadius = 245;
  const fillColor = '#0da3c4';
  const strokeColor = 'black';
  const strokeWidth = 10;
  const eyeOffsetX = 125;
  const eyeOffsetY = 100;
  const eyeRadius = 40;

  return (
    <svg width={svgWidth} height={svgHeight}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
          r={faceRadius}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <path
          d={
            mouthArc({
              innerRadius: 120,
              outerRadius: 130,
              startAngle: PI / 2,
              endAngle: PI * (3 / 2),
            }) || undefined
          }
        />
      </g>
    </svg>
  );
};

// src/Partition.js
import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import './partition.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Partition = ({ color, onRemove }) => {
  const [verticalSplit, setVerticalSplit] = useState(false);
  const [horizontalSplit, setHorizontalSplit] = useState(false);
  const [firstPartitionColor, setFirstPartitionColor] = useState(color);
  const [secondPartitionColor, setSecondPartitionColor] = useState(getRandomColor());

  const splitVertically = () => setVerticalSplit(true);
  const splitHorizontally = () => setHorizontalSplit(true);

  if (verticalSplit) {
    return (
      <div className="partition-container-vertical">
        <ResizableBox className="resizable-box" width={300} height={Infinity} axis="x">
          <Partition color={firstPartitionColor} onRemove={() => setVerticalSplit(false)} />
        </ResizableBox>
        <ResizableBox className="resizable-box" width={300} height={Infinity} axis="x">
          <Partition color={secondPartitionColor} onRemove={() => setVerticalSplit(false)} />
        </ResizableBox>
      </div>
    );
  }

  if (horizontalSplit) {
    return (
      <div className="partition-container-horizontal">
        <ResizableBox className="resizable-box" width={Infinity} height={300} axis="y">
          <Partition color={firstPartitionColor} onRemove={() => setHorizontalSplit(false)} />
        </ResizableBox>
        <ResizableBox className="resizable-box" width={Infinity} height={300} axis="y">
          <Partition color={secondPartitionColor} onRemove={() => setHorizontalSplit(false)} />
        </ResizableBox>
      </div>
    );
  }

  return (
    <div className="partition" style={{ backgroundColor: color }}>
      <button onClick={splitVertically}>V</button>
      <button onClick={splitHorizontally}>H</button>
      <button onClick={onRemove}>-</button>
    </div>
  );
};

export default Partition;

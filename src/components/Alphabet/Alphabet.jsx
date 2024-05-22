// src/AlphabetGrid.js
import React, { useState } from 'react';
import './alphabet.css';

const AlphabetGrid = () => {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    let newString = outputString + letter;
    let regex = /(.)\1{2,}/g;
    newString = newString.replace(regex, match => '_'.repeat(match.length));
    setOutputString(newString);
  };

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <div>
      <div className="grid-container">
        {letters.map((letter) => (
          <div key={letter} className="tile" onClick={() => handleClick(letter)}>
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString">{outputString}</div>
    </div>
  );
};

export default AlphabetGrid;

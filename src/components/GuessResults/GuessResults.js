import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList, checkList }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <Guess
          key={rowIndex}
          check={checkList[rowIndex] || []}
          guess={guessList[rowIndex] || ''} />
      ))}
    </div>
  );
}

export default GuessResults;

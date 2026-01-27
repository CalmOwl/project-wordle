import React from 'react';

function GuessResults({ guessList }) {
  return (
    <div className='guess-results'>
      {guessList.map((guess) => (
        <p className='guess' key={Math.random()}>{guess}</p>
      ))}
    </div>
  );
}

export default GuessResults;

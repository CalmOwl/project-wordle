import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


function GuessInput({ guessList, setGuessList, answer }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const nextGuessList = [...guessList];
    setGuessList([...nextGuessList, guess]);
    setGuess('');
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={handleSubmit}>
      <label
        htmlFor='guess-input'>
        Enter guess:
      </label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        pattern='[A-Za-z]{5}'
        title='5 letters exactly'
        maxLength={5}
        required
        disabled={guessList[guessList.length - 1] === answer || guessList.length === NUM_OF_GUESSES_ALLOWED}
        style={{ textTransform: 'uppercase' }}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      >
      </input>
    </form >
  )
}

export default GuessInput;

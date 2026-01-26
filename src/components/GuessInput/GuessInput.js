import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
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
        style={{ textTransform: 'uppercase' }}
        onChange={(event) => setGuess(event.target.value)}
      >
      </input>
    </form >
  )
}

export default GuessInput;

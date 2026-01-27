import React from 'react';

function GuessInput({guessList, setGuessList}) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const nextGuessList = [...guessList];
    setGuessList([...nextGuessList, guess]);
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
        title='5 letters exactly'
        maxLength={5}
        style={{ textTransform: 'uppercase' }}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      >
      </input>
    </form >
  )
}

export default GuessInput;

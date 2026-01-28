import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [checkList, setCheckList] = React.useState([]);

  return (
    <>
      <GuessResults
        guessList={guessList}
        checkList={checkList} />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        checkList={checkList}
        setCheckList={setCheckList}
        answer={answer} />
    </>
  );
}

export default Game;

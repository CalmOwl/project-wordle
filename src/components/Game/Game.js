import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess, getBannerState } from '../../game-helpers';
import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import { Banner } from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const checkList = guessList.map(guess => checkGuess(guess, answer));
  const banner = getBannerState(answer, guessList);

  return (
    <>
      {banner && <Banner mood={banner.mood}>{banner.message}</Banner>}
      <GuessResults
        guessList={guessList}
        checkList={checkList} />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer} />
    </>
  );
}

export default Game;

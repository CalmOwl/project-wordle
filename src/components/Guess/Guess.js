import React from 'react';
import { range } from '../../utils';


function Guess({ guess, check }) {

  return (
    <p className='guess'>
      {range(5).map((index) => (
        <span
          className={`cell ${check[index] ? check[index].status : ''}`}
          key={index}>
          {guess[index] || ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;

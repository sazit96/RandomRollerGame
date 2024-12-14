import React, { useState } from 'react';
import Die from './components/Die';
import { func } from 'prop-types';
//hello 
function App() {
  const [dice, setDice] = useState(generateNewDice())

  function generateNewDice () {
  return new Array(10)
         .fill(0)
         .map(() => Math.ceil(Math.random() * 6))
  }

  function rollDise () {
    setDice(generateNewDice)
  }

  const diceElement = dice.map(num => <Die value={num} />)
  
  return (
    <main className="main">
      <div className="dice-container">
       {diceElement}
      </div>
      <button className='roll-dice' onClick={rollDise}>Roll</button>
    </main>
  );
}

export default App;

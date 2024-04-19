import React from 'react'
import Game from './GameState'

const Reset = ({gameState,onReset}) => {
  // if(gameState===Game.inProgress) return; 
  return (
    <button onClick={onReset} className='reset-button'>Reset</button>
  )
}

export default Reset
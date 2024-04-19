import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

const Board = ({tiles,handleTileClick,strikeClass}) => {
  return (
    <div className='board'>
      <Tile onClick={()=>handleTileClick(0)} value={tiles[0]} className="right-border bottom-border" />
      <Tile onClick={()=>handleTileClick(1)} value={tiles[1]} className="right-border bottom-border" />
      <Tile onClick={()=>handleTileClick(2)} value={tiles[2]} className=" bottom-border" />
      <Tile onClick={()=>handleTileClick(3)} value={tiles[3]} className="right-border bottom-border" />
      <Tile onClick={()=>handleTileClick(4)} value={tiles[4]} className="right-border bottom-border"/>
      <Tile onClick={()=>handleTileClick(5)} value={tiles[5]} className=" bottom-border"/>
      <Tile onClick={()=>handleTileClick(6)} value={tiles[6]} className="right-border " />
      <Tile onClick={()=>handleTileClick(7)} value={tiles[7]} className="right-border " />
      <Tile onClick={()=>handleTileClick(8)} value={tiles[8]} />
      <Strike strikeClass={strikeClass} />
    </div>
  )
}

export default Board